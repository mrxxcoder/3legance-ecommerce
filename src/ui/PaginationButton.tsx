import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

function PaginationButton({ active, children, ...rest }: IProps) {
  return (
    <button
      className={`${
        active ? "bg-black text-white" : "bg-white text-black"
      } border-none rounded-sm font-medium text-sm flex items-center justify-center gap-1 py-1.5 px-3 transition-all hover:bg-black hover:text-white`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
