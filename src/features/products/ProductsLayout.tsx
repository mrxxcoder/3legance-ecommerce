import ProductsList from "./ProductsList";

interface IProps {
  title?: string;
  length?: number;
}

function ProductsLayout({ title, length }: IProps) {
  return (
    <div className="px-8 container mx-auto py-24">
      {title && <h2 className="mb-12 text-4xl font-semibold">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductsList length={length} />
      </div>
    </div>
  );
}

export default ProductsLayout;
