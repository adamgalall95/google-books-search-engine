import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders search input", () => {
    render(<SearchBar handleSearch={() => {}} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("allows user to type in search input", async () => {
    const user = userEvent.setup();

    render(<SearchBar handleSearch={() => {}} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "Harry Potter");

    expect(input).toHaveValue("Harry Potter");
  });

  it("calls handleSearch when search button is clicked", async () => {
    const user = userEvent.setup();

    const mockSearch = vi.fn();

    render(<SearchBar handleSearch={mockSearch} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await user.type(input, "Harry Potter");

    await user.click(button);

    expect(mockSearch).toHaveBeenCalledWith("Harry Potter");
  });
});
