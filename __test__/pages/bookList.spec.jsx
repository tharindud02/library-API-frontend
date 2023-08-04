import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BookList from "@/pages/bookList";

const mockStore = configureStore([]);

describe("BookList Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      books: [
        {
          _id: "64cb1f0735fcc1d67c5cbc01",
          name: "Book1",
          isbn: "978-3-16-148410-1",
          author: {
            _id: "64cbfe2eec3e3ffb53c86f18",
            first_name: "john",
            last_name: "cater",
          },
        },
      ],
    });
  });

  it("renders book cards with correct details", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BookList />
      </Provider>
    );

    const bookNameElement = getByText(/Book1/i);
    const isbnElement = getByText(/ISBN: 978-3-16-148410-1/i);
    const authorNameElement = getByText(/john cater/i);

    expect(bookNameElement).toBeInTheDocument();
    expect(isbnElement).toBeInTheDocument();
    expect(authorNameElement).toBeInTheDocument();
  });
});
