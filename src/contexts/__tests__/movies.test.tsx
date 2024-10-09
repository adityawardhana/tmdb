/**
 * @jest-environment jsdom
 */
import {
  act,
  renderHook,
  waitFor,
} from "@testing-library/react";
import { moviesServices } from "@/services";
import { moviesMock } from "@/__mocks__/moviesMock";
import { AppRouterContextProviderMock } from "@/__mocks__/AppRouterMock";
import MoviesProvider, { useMoviesContext } from "../movies";

jest.mock("@/services", () => ({
  __esModule: true,
  moviesServices: {
    getMovies: jest.fn(),
  },
}));

it("render movie context with correctly return value", async () => {
  (moviesServices.getMovies as jest.Mock).mockResolvedValue(moviesMock);
  const { result } = await waitFor(() =>
    renderHook(() => useMoviesContext(), {
      wrapper: (props) => {
        return (
          <AppRouterContextProviderMock router={{}}>
            <MoviesProvider
              params={{ page: 0, filter: "" }}
              initialData={moviesMock}
            >
              {props.children}
            </MoviesProvider>
          </AppRouterContextProviderMock>
        );
      },
    })
  );
  expect(result.current.movies).toEqual(moviesMock);
});

it("render movie and able to call onParamsChange", async () => {
  const pushMock = jest.fn();
  (moviesServices.getMovies as jest.Mock).mockResolvedValue(moviesMock);
  const { result } = renderHook(() => useMoviesContext(), {
    wrapper: (props) => {
      return (
        <AppRouterContextProviderMock router={{ push: pushMock }}>
          <MoviesProvider
            params={{ page: 0, filter: "" }}
            initialData={moviesMock}
          >
            {props.children}
          </MoviesProvider>
        </AppRouterContextProviderMock>
      );
    },
  });

  act(() => {
    result.current.onParamsChange({ page: 0, filter: "popular" });
  });
  expect(pushMock).toHaveBeenCalledTimes(1);
});
