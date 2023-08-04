import api from "../services/api";
import { toast } from "react-toastify";

export const SET_AUTHORS = "SET_AUTHORS";
export const CREATE_AUTHOR_SUCCESS = "CREATE_AUTHOR_SUCCESS";
export const UPDATE_AUTHOR_SUCCESS = "UPDATE_AUTHOR_SUCCESS";
export const DELETE_AUTHOR_SUCCESS = "DELETE_AUTHOR_SUCCESS";

// Action creators
export const setAuthors = (authors) => ({
  type: SET_AUTHORS,
  payload: authors,
});

export const createAuthorSuccess = (author) => ({
  type: CREATE_AUTHOR_SUCCESS,
  payload: author,
});

export const updateAuthorSuccess = (author) => ({
  type: UPDATE_AUTHOR_SUCCESS,
  payload: author,
});

export const deleteAuthorSuccess = (id) => ({
  type: DELETE_AUTHOR_SUCCESS,
  payload: id,
});

// Thunk action to fetch authors
export const fetchAuthors = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/authors");
      dispatch(setAuthors(response.data));
    } catch (error) {
      toast.error(error.message);
    }
  };
};

// Thunk action to create an author
export const createAuthor = (formData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/author", formData);
      dispatch(createAuthorSuccess(response.data));
      toast.success("Author Created Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
};

// Thunk action to update an author
export const updateAuthor = (id, formData) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/author/${id}`, formData);
      dispatch(updateAuthorSuccess(response.data));
      toast.success("Author Details Updated");
    } catch (error) {
      toast.error(error.message);
    }
  };
};

// Thunk action to delete an author
export const deleteAuthor = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`/author/${id}`);
      dispatch(deleteAuthorSuccess(id));
      toast.success("Author Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };
};
