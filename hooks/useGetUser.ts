import useSWR from "swr";
import Fetcher from "../lib/fetcher";

const useGetUser = () => {
  const { data, error } = useSWR("/me", Fetcher);

  return { user: data, isLoading: !data && !error, isError: error };
};

export default useGetUser;
