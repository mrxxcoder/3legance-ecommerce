import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CheckoutForm() {
  return (
    <form className="col-span-2 space-y-6 mb-8 max-w-[640px]">
      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <div className="flex gap-6 flex-wrap">
          <FormRow label="First name">
            <Input type="text" placeholder="First name" />
          </FormRow>
          <FormRow label="Last name">
            <Input type="text" placeholder="Last name" />
          </FormRow>
        </div>
        <FormRow label="Phone number">
          <Input type="number" placeholder="Phone number" />
        </FormRow>
        <FormRow label="Email address">
          <Input type="email" placeholder="Email address" />
        </FormRow>
      </div>

      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
        <FormRow label="Street address">
          <Input type="text" placeholder="Street address" />
        </FormRow>
        <FormRow label="Country">
          <Input type="text" placeholder="Country" />
        </FormRow>

        <FormRow label="Town/City">
          <Input type="text" placeholder="Town/City" />
        </FormRow>
        <div className="flex gap-6 flex-wrap">
          <FormRow label="State">
            <Input type="text" placeholder="State" />
          </FormRow>
          <FormRow label="Zip code">
            <Input type="number" placeholder="Zip code" />
          </FormRow>
        </div>
      </div>

      <div className="border border-gray-700 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Payment Information</h2>
        <FormRow label="Card number">
          <Input type="number" placeholder="1234 1234 1234 1234" />
        </FormRow>
        <div className="flex gap-6 flex-wrap">
          <FormRow label="Expiration date">
            <Input type="text" placeholder="Expiration date" />
          </FormRow>

          <FormRow label="CVC">
            <Input type="number" placeholder="CVC code" />
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
