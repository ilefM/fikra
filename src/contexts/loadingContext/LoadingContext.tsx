import { createContext } from "react";
import { ILoadingContext } from "../../interfaces/ILoadingContext";

export const LoadingContext = createContext<ILoadingContext | undefined>(
  undefined
);
