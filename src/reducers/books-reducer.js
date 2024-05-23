export const ACTIONS_REDUCER_BOOKS = {
  ADD_BOOK_IN_READING_LIST: "ADD_BOOK_IN_READING_LIST",
  REMOVE_BOOK_FROM_READING_LIST: "REMOVE_BOOK_FROM_READING_LIST",
  SET_READING_LIST: "SET_READING_LIST",
};

export const bookInitialState =
  JSON.parse(localStorage.getItem("readingList")) || [];

export const bookReducer = (state, action) => {
  if (action.type === ACTIONS_REDUCER_BOOKS.ADD_BOOK_IN_READING_LIST) {
    return [...state, action.payload];
  }

  if (action.type === ACTIONS_REDUCER_BOOKS.REMOVE_BOOK_FROM_READING_LIST) {
    return state.filter((book) => book.ISBN !== action.payload.ISBN);
  }

  if (action.type === ACTIONS_REDUCER_BOOKS.SET_READING_LIST) {
    return action.payload;
  }

  return state;
};
