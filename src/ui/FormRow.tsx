import { ReactNode } from "react";

interface IProps {
  label: string;
  children: ReactNode;
  error?: string;
}

function FormRow({ label, children, error }: IProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={children.props.id}
        className="uppercase font-medium text-gray-600 text-sm"
      >
        {label}
      </label>
      {children}
      {error && <span className="text-md text-red-500">{error}</span>}
    </div>
  );
}

export default FormRow;
