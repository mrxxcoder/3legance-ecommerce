import { HiOutlineHeart } from "react-icons/hi2";
import Button from "./Button";
import { useProduct } from "../features/products/useProduct";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

function ProductLayout() {
  const { data: product, isLoading } = useProduct();

  if (isLoading || !product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-16 my-16 p-8">
      <div className="space-y-4">
        <div className="bg-[#F3F5F7]">
          <img
            src={product.images[0]}
            alt={product.title}
            className="max-w-full md:max-w-[548px] mix-blend-multiply"
          />
        </div>
        <div className="gap-4 hidden md:flex md:justify-between bg-[#F3F5F7]">
          <img
            src={product.images[0]}
            alt={product.title}
            className="max-w-[167px] shadow-sm hover:border hover:border-black transition mix-blend-multiply"
          />
          <img
            src={product.images[1]}
            alt={product.title}
            className="max-w-[167px] shadow-sm hover:border hover:border-black transition mix-blend-multiply"
          />
          <img
            src={product.images[2]}
            alt={product.title}
            className="max-w-[167px] shadow-sm hover:border hover:border-black transition mix-blend-multiply"
          />
        </div>
      </div>
      <div className="space-y-6 max-w-[36rem]">
        <h2 className="text-4xl font-medium">{product.title}</h2>
        <p className="text-md text-gray-500">{product.description}</p>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-medium">${product.price}</span>
          <span className="text-xl font-medium text-gray-500 line-through">
            $400.00
          </span>
        </div>
        <div className="grid grid-cols-[6rem_1fr] md:grid-cols-[10rem_1fr] grid-rows-2 gap-x-6 gap-y-3">
          <div className="bg-gray-100 flex items-center justify-center gap-4 rounded-lg">
            <span className="text-2xl font-medium">-</span>
            <span className="text-xl font-medium">1</span>
            <span className="text-2xl font-medium">+</span>
          </div>
          <div>
            <Button
              variant="secondary"
              width="w-full"
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <span>
                <HiOutlineHeart size={24} />
              </span>
              <span>Wishlist</span>
            </Button>
          </div>
          <div className="row-start-2 col-start-1 col-end-3">
            <Button variant="primary" width="w-full">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
