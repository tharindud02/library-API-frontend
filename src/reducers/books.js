import {
  FETCH_BOOKS_SUCCESS,
  CREATE_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from "../actions/bookActions";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload;
    case CREATE_BOOK_SUCCESS:
      return [...state, action.payload];
    case UPDATE_BOOK_SUCCESS:
      return state.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
    case DELETE_BOOK_SUCCESS:
      return state.filter((book) => book._id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
