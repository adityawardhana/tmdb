"use client";
import { useMovieDetailContext } from "@/contexts/movieDetail";
import React, { useMemo } from "react";
import Avatar from "../Avatar";

const DescriptionAndCast = () => {
  const { detail = {}, credits = {} } = useMovieDetailContext();

  const { director, writer, cast } = useMemo(() => {
    const director = credits?.crew.find(
      (person: any) => person.job === "Director"
    );
    const writer = credits?.crew.filter(
      (person: any) => person.department === "Writing"
    );
    const cast = credits?.cast;
    return { director, writer, cast };
  }, [credits]);

  return (
    <section className="p-2 md:p-8">
      <div className="col-span-full grid grid-cols-8 sm:grid-cols-12 ">
        <div className="col-span-8 border-b border-neutral-500 pb-3">
          {detail.overview}
        </div>

        {director && (
          <div className="col-span-8 border-b border-neutral-500 py-3">
            <div className="text-white w-full grid grid-cols-2 gap-2">
              <p className="font-bold">Director</p>
              <div>
                <Avatar imgSrc={director.profile_path} title={director.name} />
              </div>
            </div>
          </div>
        )}
        <div className="col-span-8 border-b border-neutral-500 py-3">
          <div className="text-white w-full grid grid-cols-2 gap-2">
            <p className="font-bold">Writer</p>
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                {writer?.slice(0, 2).map((person: any) => (
                  <Avatar
                    imgSrc={person.profile_path}
                    title={person.name}
                    key={person.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 border-b border-neutral-500 py-3">
          <div className="text-white w-full grid grid-cols-2 gap-2">
            <p className="font-bold">Cast</p>
            <div className="flex gap-3col-span-8">
              <div className="flex flex-col gap-2">
                {cast?.map((person: any) => (
                  <Avatar
                    imgSrc={person.profile_path}
                    title={person.name}
                    key={person.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionAndCast;
