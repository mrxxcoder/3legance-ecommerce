import { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: string;
  variant: string;
}

function Button({
  children,
  width = "w-fit",
  variant = "primary",
  ...rest
}: IProps) {
  let className;
  if (variant === "primary") {
    className = `bg-[#141718] text-white font-semibold px-14 py-3 ${width} rounded-lg`;
  }

  if (variant === "secondary") {
    className = `bg-transparent text-[#141718] border-2 border-[#141718] font-semibold px-14 py-3 ${width} rounded-lg`;
  }

  if (variant === "outline") {
    className = `bg-transparent text-[#141718] text-lg font-semibold  ${width} border-b border-b-[#141718] `;
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
