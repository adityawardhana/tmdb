import { act, render, screen } from "@testing-library/react";
import MoviesList from "../MoviesList";
import { MoviesContext } from "@/contexts/movies";
import { moviesMock } from "@/__mocks__/moviesMock";

it("render movie list if movies variable not found", () => {
  const onParamsChangeMock = jest.fn();
  render(<MoviesList />, {
    wrapper(props) {
      return (
        <MoviesContext.Provider
          value={{
            page: 0,
            filter: "popular",
            onParamsChange: onParamsChangeMock,
          }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
    },
  });
  expect(screen.getByRole("status")).toBeInTheDocument();
});

it("render movie list if movies results is empty", () => {
  const onParamsChangeMock = jest.fn();
  render(<MoviesList />, {
    wrapper(props) {
      return (
        <MoviesContext.Provider
          value={{
            movies: { results: [], page: 0, total_pages: 0, total_results: 0 },
            page: 0,
            filter: "popular",
            onParamsChange: onParamsChangeMock,
          }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
    },
  });
  expect(screen.getByText("No movies found.")).toBeInTheDocument();
});

it("render movie list and able to click pagination", () => {
  const onParamsChangeMock = jest.fn();
  render(<MoviesList />, {
    wrapper(props) {
      return (
        <MoviesContext.Provider
          value={{
            movies: moviesMock,
            page: 0,
            filter: "popular",
            onParamsChange: onParamsChangeMock,
          }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
    },
  });
  expect(screen.getAllByTestId("moviesCard")).toHaveLength(
    moviesMock.results.length
  );

  const page2 = screen.getByText("2")
  act(() => {
    page2.click();
  });

  expect(onParamsChangeMock).toHaveBeenCalledWith({ page: 2, filter: "popular" });
});
