'use client';

import { useEffect, useMemo, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet';
import type { DayInfo, Location, RouteSegment } from '@/components/trip/types';
import { googleMapsPlaceUrl } from '@/lib/maps';
import {
  dayColor,
  itineraryLocationsForDayView,
  locationsForSelectedDays,
  routeIcon,
  routesForDay,
  type DaySelectionMode,
  type EdgeVisibility,
} from '@/lib/tripPlan';

type Props = {
  selectedDays: number[];
  selectionMode: DaySelectionMode;
  edgeVisibility: EdgeVisibility;
  onSelectDay: (day: number) => void;
  onSelectionModeChange: (mode: DaySelectionMode) => void;
  onEdgeVisibilityChange: (visibility: EdgeVisibility) => void;
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

type RoutePosition = {
  route: RouteSegment;
  day: number;
  positions: [number, number][];
};

const edgeOptions: { value: EdgeVisibility; label: string }[] = [
  { value: 'all', label: '顯示全部' },
  { value: 'hideStart', label: '隱藏頭段' },
  { value: 'hideEnd', label: '隱藏尾段' },
  { value: 'hideBoth', label: '隱藏頭尾' },
];

function markerIcon(location: Location, color: string, active: boolean) {
  return L.divIcon({
    className: '',
    html: `<div class="marker-pin" style="background:${color};opacity:${active ? 1 : 0.28}">${location.id}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

function arrowIcon(color: string, angle: number, active: boolean) {
  return L.divIcon({
    className: '',
    html: `<div class="route-arrow ${active ? 'route-arrow-active' : ''}" style="--angle:${angle}deg;color:${color};opacity:${active ? 1 : 0.25}">➜</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function midpoint(positions: [number, number][]) {
  return [
    (positions[0][0] + positions[1][0]) / 2,
    (positions[0][1] + positions[1][1]) / 2,
  ] as [number, number];
}

function FitBounds({ locations }: { locations: Location[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 0) return;

    const bounds = L.latLngBounds(locations.map((location) => [location.lat, location.lng] as [number, number]));
    map.fitBounds(bounds, {
      padding: [64, 64],
      maxZoom: 12,
      animate: true,
    });
  }, [locations, map]);

  return null;
}

function DirectionArrow({ routePosition, color, active }: { routePosition: RoutePosition; color: string; active: boolean }) {
  const map = useMap();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const updateAngle = () => {
      const from = map.latLngToLayerPoint(routePosition.positions[0]);
      const to = map.latLngToLayerPoint(routePosition.positions[1]);
      setAngle(Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI));
    };

    updateAngle();
    map.on('zoomend moveend', updateAngle);
    return () => {
      map.off('zoomend moveend', updateAngle);
    };
  }, [map, routePosition.positions]);

  return (
    <Marker
      position={midpoint(routePosition.positions)}
      icon={arrowIcon(color, angle, active)}
      interactive={false}
    />
  );
}

export default function TripMap({
  selectedDays,
  selectionMode,
  edgeVisibility,
  onSelectDay,
  onSelectionModeChange,
  onEdgeVisibilityChange,
  locations,
  routes,
  days,
}: Props) {
  const selectedSet = useMemo(() => new Set(selectedDays), [selectedDays]);
  const locationMap = useMemo(() => new Map(locations.map((location) => [location.id, location])), [locations]);
  const activeLocations = useMemo(
    () => locationsForSelectedDays(locations, routes, selectedDays, edgeVisibility),
    [edgeVisibility, locations, routes, selectedDays],
  );
  const activeIds = useMemo(() => new Set(activeLocations.map((location) => location.id)), [activeLocations]);

  const routePositions = useMemo(() => {
    return days.flatMap((day) => {
      return routesForDay(locations, routes, day.day, edgeVisibility)
        .map((route) => {
          const from = locationMap.get(route.from);
          const to = locationMap.get(route.to);
          if (!from || !to) return null;

          return {
            route,
            day: day.day,
            positions: [[from.lat, from.lng], [to.lat, to.lng]] as [number, number][],
          };
        })
        .filter((route): route is RoutePosition => route !== null);
    });
  }, [days, edgeVisibility, locationMap, locations, routes]);

  const markerDay = useMemo(() => {
    const result = new Map<number, number>();
    for (const day of days) {
      for (const location of itineraryLocationsForDayView(locations, routes, day.day, edgeVisibility)) {
        const current = result.get(location.id) ?? 0;
        const selectedPriority = selectedSet.has(day.day) ? 10 : 0;
        const currentPriority = selectedSet.has(current) ? 10 : 0;
        if (selectedPriority + day.day >= currentPriority + current) {
          result.set(location.id, day.day);
        }
      }
    }
    return result;
  }, [days, edgeVisibility, locations, routes, selectedSet]);

  const visibleMarkerIds = useMemo(() => new Set(markerDay.keys()), [markerDay]);

  return (
    <div id="map" className="relative h-[420px] overflow-hidden rounded-3xl md:h-[600px]">
      <div className="absolute z-[500] m-3 grid max-w-[calc(100%-1.5rem)] gap-2 rounded-2xl bg-white/90 p-2 shadow-lg shadow-slate-900/10 backdrop-blur print:hidden lg:grid-cols-[auto_auto_1fr]">
        <div className="flex gap-2 overflow-x-auto">
          {days.map((day) => {
            const active = selectedSet.has(day.day);
            const color = dayColor(day.day);

            return (
              <button
                key={day.day}
                type="button"
                onClick={() => onSelectDay(day.day)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-black transition ${
                  active ? 'text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
                style={active ? { backgroundColor: color, borderColor: color } : undefined}
              >
                Day {day.day}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onSelectionModeChange('single')}
            className={`rounded-full border px-3 py-2 text-xs font-black ${
              selectionMode === 'single' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            單選
          </button>
          <button
            type="button"
            onClick={() => onSelectionModeChange('range')}
            className={`rounded-full border px-3 py-2 text-xs font-black ${
              selectionMode === 'range' ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            連續多選
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {edgeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onEdgeVisibilityChange(option.value)}
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-black ${
                edgeVisibility === option.value
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <MapContainer center={[33.16, 130.77]} zoom={8} scrollWheelZoom={false} className="h-full w-full">
        <FitBounds locations={activeLocations} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {routePositions.map((routePosition) => {
          const active = selectedSet.has(routePosition.day);
          const color = dayColor(routePosition.day);

          return (
            <Polyline
              key={`${routePosition.day}-${routePosition.route.from}-${routePosition.route.to}`}
              positions={routePosition.positions}
              pathOptions={{ color, weight: active ? 7 : 3, opacity: active ? 0.9 : 0.25 }}
            >
              <Tooltip sticky>
                {routeIcon(routePosition.route.mode)} {routePosition.route.modeLabel} · {routePosition.route.duration}
              </Tooltip>
            </Polyline>
          );
        })}

        {routePositions.map((routePosition) => {
          const active = selectedSet.has(routePosition.day);
          const color = dayColor(routePosition.day);

          return (
            <DirectionArrow
              key={`arrow-${routePosition.day}-${routePosition.route.from}-${routePosition.route.to}`}
              routePosition={routePosition}
              color={color}
              active={active}
            />
          );
        })}

        {locations
          .filter((location) => visibleMarkerIds.has(location.id))
          .map((location) => {
            const active = activeIds.has(location.id);
            const color = dayColor(markerDay.get(location.id) ?? location.day);

            return (
              <Marker key={location.id} position={[location.lat, location.lng]} icon={markerIcon(location, color, active)}>
                <Popup>
                  <div className="min-w-[190px]">
                    <strong>{location.id}. {location.name}</strong>
                    <br />
                    {location.date}
                    <br />
                    {location.address}
                    <br />
                    <a href={googleMapsPlaceUrl(location)} target="_blank" rel="noreferrer">
                      Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
}
