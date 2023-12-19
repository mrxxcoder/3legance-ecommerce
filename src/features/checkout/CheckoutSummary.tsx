import { useSelector } from "react-redux";
import CartItem from "../../ui/CartItem";
import { RootState } from "../../store/store";
import Button from "../../ui/Button";

function CheckoutSummary() {
  const products = useSelector((state: RootState) => state.cart.products);
  return (
    <div className="border border-gray-700 rounded-xl p-6 h-fit space-y-6">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div>
        {products.map((product) => (
          <CartItem product={product} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Discount Copoun"
          className="border border-gray-300 rounded-md px-2 py-3 outline-none focus:border-gray-500"
        />
        <Button variant="primary" width="w-fit">
          Apply
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between border-t border-t-gray-200 pt-2">
          <span>Shipping</span>
          <span className="font-medium text-md">Free</span>
        </div>
        <div className="flex items-center justify-between border-t border-t-gray-200 pt-2">
          <span className="font-semibold text-lg">Total</span>
          <span className="text-md font-medium">$250.00</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
