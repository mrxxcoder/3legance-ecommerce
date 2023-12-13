import { IProduct } from "../../interfaces";
import ProductCardSkeleton from "../../ui/ProductCardSkeleton";
import ProductCard from "./ProductCard";
import { useProducts } from "./useProducts";

function ProductsList() {
  const { products, isLoading } = useProducts();

  if (isLoading || !products) {
    return (
      <>
        {Array.from({ length: 8 }, (_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </>
    );
  }

  return (
    <>
      {products?.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductsList;
