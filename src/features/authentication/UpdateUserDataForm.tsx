import { ChangeEvent, SyntheticEvent, useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { name: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState<File | null>(null);

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          (event.target as HTMLFormElement).reset();
        },
      }
    );
  }
  return (
    <form className="space-y-5 bg-gray-50 p-8" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Account Details</h2>
      <FormRow label="Email address">
        <Input id="email" disabled type="email" defaultValue={email} />
      </FormRow>
      <FormRow label="First Name">
        <Input
          id="fullName"
          disabled={isUpdating}
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <Input
          id="avatar"
          disabled={isUpdating}
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full max-w-xs"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              setAvatar(file);
            }
          }}
        />
      </FormRow>
      <Button variant="primary" width="w-fit" disabled={isUpdating}>
        Update account
      </Button>
    </form>
  );
}

export default UpdateUserDataForm;
