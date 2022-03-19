import { createContext } from "react";

export interface User {
  name: string;
  logged: boolean;
}

export interface TContextState {
  user: User;
}

export const initialState = {
  user: { name: "Anderson", logged: false },
  setUser: (user: User) => {},
};

export const AuthContext = createContext(initialState);
