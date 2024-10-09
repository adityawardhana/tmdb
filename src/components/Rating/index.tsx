import React, { FC } from "react";
import { IoIosStar } from "react-icons/io";

interface Props {
  rating?: number;
  review?: number;
}

const Rating: FC<Props> = ({ rating, review }) => {
  if (!rating) {
    return <div />;
  }
  return (
    <div className="flex items-center gap-2" data-testid="rating">
      <div className="flex items-start">
        <IoIosStar className="w-4 h-4 text-yellow-300 me-1" />
        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
          {rating.toFixed(2)}
        </p>
      </div>
      {review && (
        <div className="text-xs text-gray-900 underline hover:no-underline dark:text-white">
          ({review.toLocaleString()} reviews)
        </div>
      )}
    </div>
  );
};

export default Rating;
