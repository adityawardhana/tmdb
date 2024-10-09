import { RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { FC } from "react";
import { useSearchContext } from "@/contexts/search";

interface Props {
  setOpenMobile: (e: boolean) => void;
}

const SearchMobile: FC<Props> = ({ setOpenMobile }) => {
  const { onClose } = useSearchContext();
  return (
    <div data-testid="searchMobile" className="absolute top-0 inset-x-0 py-4 px-4 lg:px-8 bg-neutral-900 flex justify-between gap-4">
      <SearchBar mobile />
      <button
        onClick={() => {
          setOpenMobile(false);
          onClose();
        }}
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default SearchMobile;
