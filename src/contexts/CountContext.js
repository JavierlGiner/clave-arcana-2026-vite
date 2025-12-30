import { createContext, useContext } from "react";

export const CountContext = createContext();

export const useCountContext = () => {
  return useContext(CountContext);
};
