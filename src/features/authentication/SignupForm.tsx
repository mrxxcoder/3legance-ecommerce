import { Link } from "react-router-dom";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Spinner from "../../ui/Spinner";

// Email regex: /\S+@\S+\.\S+/

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function SignupForm() {
  const { register, handleSubmit, formState, reset } = useForm<Inputs>();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, password }) => {
    signup({ name, email, password }, { onSettled: () => reset() });
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
        <FormRow label="Your name" error={errors?.name?.message}>
          <input
            type="text"
            disabled={isLoading}
            id="name"
            placeholder="Your name"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            type="email"
            disabled={isLoading}
            id="email"
            placeholder="Email address"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address.",
              },
            })}
          />
        </FormRow>
        <FormRow label="Password" error={errors?.password?.message}>
          <input
            type="password"
            disabled={isLoading}
            id="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
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
