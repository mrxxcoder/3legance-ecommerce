import { useQuery } from "react-query";
import { getCollections } from "../../services/apiCollections";

export function useCollections() {
  const { data: collections, isLoading } = useQuery({
    queryFn: getCollections,
    queryKey: ["collections"],
  });

  console.log(collections);

  return { collections, isLoading };
}
