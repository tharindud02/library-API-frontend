import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmModal from "@/components/shared/confirmModal";

describe("ConfirmModal Component", () => {
  const mockMessage = "Are you sure?";
  const mockOnConfirm = jest.fn();
  const mockOnCancel = jest.fn();

  it("should render message and buttons correctly", () => {
    render(
      <ConfirmModal
        message={mockMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByText(mockMessage)).toBeInTheDocument();
    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });

  it("should call onConfirm when 'Yes' button is clicked", () => {
    render(
      <ConfirmModal
        message={mockMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.click(screen.getByText("Yes"));

    expect(mockOnConfirm).toHaveBeenCalled();
  });

  it("should call onCancel when 'No' button is clicked", () => {
    render(
      <ConfirmModal
        message={mockMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.click(screen.getByText("No"));

    expect(mockOnCancel).toHaveBeenCalled();
  });
});
