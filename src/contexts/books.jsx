import { useReducer, createContext } from "react";
import { bookInitialState, bookReducer } from "../reducers/books-reducer";

export const BooksContext = createContext();
export function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(bookReducer, bookInitialState);

  return (
    <BooksContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
