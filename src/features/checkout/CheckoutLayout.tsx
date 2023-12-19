import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

function CheckoutLayout() {
  return (
    <>
      <h1 className="text-5xl font-semibold text-center my-16">Checkout</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-16 p-4 md:p-0">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </>
  );
}

export default CheckoutLayout;
