import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home Component", () => {
  it("renders title and description", () => {
    const { getByText } = render(<Home />);

    const titleElement = getByText("Library API Test");

    expect(titleElement).toBeInTheDocument();
  });
});
