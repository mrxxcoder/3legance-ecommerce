import { Link } from "react-router-dom";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

interface IProps {}

function SignupForm({}: IProps) {
  return (
    <div className="p-4 sm:px-8 sm:pt-16 md:px-16 md:pt-32 lg:px-32 lg:pt-64 space-y-6">
      <h1 className="text-4xl font-semibold">Sign up</h1>
      <p className="text-md text-gray-500">
        Already have an account?
        <Link to="/signin" className="font-medium text-[#38cb89]">
          Sign in
        </Link>
      </p>
      <form className="space-y-6">
        <FormRow label="Your name">
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <FormRow label="Username">
          <input
            type="text"
            placeholder="Username"
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
        <FormRow label="Password">
          <input
            type="password"
            placeholder="Username"
            className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
          />
        </FormRow>
        <Button variant="primary" width="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
