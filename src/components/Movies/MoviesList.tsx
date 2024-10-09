"use client";
import { useMoviesContext } from "@/contexts/movies";
import React from "react";
import MoviesCard from "./MoviesCard";
import Pagination from "../Pagination";
import Loader from "../Loader";

const MoviesList = () => {
  const { movies, page, onParamsChange, filter } = useMoviesContext();

  if (!movies || !movies.results) {
    return <Loader />;
  }

  if (movies.results.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <>
      <section className="flex flex-col justify-center">
        <div className="text-white p-4 md:p-8 w-full grid grid-cols-2 md:grid-cols-5 gap-4 relative">
          {movies.results?.map((item) => (
            <MoviesCard key={item.id} data={item} />
          ))}
        </div>
      </section>
      <Pagination
        page={Number(page || 1)}
        totalPages={10}
        setPage={(page) => onParamsChange({ page, filter })}
      />
    </>
  );
};

export default MoviesList;
