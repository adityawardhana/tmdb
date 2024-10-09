import { IMovie } from "@/types";
import { URL_IMAGE } from "@/utils/constants";
import React, { FC } from "react";
import Rating from "../Rating";
import { formatYear } from "@/utils/time";

interface Props {
  data: IMovie;
}

const MoviesCard: FC<Props> = ({ data }) => {
  return (
    <a href={`/movie/${data.id}`} data-testid="moviesCard">
      <div className="flex max-w-sm w-full bg-transparent shadow-md rounded-xl overflow-hidden mx-auto">
        <div className="overflow-hidden w-full rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl text-white">
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-neutral-900 via-gray-900 to-transparent"></div>
          <div
            className="relative cursor-pointer group z-10 px-4 pt-6 md:px-6 md:pt-10 pb-2 space-y-6 movie_info"
            data-lity=""
          >
            <div className="align-self-end w-full">
              <div className="h-24 md:h-36"></div>
              <div className="space-y-2 md:space-y-6 ">
                <div className="flex flex-col space-y-2 inner">
                  <h3
                    className="text-xl text-white"
                    data-unsp-sanitized="clean"
                  >
                    {data.title}
                  </h3>
                  <Rating rating={data.vote_average} review={data.vote_count} />
                </div>
                <div className="flex flex-row justify-between datos">
                  {data.release_date && (
                    <div className="flex flex-col datos_col">
                      <div className="text-xs text-neutral-400 mb-2">
                        Release Year
                      </div>
                      <div className="release">
                        {formatYear(data.release_date)}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-neutral-400 mb-2">Overview:</div>
                  <p className="text-xs text-neutral-100 mb-6 line-clamp-2">
                    {data.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute inset-0 transform w-full md:-translate-y-4 h-96 object-cover"
            src={`${URL_IMAGE}${data.poster_path}`}
          />
        </div>
      </div>
    </a>
  );
};

export default MoviesCard;
