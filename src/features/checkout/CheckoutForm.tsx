import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

function CheckoutForm() {
  return (
    <form className="col-span-2 space-y-6 mb-8 max-w-[640px]">
      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <div className="flex gap-6 flex-wrap">
          <FormRow label="First name">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            />
          </FormRow>
          <FormRow label="Last name">
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            />
          </FormRow>
        </div>
        <FormRow label="Phone number">
          <input
            type="number"
            placeholder="Phone number"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <FormRow label="Email address">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
      </div>

      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
        <FormRow label="Street address">
          <input
            type="text"
            placeholder="Street address"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <FormRow label="Country">
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>

        <FormRow label="Town/City">
          <input
            type="text"
            placeholder="Town/City"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <div className="flex gap-6 flex-wrap">
          <FormRow label="State">
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            />
          </FormRow>
          <FormRow label="Zip code">
            <input
              type="number"
              placeholder="Zip code"
              className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            />
          </FormRow>
        </div>
      </div>

      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Payment Information</h2>
        <FormRow label="Card number">
          <input
            type="number"
            placeholder="1234 1234 1234 1234"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <div className="flex gap-6 flex-wrap">
          <FormRow label="Expiration date">
            <input
              type="text"
              placeholder="Expiration date"
              className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            />
          </FormRow>

          <FormRow label="CVC">
            <input
              type="number"
              placeholder="CVC code"
              className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            />
          </FormRow>
        </div>
      </div>
      <Button variant="primary" width="w-full">
        Place order
      </Button>
    </form>
  );
}

export default CheckoutForm;
