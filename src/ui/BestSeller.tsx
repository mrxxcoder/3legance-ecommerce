import ProductCard from "../features/products/ProductCard";

interface IProps {}

function BestSeller({}: IProps) {
  return (
    <div className="px-8 container mx-auto">
      <h2 className="mb-12 text-4xl font-semibold">Best Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default BestSeller;
