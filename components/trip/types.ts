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
  googleMapsUrl: string;
};

export type DayInfo = {
  day: number;
  date: string;
  title: string;
  summary: string;
  traffic: string;
};

export type SpotGuide = {
  locationId: number;
  summary: string;
  recommendationLevel: number;
  suggestedStayMinutes: number;
  bestPhotoTime: string;
  mustPhoto: string[];
  mustVideo: string[];
  mustEat: string[];
  mustBuy: string[];
  mustDo: string[];
  familyTips: string[];
  photoTips: string[];
  checklist: string[];
  tips: string[];
};
