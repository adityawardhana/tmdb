import { act, fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "..";
import { SearchContext } from "@/contexts/search";

it("render SearchBar and able to input", () => {
  const valueMock = {
    query: "",
    setQuery: jest.fn(),
    onClose: jest.fn(),

    loading: false,
    results: [],
  };
  render(<SearchBar />, {
    wrapper(props) {
      return (
        <SearchContext.Provider value={valueMock}>
          {props.children}
        </SearchContext.Provider>
      );
    },
  });

  const input = screen.getByRole("textbox");

  act(() => {
    fireEvent.change(input, { target: { value: "search" } });
  });

  expect(valueMock.setQuery).toHaveBeenCalledWith("search");
});
