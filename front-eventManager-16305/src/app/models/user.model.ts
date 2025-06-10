export interface User {
  id?: number;                    // Optional for new users
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: string;            // Set by backend
  organizedEvents?: Event[];      // Related events
}

// Separate interfaces for API requests
export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface UpdateUserRequest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}