import { ReactNode } from "react";

interface IProps {
  label: string;
  children: ReactNode;
}

function FormRow({ label, children }: IProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={children.props.id}
        className="uppercase font-medium text-gray-600 text-sm"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
