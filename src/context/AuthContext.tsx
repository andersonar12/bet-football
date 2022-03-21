import { User } from "interfaces/global-interfaces";
import { createContext } from "react";

export const initialState = {
  user: { name: "Anderson", logged: false },
  setUser: (user: User) => {},
};

export const AuthContext = createContext(initialState);
