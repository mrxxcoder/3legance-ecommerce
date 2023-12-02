import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function ButtonIcon({ children }: IProps) {
  return (
    <button className="bg-none border-none p-[6px] rounded-sm transition-all">
      {children}
    </button>
  );
}

export default ButtonIcon;
