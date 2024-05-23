export const ACTIONS_REDUCER_FILTER = {
  UPDATE_FILTER: "UPDATE_FILTER",
  FILTERS_BOOKS: "FILTERS_BOOKS",
};

export const filterInitialState = {
  genre: localStorage.getItem("filters") || "all",
};

export const filterReducer = (state, action) => {
  if (action.type === ACTIONS_REDUCER_FILTER.UPDATE_FILTER) {
    return {
      ...state,
      genre: action.payload,
    };
  }

  if (action.type === ACTIONS_REDUCER_FILTER.FILTERS_BOOKS) {
    return {
      ...state,
      filteredBooks: action.payload,
    };
  }

  return state;
};
