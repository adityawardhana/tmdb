"use client";
import { useMovieDetailContext } from "@/contexts/movieDetail";
import { URL_IMAGE } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { FaRegImages } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";

const Banner = () => {
  const { detail = {}, images = {}, videos = {} } = useMovieDetailContext();

  const trailer = videos?.results?.find(
    (video: any) =>
      (video.type === "Trailer" || video.type === "Teaser") &&
      (video.name.includes("Trailer") || video.name.includes("Teaser"))
  );

  return (
    <section className="p-2 md:p-8">
      <div className="grid grid-cols-8 lg:grid-cols-12">
        <img
          className="hidden sm:block sm:col-span-2 lg:col-span-3"
          src={`${URL_IMAGE + detail.poster_path}`}
          alt={detail.title}
        />
        <div className="col-span-8 sm:col-span-6 lg:col-span-7 aspect-video sm:aspect-auto">
          {videos?.results.length > 0 && trailer ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className="w-full h-full object-cover"
              src={`${URL_IMAGE + detail.backdrop_path}`}
              alt={detail.title}
            />
          )}
        </div>
        <div className="flex lg:flex-col col-span-full lg:col-span-2 gap-2">
          <Link
            href="#movie-videos"
            className="w-1/2 lg:w-auto lg:h-1/2 bg-neutral-800 flex justify-center items-center hover:bg-gray-800"
          >
            <div className="py-3 flex lg:flex-col items-center gap-4 text-sm lg:text-base">
              <MdOutlineVideoLibrary className="text-secondary size-6" />
              <div> {videos?.results.length} VIDEOS</div>
            </div>
          </Link>
          <Link
            href="#movie-images"
            className="w-1/2 lg:w-auto lg:h-1/2 bg-neutral-800 flex justify-center items-center hover:bg-gray-800"
          >
            <div className="py-3 flex lg:flex-col items-center gap-4 text-sm lg:text-base">
              <FaRegImages className="text-secondary size-6" />
              {images?.backdrops?.length || images?.posters?.length} PHOTOS
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
