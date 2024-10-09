/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "../page";
import { moviesServices } from "@/services";
import { AppRouterContextProviderMock } from "@/__mocks__/AppRouterMock";
import {
  movieDetailCreditMock,
  movieDetailImagesMock,
  movieDetailMock,
  movieDetailVideosMock,
} from "@/__mocks__/movieDetailMock";

jest.mock("@/services", () => ({
  __esModule: true,
  moviesServices: {
    getMovieDetail: jest.fn(),
    getMovieImages: jest.fn(),
    getMovieVideos: jest.fn(),
    getMovieCredits: jest.fn(),
  },
}));

describe("Page Movie Detail", () => {
  it("render page movie detail with server components", async () => {
    (moviesServices.getMovieDetail as jest.Mock).mockResolvedValue(
      movieDetailMock
    );
    (moviesServices.getMovieImages as jest.Mock).mockResolvedValue(
      movieDetailImagesMock
    );
    (moviesServices.getMovieVideos as jest.Mock).mockResolvedValue(
      movieDetailVideosMock
    );
    (moviesServices.getMovieCredits as jest.Mock).mockResolvedValue(
      movieDetailCreditMock
    );
    const { container } = render(await Page({ params: { id: "889737" } }), {
      wrapper: (props) => {
        return (
          <AppRouterContextProviderMock router={{}}>
            {props.children}
          </AppRouterContextProviderMock>
        );
      },
    });
    expect(container).toMatchSnapshot();
  });
});
