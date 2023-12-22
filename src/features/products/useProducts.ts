import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils";

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("categories");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "categories.title", value: filterValue };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    error,
    data: { data: products, count } = { data: [], count: null },
  } = useQuery({
    queryKey: ["products", filter, page],
    queryFn: () => getProducts({ filter, page }),
  });

  // PRE-FETCHING
  const pageCount = count ? Math.ceil(count / PAGE_SIZE) : 0;
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", filter, page + 1],
      queryFn: () => getProducts({ filter, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", filter, page - 1],
      queryFn: () => getProducts({ filter, page: page - 1 }),
    });
  }

  return { products, isLoading, error, count };
}
