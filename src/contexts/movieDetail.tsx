"use client";
import React, { createContext, FC, useContext, useState } from "react";
interface Props {
  children: React.ReactNode;
  initialData: {
    detail?: any;
    images?: any;
    videos?: any;
    credits?: any;
  }; // Replace with your actual movie ID type
}
interface IMovieDetailContext {
  detail?: any;
  images?: any;
  videos?: any;
  credits?: any;
}
const MovieDetailContext = createContext<IMovieDetailContext>({});
const MovieDetailProvider: FC<Props> = ({ children, initialData }) => {
  const [data] = useState(initialData);
  return (
    <MovieDetailContext.Provider value={{ ...data }}>
      {children}
    </MovieDetailContext.Provider>
  );
};

export const useMovieDetailContext = () => useContext(MovieDetailContext);
export default MovieDetailProvider;
