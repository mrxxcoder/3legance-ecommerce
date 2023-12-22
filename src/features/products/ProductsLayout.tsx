import Pagination from "../../ui/Pagination";
import ProductsList from "./ProductsList";
import { useProducts } from "./useProducts";

interface IProps {
  title?: string;
}

function ProductsLayout({ title }: IProps) {
  const { count } = useProducts();
  return (
    <div className="px-8 container mx-auto py-24">
      {title && <h2 className="mb-12 text-4xl font-semibold">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductsList />
      </div>
      <div className="mt-16">
        <Pagination count={count} />
      </div>
    </div>
  );
}

export default ProductsLayout;
