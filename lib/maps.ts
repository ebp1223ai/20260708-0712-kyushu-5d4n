import type { Location } from '@/components/trip/types';

export function googleMapsPlaceUrl(location: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
}

export function googleMapsDirectionsUrl(from: Location, to: Location) {
  return `https://www.google.com/maps/dir/?api=1&origin=${from.lat},${from.lng}&destination=${to.lat},${to.lng}&travelmode=driving`;
}
