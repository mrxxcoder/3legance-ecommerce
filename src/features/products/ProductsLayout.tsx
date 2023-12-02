import ProductCard from "./ProductCard";

interface IProps {}

function ProductsLayout({}: IProps) {
  return (
    <div className="px-8 container mx-auto py-24">
      <h2 className="mb-12 text-4xl font-semibold">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductsLayout;
