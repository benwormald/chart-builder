import { createContext } from "react";

const DataContext = createContext();

export const DataConsumer = DataContext.Consumer;
export const DataProvider = DataContext.Provider;
