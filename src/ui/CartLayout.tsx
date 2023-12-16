import { useSelector } from "react-redux";
import Button from "./Button";
import CartItem from "./CartItem";
import { RootState } from "../store/store";
import EmptyCart from "./EmptyCart";
import { calculateTotalPrice } from "../utils";

function CartLayout() {
  const products = useSelector((state: RootState) => state.cart.products);

  if (products.length === 0) {
    return (
      <EmptyCart className="mx-auto container p-8 md:p-0 w-[20rem] md:w-[30rem]" />
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-[1fr_32rem] gap-16">
      <div className="">
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-medium">Cart Summary</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center ps-4 border border-gray-800 rounded">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-gray-800 border-gray-800 focus:ring-gray-800 "
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ms-2 text-lg text-gray-800"
            >
              Free Shipping
            </label>
          </div>
          <div className="flex items-center ps-4 border border-gray-800 rounded">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-gray-800 border-gray-800 focus:ring-gray-800 "
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-lg text-gray-800"
            >
              Express Shipping
            </label>
          </div>

          <div className="flex items-center ps-4 border border-gray-800 rounded">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-gray-800 border-gray-800 focus:ring-gray-800 "
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-lg text-gray-800"
            >
              Pick Up
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray-300 py-4">
          <h3 className="text-xl md:text-2xl font-medium">Total</h3>
          <p className="text-xl md:text-2xl font-medium">
            ${calculateTotalPrice(products).toFixed(2)}
          </p>
        </div>

        <div>
          <Button width="w-full" variant="primary">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartLayout;
