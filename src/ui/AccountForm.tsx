import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function AccountForm() {
  return (
    <div className="space-y-4">
      <UpdateUserDataForm />
      <UpdatePasswordForm />
    </div>
  );
}

export default AccountForm;
