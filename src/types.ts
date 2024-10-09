export type TFilterKey =
  | "now_playing"
  | "popular"
  | "top_rated"
  | "upcoming"
  | "";
export interface IFilterMoviesParams {
  page?: number;
  filter: TFilterKey;
}

export interface IMovie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenericResponseList<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
