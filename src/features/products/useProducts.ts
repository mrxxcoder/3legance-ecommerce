import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";

export function useProducts() {
  const { data: products, isLoading } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return { products, isLoading };
}
