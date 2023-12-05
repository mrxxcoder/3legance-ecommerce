import {
  HiMiniMinusSmall,
  HiMiniPlusSmall,
  HiMiniXMark,
} from "react-icons/hi2";
import img from "../assets/images/product-thmbnail2.png";
import ButtonIcon from "./ButtonIcon";

interface IProps {}

function CartItem({}: IProps) {
  return (
    <div className="flex gap-4 border-b border-b-gray-200 pt-8 md:pt-12 pb-4">
      <div>
        <img src={img} alt="img" className="w-20" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-semibold">Tray Table</h2>
        <p className="text-md text-gray-500 font-medium">Color: Black</p>
        <div className="bg-transparent flex items-center justify-center gap-4 rounded-lg border border-gray-400">
          <ButtonIcon className="text-gray-400">
            <HiMiniMinusSmall size={24} />
          </ButtonIcon>
          <span className="text-lg font-medium">1</span>
          <ButtonIcon className="text-gray-400">
            <HiMiniPlusSmall size={24} />
          </ButtonIcon>
        </div>
      </div>
      <div className="ml-auto flex flex-col justify-between">
        <p className="text-lg font-medium">$39.00</p>
        <ButtonIcon>
          <HiMiniXMark size={26} />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default CartItem;
