import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { RootState } from "../../store/store";
import EmptyCart from "../../ui/EmptyCart";
import { calculateTotalPrice } from "../../utils";
import { StripeError, loadStripe } from "@stripe/stripe-js";

import { useState } from "react";
import Spinner from "../../ui/Spinner";

const stripePromise = loadStripe(
  "pk_test_51OBQJ1FaDT3Re3v9Jd1JOgvdybmdXc01ge9OaytcM442DbzbN9jsjRYMvATL5ovZ13HiHztMEGGjO2KO9SIcqrXh009aC2jJLt"
);

function CartLayout() {
  const [stripeError, setStripeError] = useState(null);
  const [loading, setLoading] = useState(false);

  const products = useSelector((state: RootState) => state.cart.products);
  // const navigate = useNavigate();

  async function handleClick() {
    setLoading(true);
    const stripe = await stripePromise;
    if (!stripe) {
      // Handle the case where stripePromise did not resolve to a valid Stripe instance
      setLoading(false);
      // Add appropriate error handling or logging
      return;
    }

    const result = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1OSKAfFaDT3Re3v98Ne1gft0",
          quantity: 1,
        },
      ],
      mode: "payment",
      cancelUrl: window.location.origin,
      successUrl: `${window.location.origin}/complete`,
    });

    if (result.error) {
      setLoading(false);
      setStripeError(result.error as StripeError); // Type assertion as StripeError
    }
  }

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
          <Button
            width="w-full"
            variant="primary"
            onClick={handleClick}
            disabled={products.length === 0}
          >
            {loading ? <Spinner /> : "Checkout"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartLayout;
