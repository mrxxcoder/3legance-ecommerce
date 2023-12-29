import { HiMiniXMark } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import EmptyCart from "../../ui/EmptyCart";
import { calculateTotalPrice } from "../../utils";
interface IProps {
  flyoutCartOpen: boolean;
  setFlyoutCartOpen: (value: boolean) => void;
}

function FlyoutCart({ flyoutCartOpen, setFlyoutCartOpen }: IProps) {
  const products = useSelector((state: RootState) => state.cart.products);

  const navigate = useNavigate();
  return (
    <div
      className={`bg-white h-screen overflow-y-scroll w-[45vh] fixed right-0 top-0 px-8 py-12 transition-all z-30 flex flex-col flyout-cart ${
        flyoutCartOpen ? "open" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <h2 className="text-2xl md:text-3xl">Cart</h2>
        <ButtonIcon onClick={() => setFlyoutCartOpen(false)}>
          <HiMiniXMark size={26} />
        </ButtonIcon>
      </div>
      {products.length === 0 ? (
        <EmptyCart className="mt-24" />
      ) : (
        <>
          <div>
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>
          <div className="mt-auto space-y-6 md:space-y-8">
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-xl md:text-2xl font-medium">Total</h3>
              <p className="text-xl md:text-2xl font-medium">
                ${calculateTotalPrice(products).toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                width="w-fit"
                variant="outline"
                onClick={() => {
                  navigate("/cart");
                  setFlyoutCartOpen(false);
                }}
              >
                View Cart
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FlyoutCart;
