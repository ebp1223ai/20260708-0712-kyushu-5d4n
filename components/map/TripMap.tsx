'use client';

import { useEffect, useMemo } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet';
import type { DayInfo, Location, RouteSegment } from '@/components/trip/types';
import { googleMapsPlaceUrl } from '@/lib/maps';
import { dayColor, itineraryLocationsForDay, routeIcon, routesForDay } from '@/lib/tripPlan';

type Props = {
  selectedDay: number;
  onSelectDay: (day: number) => void;
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

type RoutePosition = {
  route: RouteSegment;
  day: number;
  positions: [number, number][];
};

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
    html: `<div class="route-arrow" style="color:${color};opacity:${active ? 1 : 0.25};transform:rotate(${angle}deg)">➜</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

function midpoint(positions: [number, number][]) {
  return [
    (positions[0][0] + positions[1][0]) / 2,
    (positions[0][1] + positions[1][1]) / 2,
  ] as [number, number];
}

function bearing(positions: [number, number][]) {
  const [from, to] = positions;
  const y = to[1] - from[1];
  const x = to[0] - from[0];
  return Math.atan2(y, x) * (180 / Math.PI);
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

export default function TripMap({ selectedDay, onSelectDay, locations, routes, days }: Props) {
  const locationMap = useMemo(() => new Map(locations.map((location) => [location.id, location])), [locations]);
  const activeLocations = useMemo(
    () => itineraryLocationsForDay(locations, selectedDay),
    [locations, selectedDay],
  );
  const activeIds = useMemo(() => new Set(activeLocations.map((location) => location.id)), [activeLocations]);
  const activeRouteKeys = useMemo(
    () => new Set(routesForDay(locations, routes, selectedDay).map((route) => `${route.from}-${route.to}`)),
    [locations, routes, selectedDay],
  );

  const routePositions = useMemo(() => {
    return days.flatMap((day) => {
      return routesForDay(locations, routes, day.day)
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
  }, [days, locationMap, locations, routes]);

  return (
    <div id="map" className="relative h-[420px] overflow-hidden rounded-3xl md:h-[600px]">
      <div className="absolute z-[500] m-3 flex max-w-[calc(100%-1.5rem)] gap-2 overflow-x-auto rounded-full bg-white/90 p-2 shadow-lg shadow-slate-900/10 backdrop-blur print:hidden">
        {days.map((day) => {
          const active = selectedDay === day.day;
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

      <MapContainer center={[33.16, 130.77]} zoom={8} scrollWheelZoom={false} className="h-full w-full">
        <FitBounds locations={activeLocations} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {routePositions.map(({ route, day, positions }) => {
          const active = activeRouteKeys.has(`${route.from}-${route.to}`);
          const color = dayColor(active ? selectedDay : day);

          return (
            <Polyline
              key={`${day}-${route.from}-${route.to}`}
              positions={positions}
              pathOptions={{ color, weight: active ? 7 : 3, opacity: active ? 0.9 : 0.25 }}
            >
              <Tooltip sticky>
                {routeIcon(route.mode)} {route.modeLabel} · {route.duration}
              </Tooltip>
            </Polyline>
          );
        })}

        {routePositions.map(({ route, day, positions }) => {
          const active = activeRouteKeys.has(`${route.from}-${route.to}`);
          const color = dayColor(active ? selectedDay : day);

          return (
            <Marker
              key={`arrow-${day}-${route.from}-${route.to}`}
              position={midpoint(positions)}
              icon={arrowIcon(color, bearing(positions), active)}
              interactive={false}
            />
          );
        })}

        {locations.map((location) => {
          const active = activeIds.has(location.id);
          const color = active ? dayColor(selectedDay) : dayColor(location.day);

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
