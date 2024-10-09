import { useCallback, useEffect, useLayoutEffect, useState } from "react";
/**
 * Async Fetch Hook
 * use for fetch API or function with default return
 * @param {*} asyncFunction async function / must has return value
 * @param {*} immediate immediate true = run async function at first render
 */

type asyncFunctionProps = (params?: any) => Promise<any>;
type useFetchOptionsProps = {
  initialData?: any;
  immediate?: boolean;
};
type useFetchReturnProps = {
  fetch: (params?: any) => Promise<any> | void;
  data: any;
  loading: boolean;
  error: any;
};

const useFetch = (
  asyncFunction: asyncFunctionProps,
  { immediate = true, initialData }: useFetchOptionsProps = {}
): useFetchReturnProps => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialData || {});
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  /**
   * fetch async function
   * @param {*} params any parameter
   */
  const fetch: (params?: any) => Promise<any> = useCallback(
    (params) => {
      setLoading(true);
      setData({});
      setError(null);
      return asyncFunction(params)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [asyncFunction]
  );
  /**
   * effect if user want to run async function at first render
   */
  useEffect(() => {
    if (immediate && !hasFetched) {
      setHasFetched(true);
      fetch();
    }
  }, [immediate, hasFetched]);

  useLayoutEffect(() => {
    setData(initialData);
  }, [initialData]);

  /**
   * return { fetch async function, loading/pending, data response, error }
   */
  return { fetch, loading, data, error };
};

export default useFetch;
