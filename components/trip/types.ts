export type Location = {
  id: number;
  name: string;
  date: string;
  day: number;
  type: string;
  address: string;
  lat: number;
  lng: number;
  color: string;
};

export type RouteSegment = {
  from: number;
  to: number;
  mode: string;
  modeLabel: string;
  duration: string;
  durationMin?: number;
  note: string;
};

export type DayInfo = {
  day: number;
  date: string;
  title: string;
  summary: string;
  traffic: string;
};
