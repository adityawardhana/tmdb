/**
 * @jest-environment jsdom
 */
import { act, renderHook, waitFor } from "@testing-library/react";
import { moviesServices } from "@/services";
import { moviesMock } from "@/__mocks__/moviesMock";
import { AppRouterContextProviderMock } from "@/__mocks__/AppRouterMock";
import SearchProvider, { useSearchContext } from "../search";

jest.mock("@/services", () => ({
  __esModule: true,
  moviesServices: {
    searchMovies: jest.fn(),
  },
}));

jest.useFakeTimers();

it("render search context with correctly return value", async () => {
  (moviesServices.searchMovies as jest.Mock).mockResolvedValue(moviesMock);
  const { result } = await waitFor(() =>
    renderHook(() => useSearchContext(), {
      wrapper: (props) => {
        return (
          <AppRouterContextProviderMock router={{}}>
            <SearchProvider>{props.children}</SearchProvider>
          </AppRouterContextProviderMock>
        );
      },
    })
  );

  act(() => {
    result.current.setQuery("search");
  });

  jest.runAllTimers();
  const query = await waitFor(() => {
    return result.current.query;
  });
  expect(query).toEqual(query);
});
