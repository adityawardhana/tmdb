"use client";
import useFetch from "@/hooks/useFetch";
import { moviesServices } from "@/services";
import {
  TFilterKey,
  IFilterMoviesParams,
  GenericResponseList,
  IMovie,
} from "@/types";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, FC, useContext } from "react";

interface Props {
  initialData?: GenericResponseList<IMovie>; // Replace with your actual data type
  children: React.ReactNode;
  params: IFilterMoviesParams;
}
interface IMoviesContext {
  onParamsChange: (params: IFilterMoviesParams) => void;
  movies?: GenericResponseList<IMovie>;
  filter: TFilterKey;
  page: number;
}
const MoviesContext = createContext<IMoviesContext>({
  onParamsChange: () => {},
  filter: "",
  page: 1,
});

const MoviesProvider: FC<Props> = ({ initialData, params, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { filter = "", page = 1 } = params;
  const { data } = useFetch(() => moviesServices.getMovies(params), {
    initialData,
  });

  const onParamsChange = ({ page, filter }: IFilterMoviesParams) => {
    const params = new URLSearchParams();
    params.set("page", (page || 1).toString());
    params.set("filter", filter);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <MoviesContext.Provider
      value={{
        onParamsChange,
        movies: data,
        filter,
        page: Number(page || 1),
      }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-start">
        {children}
      </main>
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);

export default MoviesProvider;
