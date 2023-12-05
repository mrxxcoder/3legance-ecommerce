import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function ButtonIcon({ children, ...rest }: IProps) {
  return (
    <button
      className="bg-none border-none p-[6px] rounded-sm transition-all"
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
