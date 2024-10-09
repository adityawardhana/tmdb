import useClickOutside from "@/hooks/useClickOutside";
import useFetch from "@/hooks/useFetch";
import { moviesServices } from "@/services";
import { IMovie } from "@/types";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface ISearchContext {
  query: string;
  loading: boolean;
  results: IMovie[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const SearchContext = createContext<ISearchContext>({
  query: "",
  loading: false,
  results: [],
  setQuery: () => {},
  onClose: () => {},
});

const SearchProvider: FC<Props> = ({ children }) => {
  const searchModalRef = useRef(null);
  const [query, setQuery] = useState("");
  const {
    data: { results = [] } = {},
    loading,
    fetch,
  } = useFetch(() => moviesServices.searchMovies(query), { immediate: false });

  const onClose = () => {
    setQuery("");
  };

  useEffect(() => {
    if (!query.length) {
      onClose();
      return;
    }

    const debounceTimeout = setTimeout(() => {
      fetch();
    }, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query]);

  useClickOutside(searchModalRef, () => setQuery(""));

  return (
    <SearchContext.Provider
      value={{ query, loading, results, setQuery, onClose }}
    >
      <header ref={searchModalRef}>{children}</header>
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export default SearchProvider;
