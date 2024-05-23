import { useReducer, createContext } from "react";
import { filterInitialState, filterReducer } from "../reducers/filter-reducer";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
