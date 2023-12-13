import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/images/empty-cart.svg";
import Button from "./Button";

interface IProps {
  className?: string;
}
function EmptyCart({ className }: IProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/shop");
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <img src={emptyCart} alt="empty cart svg" />
      <h3 className="text-2xl text-center font-semibold">
        Your cart is empty, start shopping now.
      </h3>
      <Button variant="primary" width="w-full" onClick={handleClick}>
        Start Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;
