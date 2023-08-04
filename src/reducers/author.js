import {
  SET_AUTHORS,
  CREATE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_SUCCESS,
} from "../actions/authorActions";

const initialState = [];

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return action.payload;
    case CREATE_AUTHOR_SUCCESS:
      return [...state, action.payload];
    case UPDATE_AUTHOR_SUCCESS:
      return state.map((author) =>
        author._id === action.payload._id ? action.payload : author
      );
    case DELETE_AUTHOR_SUCCESS:
      return state.filter((author) => author._id !== action.payload);
    default:
      return state;
  }
};

export default authorsReducer;
