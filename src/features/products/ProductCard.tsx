import Headphone1 from "../../assets/images/Headphone1.png";
import { HiOutlineHeart } from "react-icons/hi2";
import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";

function ProductCard() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="relative group">
        <div className="flex flex-col justify-between absolute w-full h-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between">
            <span className="uppercase text-sm bg-white rounded-md font-semibold py-[1px] px-4 block">
              new
            </span>
            <div className="bg-white p-2 rounded-full shadow-md">
              <ButtonIcon>
                <HiOutlineHeart />
              </ButtonIcon>
            </div>
          </div>

          <div className="self-center">
            <Button width="w-full">Add to cart</Button>
          </div>
        </div>
        <img src={Headphone1} className="w-full" />
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-lg font-semibold">
          Skullcandy - Crusher anc 2 wireless headphones
        </h2>
        <p className="font-semibold">$299.99</p>
      </div>
    </div>
  );
}

export default ProductCard;
