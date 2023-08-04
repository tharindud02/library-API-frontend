import { combineReducers } from "redux";
import booksReducer from "./books";
import authorsReducer from "./author";

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
});

export default rootReducer;
