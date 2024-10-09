import Loader from "../Loader";
import { MoviesCard } from "../Movies";
import { useSearchContext } from "@/contexts/search";

const SearchResults = () => {
  const { results, loading, query } = useSearchContext();
  if (!query.length) {
    return <div />;
  }

  return (
    <div className="bg-transparent absolute text-neutral-800 h-screen w-full z-50 flex justify-center items-start">
      {loading ? (
        <div className="w-full px-4 py-12 bg-neutral-900">
          <Loader />
        </div>
      ) : (
        <div className="bg-neutral-900 text-white p-4 md:p-8 w-full grid grid-cols-2 md:grid-cols-5 gap-4 relative">
          {results.map((item: any) => {
            return <MoviesCard key={item.id} data={item} />;
          })}
          {results.length === 0 && (
            <div>No results found for &quot;{query}&quot;</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
