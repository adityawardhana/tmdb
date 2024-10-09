import { IFilterMoviesParams } from "@/types";
import request from "@/utils/request";

export const getAllMovies = async ({
  page = 1,
}: Omit<IFilterMoviesParams, "filter">) => {
  const { data } = await request.get("/discover/movie", {
    params: { page },
  });
  return data;
};

export const getFilteredMovies = async ({
  page = 1,
  filter,
}: IFilterMoviesParams) => {
  const { data } = await request.get(`/movie/${filter}`, { params: { page } });
  return data;
};

export const searchMovies = async (query: string) => {
  const { data } = await request.get("/search/movie", {
    params: { query, page: 1 },
  });
  return data;
};

export const getMovies = ({ filter, page }: IFilterMoviesParams) => {
  if (filter) {
    return getFilteredMovies({
      page: Number(page || 1),
      filter,
    });
  }
  return getAllMovies({ page: Number(page || 1) });
};

export const getMovieDetail = async (id: number) => {
  const { data } = await request.get(`/movie/${id}`);
  return data;
};

export const getMovieVideos = async (id: number) => {
  const { data } = await request.get(`/movie/${id}/videos`);
  return data;
};

export const getMovieImages = async (id: number) => {
  const { data } = await request.get(`/movie/${id}/images`);
  return data;
};

export const getMovieCredits = async (id: number) => {
  const { data } = await request.get(`/movie/${id}/credits`);
  return data;
};
