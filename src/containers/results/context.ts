import { createContext, Dispatch, SetStateAction } from "react";

export interface ResultsContextValue {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

export const ResultsContext = createContext<ResultsContextValue>({
  sortBy: "",
  setSortBy() {},
});
