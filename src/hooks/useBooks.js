import { useEffect, useContext } from "react";
import { ACTIONS_REDUCER_BOOKS } from "../reducers/books-reducer";
import { BooksContext } from "../contexts/books";
import toast from "react-hot-toast";

export function useBooks() {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error("useBooks must be used within a BooksProvider");
  }

  const { state, dispatch } = context;

  // sincronizar pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "readingList") {
        dispatch({
          type: ACTIONS_REDUCER_BOOKS.ADD_BOOK_IN_READING_LIST,
          payload: e.newValue ? JSON.parse(e.newValue) : [],
        });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [dispatch]);

  const handleClick = (book) => {
    const bookInList = state.some((b) => b.ISBN === book.ISBN);

    if (bookInList) {
      dispatch({
        type: ACTIONS_REDUCER_BOOKS.REMOVE_BOOK_FROM_READING_LIST,
        payload: book,
      });
      toast("Quitado de tu lista de lectura", {
        icon: "🗑",
      });
    } else {
      dispatch({
        type: ACTIONS_REDUCER_BOOKS.ADD_BOOK_IN_READING_LIST,
        payload: book,
      });
      toast.success("Agregado en tu lista de lectura.");
    }

    const updateList = bookInList
      ? state.filter((b) => b.ISBN !== book.ISBN)
      : [...state, book];

    localStorage.setItem("readingList", JSON.stringify(updateList));
  };

  const isInReadingList = (book) => {
    // si el libro ya existe en la lista de lectura, retornamos true
    return state.some((b) => b.ISBN === book.ISBN);
  };

  const deleteBook = (book) => {
    dispatch({
      type: ACTIONS_REDUCER_BOOKS.REMOVE_BOOK_FROM_READING_LIST,
      payload: book,
    });

    toast("Quitado de tu lista de lectura", {
      icon: "🗑",
    });

    const updateList = state.filter((b) => b.ISBN !== book.ISBN);
    localStorage.setItem("readingList", JSON.stringify(updateList));
  };

  return {
    readingList: state,
    handleClick,
    isInReadingList,
    deleteBook,
  };
}
