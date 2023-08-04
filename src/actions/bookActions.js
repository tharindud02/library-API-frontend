import api from "../services/api";
import { toast } from "react-toastify";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const CREATE_BOOK_SUCCESS = "CREATE_BOOK_SUCCESS";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";

// Action creators
export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const createBookSuccess = (book) => ({
  type: CREATE_BOOK_SUCCESS,
  payload: book,
});

export const updateBookSuccess = (book) => ({
  type: UPDATE_BOOK_SUCCESS,
  payload: book,
});

export const deleteBookSuccess = (bookId) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: bookId,
});

// Thunk action to fetch books
export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/books");
      dispatch(fetchBooksSuccess(response.data));
    } catch (error) {
      toast.error(error.message);
    }
  };
};

// Thunk action to create a book
export const createBook = (formData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/book", formData);
      dispatch(createBookSuccess(response.data));
      toast.success("Book Created Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
};

// Thunk action to update a book
export const updateBook = (id, formData) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/book/${id}`, formData);
      dispatch(updateBookSuccess(response.data));
      toast.success("Book Details Updated");
    } catch (error) {
      toast.error(error.message);
    }
  };
};

// Thunk action to delete a book
export const deleteBook = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`/book/${id}`);
      dispatch(deleteBookSuccess(id));
      toast.success("Book Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };
};
