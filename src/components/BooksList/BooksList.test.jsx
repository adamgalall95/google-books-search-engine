import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "./BooksList";

const mockBooks = {
  items: [
    {
      id: "1",
      volumeInfo: {
        title: "Harry Potter",
        authors: ["J.K. Rowling"],
        imageLinks: {
          thumbnail: "image.jpg",
        },
      },
    },
    {
      id: "2",
      volumeInfo: {
        title: "Lord of the Rings",
        authors: ["J.R.R. Tolkien"],
        imageLinks: {
          thumbnail: "image.jpg",
        },
      },
    },
  ],
};

describe("BookList", () => {
  it("renders books", () => {
    render(<BookList books={mockBooks} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);
  });
});
