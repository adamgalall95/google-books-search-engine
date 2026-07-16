import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import BookCard from "./BookCard";

const mockBook = {
  id: "1",
  volumeInfo: {
    title: "Harry Potter and the Philosopher's Stone",
    authors: ["J.K. Rowling"],
    imageLinks: {
      thumbnail: "book-image.jpg",
    },
  },
};

describe("BookCard", () => {
  it("renders book title", () => {
    render(<BookCard book={mockBook} onBookClick={() => {}} />);

    const title = screen.getByText("Harry Potter and...");

    expect(title).toBeInTheDocument();
  });
  it("renders book author", () => {
    render(<BookCard book={mockBook} onBookClick={() => {}} />);

    const author = screen.getByText("J.K. Rowling");

    expect(author).toBeInTheDocument();
  });
  it("renders book image", () => {
    render(<BookCard book={mockBook} onBookClick={() => {}} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });
});

it("calls onBookClick when book is clicked", async () => {
  const user = userEvent.setup();

  const mockClick = vi.fn();

  render(<BookCard book={mockBook} onBookClick={mockClick} />);

  const image = screen.getByRole("img");

  await user.click(image);

  expect(mockClick).toHaveBeenCalledWith(mockBook);
});
