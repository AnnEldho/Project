import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  test("renders search input", () => {
    render(
      <SearchBar
        search=""
        setSearch={() => {}}
      />
    );

    expect(
      screen.getByPlaceholderText(/search/i)
    ).toBeInTheDocument();
  });

  test("updates input value", () => {
    const setSearch = jest.fn();

    render(
      <SearchBar
        search=""
        setSearch={setSearch}
      />
    );

    const input = screen.getByPlaceholderText(/search/i);

    fireEvent.change(input, {
      target: { value: "Leanne" },
    });

    expect(setSearch).toHaveBeenCalled();
  });
});