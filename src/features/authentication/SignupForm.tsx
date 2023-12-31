import { Link } from "react-router-dom";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

function SignupForm() {
  const { control, handleSubmit, formState, reset } = useForm<Inputs>();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  const onSubmit: SubmitHandler<Inputs> = ({ fullName, email, password }) => {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  };

  return (
    <div className="p-4 sm:px-8 sm:pt-16 md:px-16 md:pt-32 lg:px-32 lg:pt-64 space-y-6">
      <h1 className="text-4xl font-semibold">Sign up</h1>
      <p className="text-md text-gray-500">
        Already have an account?
        <Link to="/signin" className="font-medium text-[#38cb89]">
          Sign in
        </Link>
      </p>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Your name" error={errors.fullName?.message}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                disabled={isLoading}
                id="fullName"
                placeholder="Your name"
                {...field}
              />
            )}
            rules={{ required: "This field is required" }}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                disabled={isLoading}
                id="email"
                placeholder="Email address"
                {...field}
              />
            )}
            rules={{
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address.",
              },
            }}
          />
        </FormRow>

        <FormRow label="Password" error={errors?.password?.message}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                disabled={isLoading}
                id="password"
                placeholder="Password"
                {...field}
              />
            )}
            rules={{
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            }}
          />
        </FormRow>

        <Button variant="primary" width="w-full" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
