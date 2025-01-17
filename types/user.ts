import { ApiResponse } from "./api";

export enum UserRole {
  Player = "player",
  Parent = "parent",
  Kid = "kid",
}

export type AuthResponse = ApiResponse<{ user: User; token: string }>;

export type User = {
  id: number;
  email: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
};
