import React from "react";
import { render, screen } from "@testing-library/react";
import SideMenu from "@/components/shared/asideMenu";

describe("SideMenu Component", () => {
  const mockSideMenu = [
    {
      name: "Book List",
      url: "/bookList",
    },
    {
      name: "Update Details",
      url: "/updateDetails",
    },
  ];

  beforeAll(() => {
    // Mock the sideMenu data
    jest.mock("../../../src/utils/menu", () => ({
      sideMenu: mockSideMenu,
    }));
  });

  it("should render menu items correctly", () => {
    render(<SideMenu />);

    mockSideMenu.forEach((item) => {
      const link = screen.getByText(item.name);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", item.url);
    });
  });
});
