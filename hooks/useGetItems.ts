import useSWR from "swr";
import Fetcher from "../lib/fetcher";

// id of the category is passed.

export const useGetItems = () => {
  const { data, error } = useSWR("/getItems", Fetcher);

  return { items: data, isError: error, isLoading: !data && !error };
};

//
