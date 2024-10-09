/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Page from "../page";
import { moviesServices } from "@/services";
import { moviesMock } from "@/__mocks__/moviesMock";
import { AppRouterContextProviderMock } from "@/__mocks__/AppRouterMock";

jest.mock("@/hooks/useFetch", () => ({
  __esModule: true,
  default: () => ({ data: moviesMock }),
}));

jest.mock("@/services", () => ({
  __esModule: true,
  moviesServices: {
    getMovies: jest.fn(),
  },
}));

describe("Page Movies", () => {
  it("render page movie list with server components", async () => {
    (moviesServices.getMovies as jest.Mock).mockResolvedValue(moviesMock);
    const { container } = render(
      await Page({ searchParams: { filter: "", page: 1 } }),
      {
        wrapper: (props) => {
          return (
            <AppRouterContextProviderMock router={{}}>
              {props.children}
            </AppRouterContextProviderMock>
          );
        },
      }
    );
    expect(container).toMatchSnapshot();
  });
});
