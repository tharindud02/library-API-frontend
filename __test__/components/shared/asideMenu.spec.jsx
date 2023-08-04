import React from "react";
import { render } from "@testing-library/react";
import SideMenu from "@/components/shared/asideMenu";

describe("SideMenu component", () => {
  it("renders menu items correctly", () => {
    const mockSideMenu = [
      { name: "Item 1", url: "/item1" },
      { name: "Item 2", url: "/item2" },
    ];

    // Mock the sideMenu import
    jest.mock("../../../src/utils/menu", () => ({
      sideMenu: mockSideMenu,
    }));

    const { getByText } = render(<SideMenu />);

    // Check if menu items are rendered correctly
    mockSideMenu.forEach((item) => {
      const linkElement = getByText(item.name);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
