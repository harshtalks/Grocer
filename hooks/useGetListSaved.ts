import useSWR from "swr";
import Fetcher from "../lib/fetcher";

const useGetListSaved = () => {
  const { data, error } = useSWR(["/addShopingList"], Fetcher);

  return { categories: data, isLoading: !data && !error, isError: error };
};

export default useGetListSaved;
