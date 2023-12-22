import Button from "./Button";
import FormRow from "./FormRow";
import Input from "./Input";

function AccountForm() {
  return (
    <div>
      <form action="" className="space-y-5">
        <h2 className="text-xl font-semibold">Account Details</h2>
        <FormRow label="First Name">
          <Input
            id="first-name"
            type="text"
            placeholder="Enter your first name"
          />
        </FormRow>
        <FormRow label="Last Name">
          <Input
            id="last-name"
            type="text"
            placeholder="Enter your last name"
          />
        </FormRow>
        <h3 className="text-xl font-semibold">Password</h3>
        <FormRow label="New Password">
          <Input id="new-password" type="password" placeholder="New password" />
        </FormRow>
        <FormRow label="Confirm new Password">
          <Input
            id="confirm-new-password"
            type="password"
            placeholder="Confirm new password"
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
