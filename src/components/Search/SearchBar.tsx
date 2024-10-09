import { useSearchContext } from "@/contexts/search";
import classNames from "classnames";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

interface Props {
  mobile?: boolean;
}

const SearchBar: FC<Props> = ({ mobile }) => {
  const { query, setQuery, onClose } = useSearchContext();
  return (
    <div
      className={classNames("relative", {
        "md:block hidden": !mobile,
        "w-full": mobile,
      })}
    >
      <CiSearch className="absolute text-white top-2 left-2 size-6" />
      <input
        value={query}
        type="text"
        autoFocus={mobile ? true : false}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
        className={classNames(
          `bg-neutral-800 border border-neutral-800 rounded-lg px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary text-white pl-10`,
          { "w-full": mobile, "min-w-[400px]": !mobile }
        )}
      />
      <button
        onClick={onClose}
        className={classNames(
          "absolute text-white top-2 right-2 size-6 hidden",
          { "md:block": query.length }
        )}
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default SearchBar;
