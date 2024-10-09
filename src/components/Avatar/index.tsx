"use client";
import { URL_IMAGE } from "@/utils/constants";
import React, { FC } from "react";
interface Props {
  imgSrc: string;
  title?: string;
}
const Avatar: FC<Props> = ({ imgSrc, title }) => {
  return (
    <span className="flex items-center gap-2">
      <img
        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover"
        src={`${URL_IMAGE}${imgSrc}`}
        alt={title}
      />
      {title}
    </span>
  );
};

export default Avatar;
