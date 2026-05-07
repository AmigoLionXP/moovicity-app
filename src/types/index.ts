// Common types and interfaces

export interface Delay {
  id: string;
  lineName: string;
  delayMinutes: number;
  timestamp: Date;
  status: 'on-time' | 'delayed' | 'cancelled';
}

export interface AlternativeRoute {
  id: string;
  type: 'bus' | 'uber' | 'bolt';
  duration: number;
  cost?: number;
  departure: Date;
}

export interface Station {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}
