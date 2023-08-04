import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AddBook from "@/components/addAuthor";
import { createBook, updateBook } from "@/components/addBook";

const mockStore = configureStore([]);

describe("AddBook Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <AddBook authors={[]} onClose={() => {}} />
      </Provider>
    );

    const submitButton = screen.getByText("Book");
    const nameInput = screen.getByLabelText("Name");
    const isbnInput = screen.getByLabelText("ISBN");
    const authorSelect = screen.getByLabelText("Author");

    expect(submitButton).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(isbnInput).toBeInTheDocument();
    expect(authorSelect).toBeInTheDocument();
  });

  test("submits form data on submit", async () => {
    const onCloseMock = jest.fn();

    render(
      <Provider store={store}>
        <AddBook authors={[]} onClose={onCloseMock} />
      </Provider>
    );

    const submitButton = screen.getByText("Book");
    const nameInput = screen.getByLabelText("Name");
    const isbnInput = screen.getByLabelText("ISBN");
    const authorSelect = screen.getByLabelText("Author");

    // Fill in form inputs
    fireEvent.change(nameInput, { target: { value: "Book Name" } });
    fireEvent.change(isbnInput, { target: { value: "978-3-16-148410-0" } });
    fireEvent.change(authorSelect, { target: { value: "author_id_here" } });
    // Mock the action creator functions
    const mockCreateBook = jest.fn();
    const mockUpdateBook = jest.fn();
    createBook.mockReturnValueOnce(mockCreateBook);
    updateBook.mockReturnValueOnce(mockUpdateBook);

    // Click the submit button
    fireEvent.click(submitButton);

    // Expect the appropriate action creator to be called
    if (isUpdate) {
      expect(mockUpdateBook).toHaveBeenCalledWith(initialData._id, formData);
    } else {
      expect(mockCreateBook).toHaveBeenCalledWith(formData);
    }

    // You can also check if onCloseMock was called
    expect(onCloseMock).toHaveBeenCalled();
  });
});
