import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...rest }: IProps) {
  return (
    <input
      className="border border-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-gray-500"
      {...rest}
    />
  );
}

export default Input;
