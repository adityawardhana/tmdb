"use client";
import { useMoviesContext } from "@/contexts/movies";
import { TFilterKey } from "@/types";
import classNames from "classnames";
import React, { useState } from "react";

type TFilter = { name: string; key: TFilterKey };
const filters: TFilter[] = [
  {
    name: "All",
    key: "",
  },
  {
    name: "Popular",
    key: "popular",
  },
  {
    name: "Top Rated",
    key: "top_rated",
  },
  {
    name: "Now Playing",
    key: "now_playing",
  },
  {
    name: "Upcoming",
    key: "upcoming",
  },
];

const MoviesFilter = () => {
  const { filter = "", onParamsChange } = useMoviesContext();
  const [currFilter, setCurrFilter] = useState(filter)
  const onClikFilter = (key: TFilterKey) => () => {
    setCurrFilter(key)
    onParamsChange({ filter: key, page: 1 });
  };
  return (
    <div className="flex overflow-x-auto gap-2 w-full no-scrollbar py-4 px-4 md:px-8">
      {filters.map((item) => {
        return (
          <button
            key={item.key}
            type="button"
            className={classNames({
              "flex-shrink-0 text-neutral-400 border border-neutral-900 bg-neutral-900 hover:border-neutral-700 focus:ring-4 focus:outline-none focus:ring-neutral-300 rounded-full text-base px-5 py-2.5 text-center text-white focus:ring-neutral-800":
                currFilter !== item.key,
              "flex-shrink-0 text-rose-700 hover:text-white border border-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 rounded-full text-base px-5 py-2.5 text-center border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500 bg-neutral-900 focus:ring-rose-800":
                currFilter === item.key,
            })}
            onClick={onClikFilter(item.key)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default MoviesFilter;
