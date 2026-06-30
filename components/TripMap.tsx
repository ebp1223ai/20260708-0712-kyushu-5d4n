'use client';

import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip } from 'react-leaflet';
import type { Location, RouteSegment } from './types';
import { googleMapsPlaceUrl } from '@/lib/maps';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
};

function markerIcon(location: Location) {
  return L.divIcon({
    className: '',
    html: `<div class="marker-pin" style="background:${location.color}">${location.id}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

export default function TripMap({ locations, routes }: Props) {
  const locationMap = new Map(locations.map((location) => [location.id, location]));
  const center: [number, number] = [33.16, 130.77];

  const routePositions = routes
    .map((route) => {
      const from = locationMap.get(route.from);
      const to = locationMap.get(route.to);
      if (!from || !to) return null;
      return {
        route,
        positions: [[from.lat, from.lng], [to.lat, to.lng]] as [number, number][],
        color: from.color,
      };
    })
    .filter(Boolean) as { route: RouteSegment; positions: [number, number][]; color: string }[];

  return (
    <div className="h-[520px] overflow-hidden rounded-3xl md:h-[680px]">
      <MapContainer center={center} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {routePositions.map(({ route, positions, color }) => (
          <Polyline
            key={`${route.from}-${route.to}`}
            positions={positions}
            pathOptions={{ color, weight: 5, opacity: 0.75 }}
          >
            <Tooltip sticky>{route.note}｜{route.duration}</Tooltip>
          </Polyline>
        ))}

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={markerIcon(location)}
          >
            <Popup>
              <div className="min-w-[180px]">
                <strong>{location.id}. {location.name}</strong>
                <br />
                {location.date}
                <br />
                {location.address}
                <br />
                <a href={googleMapsPlaceUrl(location)} target="_blank" rel="noreferrer">
                  開啟 Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
