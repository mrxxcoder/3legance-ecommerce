import ProductsList from "../features/products/ProductsList";

function BestSeller() {
  return (
    <div className="px-8 container mx-auto">
      <h2 className="mb-12 text-4xl font-semibold">Best Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductsList length={4} />
      </div>
    </div>
  );
}

export default BestSeller;
