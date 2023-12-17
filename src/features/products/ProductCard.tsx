import { HiArrowTopRightOnSquare, HiOutlineHeart } from "react-icons/hi2";
import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";
import { IProduct } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProduct } from "../../store/cart/cartSlice";
import { addItem } from "../../store/wishlist/wishlistSlice";

interface IProps {
  product: IProduct;
}

function ProductCard({ product }: IProps) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-3">
      <div className="relative group bg-[#F3F5F7]">
        <div className="flex flex-col justify-between absolute z-10 w-full h-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between">
            <span className="uppercase text-sm bg-white rounded-md font-semibold py-[1px] px-4 block">
              new
            </span>
            <div className="flex space-x-1">
              <ButtonIcon
                className="bg-white p-2 rounded-full shadow-md"
                onClick={() => dispatch(addItem(product))}
              >
                <HiOutlineHeart size={20} />
              </ButtonIcon>

              <ButtonIcon
                className="bg-white p-2 rounded-full shadow-md"
                onClick={() => navigate(`/shop/${product.id}`)}
              >
                <HiArrowTopRightOnSquare size={20} />
              </ButtonIcon>
            </div>
          </div>

          <div className="self-center space-y-2">
            <Button
              variant="primary"
              width="w-full"
              onClick={() => dispatch(addProduct(product))}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <img src={product.images[0]} className="w-full mix-blend-multiply" />
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="font-semibold">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
