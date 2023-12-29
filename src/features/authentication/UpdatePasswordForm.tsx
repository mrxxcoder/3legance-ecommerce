import { useUpdateUser } from "./useUpdateUser";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

import { Controller, FieldValues, useForm } from "react-hook-form";

function UpdatePasswordForm() {
  const { control, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit(data: FieldValues) {
    const { password } = data;
    updateUser({ password });
    console.log("UPDATED");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-gray-50 p-8"
    >
      <h2 className="text-xl font-semibold">Password</h2>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message?.toString()}
      >
        <Controller
          name="password"
          control={control}
          rules={{
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          }}
          render={({ field }) => (
            <Input
              type="password"
              id="password"
              disabled={isUpdating}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message?.toString()}
      >
        <Controller
          name="passwordConfirm"
          control={control}
          rules={{
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          }}
          render={({ field }) => (
            <Input
              type="password"
              id="passwordConfirm"
              disabled={isUpdating}
              {...field}
            />
          )}
        />
      </FormRow>
      <Button width="w-fit" variant="primary" disabled={isUpdating}>
        Update password
      </Button>
    </form>
  );
}

export default UpdatePasswordForm;
