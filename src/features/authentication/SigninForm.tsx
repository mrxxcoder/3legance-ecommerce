import { Link } from "react-router-dom";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import React, { useState } from "react";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/Input";

interface IProps {}

function SigninForm({}: IProps) {
  const [email, setEmail] = useState("ahmed@example.com");
  const [password, setPassword] = useState("00000000");
  const { login, isLoading } = useLogin();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <div className="p-4 sm:px-8 sm:pt-16 md:px-16 md:pt-32 lg:px-32 lg:pt-64 space-y-6">
      <h1 className="text-4xl font-semibold">Sign up</h1>
      <p className="text-md text-gray-500">
        Don’t have an accout yet?
        <Link to="/signup" className="font-medium text-[#38cb89]">
          Sign Up
        </Link>
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormRow label="Email address">
          <Input
            disabled={isLoading}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            disabled={isLoading}
            type="password"
            placeholder="Username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
        <Button variant="primary" width="w-full" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

export default SigninForm;
