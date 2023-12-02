import { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: string;
}

function Button({ children, width = "w-fit", ...rest }: IProps) {
  return (
    <button
      className={`bg-[#141718] text-white font-semibold px-14 py-3 ${width} rounded-lg`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
