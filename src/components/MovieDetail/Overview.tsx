"use client";
import { useMovieDetailContext } from "@/contexts/movieDetail";
import { formatDuration, formatYear } from "@/utils/time";
import React from "react";
import Rating from "../Rating";
import {
  IoIosChatbubbles,
  IoIosStar,
  IoIosStats,
  IoIosTrendingUp,
} from "react-icons/io";

const Overview = () => {
  const { detail = {} } = useMovieDetailContext();

  return (
    <section className="grid grid-cols-8  p-2 md:p-8">
      <div className="col-span-8 sm:col-span-full flex justify-between items-center flex-wrap">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{detail.title}</h1>
          <div className="text-lightGray text-sm py-3">
            <p className="text-lightGray">
              Original title: {detail.original_title}
            </p>
            <div className="flex gap-2">
              <p>({formatYear(detail.release_date)})</p> -
              <p>{formatDuration(detail.runtime)}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-auto gap-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-neutral-400 text-sm">Rating</div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <IoIosStar className="text-secondary size-6" />
              <div className="flex gap-1">
                <div className="font-bold">
                  {detail.vote_average.toFixed(2)}
                </div>
                <div className="text-neutral-400">/ 10</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-neutral-400 text-sm">Review</div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <IoIosChatbubbles className="text-secondary size-6" />
              <div className="flex gap-1">
                <div className="font-bold">
                  {detail.vote_count.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-neutral-400 text-sm">Popularity</div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <IoIosStats className="text-secondary size-4" />
              <div className="flex gap-1">
                <div className="font-bold">
                  {detail.popularity.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
