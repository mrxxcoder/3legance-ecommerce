import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("categories");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "categories.title", value: filterValue };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    error,
    data: { data: products, count } = { data: [], count: null },
  } = useQuery({
    queryKey: ["products", filter, page],
    queryFn: () => getProducts({ filter, page }),
  });

  console.log(products);

  return { products, isLoading, error, count };
}
