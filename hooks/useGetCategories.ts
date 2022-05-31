import useSWR from "swr";
import Fetcher from "../lib/fetcher";

const useGetCategories = () => {
  const { data, error } = useSWR("/categories", Fetcher);

  return { categories: data, isLoading: !data && !error, isError: error };
};

export default useGetCategories;
