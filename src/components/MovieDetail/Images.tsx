"use client";
import { useMovieDetailContext } from "@/contexts/movieDetail";
import { URL_IMAGE } from "@/utils/constants";
import React, { useMemo } from "react";

const Images = () => {
  const { images = {} } = useMovieDetailContext();

  const imageList = useMemo(
    () =>
      images?.backdrops?.length
        ? images?.backdrops
        : images?.posters?.length
        ? images?.posters
        : [],
    [images]
  );
  if (!imageList.length) {
    return <p className="text-sm">No images available.</p>;
  }

  return (
    <section className="grid grid-cols-8 p-2 md:p-8" id="movie-images">
      <p className="text-lg">Images</p>
      <div className="col-span-full flex py-8 gap-2 w-full overflow-x-scroll no-scrollbar">
        {imageList?.map((item: { file_path: string }) => (
          <img
            key={item.file_path}
            src={`${URL_IMAGE}${item.file_path}`}
            alt={`${URL_IMAGE}${item.file_path}`}
            className={"flex-shrink-0 w-[200px] h-auto object-cover"}
          />
        ))}
      </div>
    </section>
  );
};

export default Images;
