import { HiMiniXMark } from "react-icons/hi2";
import Button from "../../ui/Button";
import { IProduct } from "../../interfaces";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cart/cartSlice";
import toast from "react-hot-toast";

interface IProps {
  item: IProduct;
}

function WishlistItem({ item }: IProps) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addProduct(item));
    toast.success("Product successfully added to cart");
  }
  return (
    <div className="flex flex-wrap md:flex-nowrap p-4 gap-4 justify-between items-center border-b border-b-gray-200">
      <div className="flex items-center gap-2">
        <HiMiniXMark size={26} />
        <img src={item.images[0]} className="w-20" />
      </div>
      <div className="space-y-1 mr-auto">
        <h2 className="text-xl font-medium">{item.title}</h2>
        <p className="text-gray-500">color: black</p>
        <p className="font-medium">${item.price}</p>
      </div>
      <div className="w-full lg:w-fit">
        <Button
          variant="primary"
          width="w-full md:w-fit"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default WishlistItem;
