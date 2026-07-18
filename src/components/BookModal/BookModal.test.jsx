import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import BookModal from "./BookModal";

const mockBook = {
  volumeInfo: {
    title: "Harry Potter and the Philosopher's Stone",
    authors: ["J.K. Rowling"],
    description: "A young wizard discovers his magical abilities.",
    publishedDate: "1997",
    categories: ["Fantasy"],
  },
};

describe("BookModal", () => {
  it("renders book description", () => {
    render(<BookModal book={mockBook} onClose={() => {}} />);

    const description = screen.getByText(
      "A young wizard discovers his magical abilities.",
    );

    expect(description).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();

    const mockClose = vi.fn();

    render(<BookModal book={mockBook} onClose={mockClose} />);

    const closeButton = screen.getByRole("button");

    await user.click(closeButton);

    expect(mockClose).toHaveBeenCalled();
  });
});
