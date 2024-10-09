import {
  Banner,
  DescriptionAndCast,
  Genre,
  Images,
  Overview,
  Videos,
} from "@/components/MovieDetail";
import MovieDetailProvider from "@/contexts/movieDetail";
import { moviesServices } from "@/services";
import { redirect } from "next/navigation";
import React from "react";

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const detail = await moviesServices.getMovieDetail(Number(params.id));
  const images = await moviesServices.getMovieImages(Number(params.id));
  const videos = await moviesServices.getMovieVideos(Number(params.id));
  const credits = await moviesServices.getMovieCredits(Number(params.id));

  return (
    <MovieDetailProvider
      initialData={{ detail, images, videos, credits }}
    >
      <Overview />
      <Banner />
      <Genre />
      <DescriptionAndCast />
      <Images />
      <Videos />
    </MovieDetailProvider>
  );
};

export default MovieDetailPage;
