"use client";
import { useMovieDetailContext } from "@/contexts/movieDetail";
import React from "react";

const Genre = () => {
  const { detail = {} } = useMovieDetailContext();

  return (
    <section className="grid grid-cols-8  p-2 md:p-8">
      <p className="text-lg">Genre</p>
      <div className="col-span-full flex py-2 gap-2 max-sm:w-full max-sm:overflow-hidden max-sm:overflow-x-scroll">
        {detail?.genres?.map(
          (item: { id: number, name: string }) => (
            <span
              key={item.id}
              className={
                "flex-shrink-0 text-neutral-400 border border-neutral-700 bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-300 rounded-full text-base px-5 py-2.5 text-center text-white focus:ring-neutral-800"
              }
            >
              {item.name}
            </span>
          )
        )}
      </div>
    </section>
  );
};

export default Genre;
