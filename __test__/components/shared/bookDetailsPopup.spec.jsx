import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookDetailsPopup from "@/components/shared/bookDetailsPopup";

describe("BookDetailsPopup Component", () => {
  const mockBookDetails = {
    name: "Test Book",
    author: {
      first_name: "John",
      last_name: "Doe",
    },
    isbn: "978-3-16-148410-0",
  };

  it("should render book details correctly", () => {
    render(
      <BookDetailsPopup bookDetails={mockBookDetails} onClose={() => {}} />
    );

    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("Author: John Doe")).toBeInTheDocument();
    expect(screen.getByText("ISBN: 978-3-16-148410-0")).toBeInTheDocument();
  });

  it("should call onClose when 'Close' button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <BookDetailsPopup bookDetails={mockBookDetails} onClose={onCloseMock} />
    );

    fireEvent.click(screen.getByText("Close"));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
