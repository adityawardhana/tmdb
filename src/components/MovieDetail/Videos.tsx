"use client";
import { useMovieDetailContext } from "@/contexts/movieDetail";
import React from "react";

const Videos = () => {
  const { videos = [] } = useMovieDetailContext();

  if (!videos?.results?.length) {
    return <p className="text-sm">No video available.</p>;
  }

  return (
    <section className="flex flex-col p-2 md:p-8" id="movie-videos">
      <p className="text-lg">Videos</p>
      <div className="py-8 gap-2 w-full grid grid-cols-2 md:grid-cols-3">
        {videos.results.map((item: { key: string; name: string }) => (
          <div
            key={item.key}
            className="flex-shrink-0 w-full h-auto md:h-[300px]"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
