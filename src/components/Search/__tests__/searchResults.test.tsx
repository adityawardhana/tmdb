import { act, fireEvent, render, screen } from "@testing-library/react";
import { SearchResults } from "..";
import { SearchContext } from "@/contexts/search";
import { moviesMock } from "@/__mocks__/moviesMock";

it("render SearchResults with result data", () => {
  const valueMock = {
    query: "search",
    setQuery: jest.fn(),
    onClose: jest.fn(),

    loading: false,
    results: moviesMock.results,
  };
  render(<SearchResults />, {
    wrapper(props) {
      return (
        <SearchContext.Provider value={valueMock}>
          {props.children}
        </SearchContext.Provider>
      );
    },
  });
  expect(screen.getAllByTestId("moviesCard")).toHaveLength(
    valueMock.results.length
  );
});

it("render SearchResults if data still loading", () => {
  const valueMock = {
    query: "search",
    setQuery: jest.fn(),
    onClose: jest.fn(),

    loading: true,
    results: [],
  };
  render(<SearchResults />, {
    wrapper(props) {
      return (
        <SearchContext.Provider value={valueMock}>
          {props.children}
        </SearchContext.Provider>
      );
    },
  });
  expect(screen.getByRole("status")).toBeInTheDocument();
});
