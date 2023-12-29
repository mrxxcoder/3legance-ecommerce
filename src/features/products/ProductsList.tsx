import { IProduct } from "../../interfaces";
import ProductCardSkeleton from "../../ui/ProductCardSkeleton";
import ProductCard from "./ProductCard";
import { useProducts } from "./useProducts";

interface IProps {
  length?: number;
}

function ProductsList({ length }: IProps) {
  const { products, isLoading } = useProducts();
  // console.log(products);
  // const [searchParams] = useSearchParams();
  // const filterValue = searchParams.get("categories");
  // const filteredProducts =
  //   filterValue === "all"
  //     ? products
  //     : products.filter((product) => product.categories.title === filterValue);
  // console.log(filteredProducts);
  if (isLoading || !products) {
    return (
      <>
        {Array.from({ length: 8 }, (_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </>
    );
  }

  const displayedProducts = length ? products.slice(0, length) : products;

  return (
    <>
      {displayedProducts?.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductsList;
