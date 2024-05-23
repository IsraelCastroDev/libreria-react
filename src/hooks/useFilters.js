import { ACTIONS_REDUCER_FILTER } from "../reducers/filter-reducer";
import { useEffect, useContext, useState } from "react";
import { FilterContext } from "../contexts/filters";
import books from "../books.json";

export function useFilters() {
  const [booksList] = useState(books.library);

  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  const { state, dispatch } = context;

  useEffect(() => {
    const filteredBooks = booksList.filter((b) => {
      return state.genre === "all" || b.book.genre === state.genre;
    });

    dispatch({
      type: ACTIONS_REDUCER_FILTER.FILTERS_BOOKS,
      payload: filteredBooks,
    });
  }, [state.genre, booksList, dispatch]);

  const updateFilters = (newGenre) => {
    dispatch({ type: ACTIONS_REDUCER_FILTER.UPDATE_FILTER, payload: newGenre });
    localStorage.setItem("filters", newGenre);
  };

  return {
    filteredBooks: state.filteredBooks,
    filters: state,
    updateFilters,
    allBooks: booksList,
  };
}
