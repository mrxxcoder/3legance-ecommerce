import Button from "./Button";
import FormRow from "./FormRow";

interface IProps {}

function AccountForm({}: IProps) {
  return (
    <div>
      <form action="" className="space-y-5">
        <h2 className="text-xl font-semibold">Account Details</h2>
        <FormRow label="First Name">
          <input
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <FormRow label="Last Name">
          <input
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <h3 className="text-xl font-semibold">Password</h3>
        <FormRow label="New Password">
          <input
            id="new-password"
            type="password"
            placeholder="New password"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <FormRow label="Confirm new Password">
          <input
            id="confirm-new-password"
            type="password"
            placeholder="Confirm new password"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <Button variant="primary" width="w-fit">
          Save changes
        </Button>
      </form>
    </div>
  );
}

export default AccountForm;
