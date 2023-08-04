import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AddAuthor from "@/components/addAuthor";

const mockStore = configureStore([]);

describe("AddAuthor Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test("renders without errors", () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <AddAuthor onClose={() => {}} />
      </Provider>
    );

    const submitButton = getByText("Author");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");

    expect(submitButton).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  test("submits form data on submit", async () => {
    const onCloseMock = jest.fn();

    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <AddAuthor onClose={onCloseMock} />
      </Provider>
    );

    const submitButton = getByText("Add Author");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");

    // Fill in form inputs
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    // Click the submit button
    fireEvent.click(submitButton);

    // You can mock the response data based on your requirements
    // For example, you can use the author response JSON you provided
    const mockedAuthor = {
      _id: "64cc00f2ec3e3ffb53c8846b",
      first_name: "Tharindu damith",
      last_name: "Hashantha",
    };

    // You can dispatch actions and check the store state here if needed
    // For example, store.getActions() and expect(store.getActions())...

    // Check that the onClose function is called
    expect(onCloseMock).toHaveBeenCalled();
  });
});
