import { MoviesFilter, MoviesList } from "@/components/Movies";
import MoviesProvider from "@/contexts/movies";
import { moviesServices } from "@/services";
import { IFilterMoviesParams } from "@/types";

const MoviesPage = async ({
  searchParams,
}: {
  searchParams: IFilterMoviesParams;
}) => {
  const initialData = await moviesServices.getMovies(searchParams);
  return (
    <MoviesProvider initialData={initialData} params={searchParams}>
      <MoviesFilter />
      <MoviesList />
    </MoviesProvider>
  );
};

export default MoviesPage;
