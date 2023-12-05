import thumbnail2 from "../assets/images/product-thmbnail2.png";
import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import { HiOutlineHeart } from "react-icons/hi2";
import Button from "./Button";

interface IProps {}

function ProductLayout({}: IProps) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-16 my-16 p-8">
      <div className="space-y-4">
        <img src={thumbnail2} alt="product image" />
        <div className="gap-4 hidden md:flex">
          <img src={gallery1} alt="subimage" className="w-full" />
          <img src={gallery2} alt="subimage" className="w-full" />
          <img src={gallery3} alt="subimage" className="w-full" />
        </div>
      </div>
      <div className="space-y-6 max-w-[36rem]">
        <h2 className="text-4xl font-medium">Skullcandy</h2>
        <p className="text-md text-gray-500">
          Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.
        </p>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-medium">$199.00</span>
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
