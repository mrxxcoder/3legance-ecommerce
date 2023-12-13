function ProductDetailsSkeleton() {
  return (
    <div className="container mx-auto flex gap-16 my-16 p-8">
      <div className="skeleton h-[500px] w-full"></div>

      <div className="skeleton h-4 w-28"></div>

      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export default ProductDetailsSkeleton;
