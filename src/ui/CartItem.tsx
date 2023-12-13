import {
  HiMiniMinusSmall,
  HiMiniPlusSmall,
  HiMiniXMark,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { IProduct } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../store/cart/cartSlice";
import { RootState } from "../store/store";

interface IProps {
  product: IProduct;
}

function CartItem({ product }: IProps) {
  const products = useSelector((state: RootState) => state.cart.products);

  const curProduct = products.find((product) => product.id === product.id);
  const quantity = curProduct?.quantity;

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(incrementQuantity(product.id));
  }

  function handleDecrement() {
    if (quantity === 1) {
      dispatch(removeProduct(product.id));
    }
    dispatch(decrementQuantity(product.id));
  }

  return (
    <div className="flex gap-6 border-b border-b-gray-200 pt-8 md:pt-12 pb-4">
      <div>
        <img src={product.images[0]} alt={product.title} className="w-20" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-md text-gray-500 font-medium">Color: Black</p>
        <div className="bg-transparent flex items-center justify-center gap-4 rounded-lg border border-gray-400 w-fit">
          <ButtonIcon className="text-gray-400" onClick={handleDecrement}>
            <HiMiniMinusSmall size={24} />
          </ButtonIcon>
          <span className="text-lg font-medium">{product.quantity}</span>
          <ButtonIcon className="text-gray-400" onClick={handleIncrement}>
            <HiMiniPlusSmall size={24} />
          </ButtonIcon>
        </div>
      </div>
      <div className="ml-auto flex flex-col justify-between items-end">
        <p className="text-lg font-medium">${product.price}</p>
        <ButtonIcon onClick={() => dispatch(removeProduct(product.id))}>
          <HiMiniXMark size={26} />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default CartItem;
