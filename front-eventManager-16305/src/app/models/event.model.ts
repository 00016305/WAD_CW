export interface Event {
  id?: number;
  title: string;
  description: string;
  dateTime: string;              // ISO date string
  location: string;
  maxAttendees: number;
  createdAt?: string;
  organizerId: number;           // Foreign key to User
}

export interface CreateEventRequest {
  title: string;
  description: string;
  dateTime: string;
  location: string;
  maxAttendees: number;
  organizerId: number;
}

export interface UpdateEventRequest {
  id: number;
  title: string;
  description: string;
  dateTime: string;
  location: string;
  maxAttendees: number;
  organizerId: number;
}