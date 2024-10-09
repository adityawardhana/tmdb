/**
 * @jest-environment jsdom
 */
import { moviesMock } from "@/__mocks__/moviesMock";
import {
  getAllMovies,
  getFilteredMovies,
  getMovieCredits,
  getMovieDetail,
  getMovieImages,
  getMovies,
  getMovieVideos,
  searchMovies,
} from "../movies";
import request from "@/utils/request";
import {
  movieDetailCreditMock,
  movieDetailImagesMock,
  movieDetailMock,
  movieDetailVideosMock,
} from "@/__mocks__/movieDetailMock";

jest.mock("@/utils/request", () => ({
  ...jest.requireActual("@/utils/request"),
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("service movies", () => {
  it("should render getAllMovies correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({ data: moviesMock });

    const result = await getAllMovies({ page: 1 });

    expect(request.get).toHaveBeenCalledWith("/discover/movie", {
      params: { page: 1 },
    });
    expect(result).toEqual(moviesMock);
  });

  it("should render getFilteredMovies correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({ data: moviesMock });

    const result = await getFilteredMovies({ page: 1, filter: "now_playing" });

    expect(request.get).toHaveBeenCalledWith("/movie/now_playing", {
      params: { page: 1 },
    });
    expect(result).toEqual(moviesMock);
  });

  it("should render searchMovies correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({ data: moviesMock });

    const result = await searchMovies("joker");

    expect(request.get).toHaveBeenCalledWith("/search/movie", {
      params: { page: 1, query: "joker" },
    });
    expect(result).toEqual(moviesMock);
  });

  it("should render getMovies with filter correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({ data: moviesMock });

    const result = await getMovies({ filter: "popular" });

    expect(request.get).toHaveBeenCalledWith("/movie/popular", {
      params: { page: 1 },
    });

    expect(result).toEqual(moviesMock);
  });

  it("should render getMovies without filter correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({ data: moviesMock });

    const result = await getMovies({ filter: "" });

    expect(request.get).toHaveBeenCalledWith("/discover/movie", {
      params: { page: 1 },
    });

    expect(result).toEqual(moviesMock);
  });

  it("should render getMovieDetail correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({ data: movieDetailMock });

    const result = await getMovieDetail(1000);

    expect(request.get).toHaveBeenCalledWith("/movie/1000");

    expect(result).toEqual(movieDetailMock);
  });

  it("should render getMovieImages correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({
      data: movieDetailImagesMock,
    });

    const result = await getMovieImages(1000);

    expect(request.get).toHaveBeenCalledWith("/movie/1000/images");

    expect(result).toEqual(movieDetailImagesMock);
  });

  it("should render getMovieVideos correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({
      data: movieDetailVideosMock,
    });

    const result = await getMovieVideos(1000);

    expect(request.get).toHaveBeenCalledWith("/movie/1000/videos");

    expect(result).toEqual(movieDetailVideosMock);
  });

  it("should render getMovieCredits correctly", async () => {
    (request.get as jest.Mock).mockResolvedValue({
      data: movieDetailCreditMock,
    });

    const result = await getMovieCredits(1000);

    expect(request.get).toHaveBeenCalledWith("/movie/1000/credits");

    expect(result).toEqual(movieDetailCreditMock);
  });
});
