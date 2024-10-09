import classNames from "classnames";
import { FC, Fragment } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}
const Pagination: FC<Props> = ({ page: currentPage, totalPages, setPage }) => {
  const pageArray = [-1, 0, 1]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= totalPages);

  const defaultCls =
    "flex-shrink-0 border border-neutral-900 hover:border-neutral-700 bg-neutral-900 text-white focus:ring-4 focus:outline-none focus:ring-neutral-800 rounded-full text-base px-5 py-2.5 text-center ";
  const activeCls =
    "flex-shrink-0 border border-rose-500 text-rose-500 hover:text-white bg-neutral-900 hover:bg-rose-700 focus:ring-rose-800 focus:ring-4 focus:outline-none rounded-full text-base px-5 py-2.5 text-center";

  if (totalPages > 0) {
    return (
      <div className="flex justify-center overflow-x-auto gap-2 w-full no-scrollbar p-4 pb-24 ">
        <button type="button" className={defaultCls} onClick={() => setPage(0)}>
          <IoIosArrowBack />
        </button>
        {!pageArray.includes(1) && (
          <Fragment>
            <button
              type="button"
              className={classNames({
                [defaultCls]: currentPage !== 1,
                [activeCls]: currentPage === 1,
              })}
              onClick={() => {
                setPage(0);
              }}
            >
              1
            </button>
            <button type="button" className={defaultCls}>
              ...
            </button>
          </Fragment>
        )}
        {pageArray.map((page) => {
          return (
            <button
              key={page}
              type="button"
              className={classNames({
                [defaultCls]: currentPage !== page,
                [activeCls]: currentPage === page,
              })}
              onClick={() => {
                setPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
        {!pageArray.includes(totalPages) && (
          <Fragment>
            <button type="button" className={defaultCls}>
              ...
            </button>

            <button
              type="button"
              className={classNames({
                [defaultCls]: currentPage !== totalPages,
                [activeCls]: currentPage === totalPages,
              })}
              onClick={() => {
                setPage(totalPages);
              }}
            >
              {totalPages}
            </button>
          </Fragment>
        )}
        <button
          type="button"
          className={defaultCls}
          onClick={() => setPage(totalPages)}
        >
          <IoIosArrowForward />
        </button>
      </div>
    );
  }
  return <div />;
};

export default Pagination;
