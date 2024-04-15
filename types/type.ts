import { z } from "zod";

export type PassengersProps = {
  id: string;
  text: string;
}[];

export type AvailableFlightProps = {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  departure: string;
  destination: string;
  estimatedTime: string;
  desc: string;
  price: string;
}[];

export type TestimonialsType = {
  id: string;
  text: string;
  img: any;
  name: string;
  country: string;
}[];

export type User = {
  [x: string]: any;
};

interface UserDetial {
  _id: string;
  firstname: string;
  lastname: string;
  gender: string;
  country: string;
  createdAt: string; // Date string
  email: string;
  phone: string;
  role: string;
  verified: boolean;
  // Add other fields if needed
}

interface LoginResponse {
  status: string;
  message: string;
  access_token: string;
  data: {
    user: UserDetial;
    generalToken: string;
    generalTokenExpiration: string; // Date string
    lastLogin: string; // Date string
  };
}

// export const LoginResponseSchema = z.infer<typeof LoginResponse>();
