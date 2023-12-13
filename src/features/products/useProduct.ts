import { useQuery } from "react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => getProduct(productId),
    queryKey: ["product"],
  });

  return { data, isLoading };
}
