import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  const baseStyles =
    "py-3 px-6 bg-[#f1eadd] border-0 rounded-md font-semibold cursor-pointer transition-colors duration-300 ease-in-out";

  return (
    <button className={`${baseStyles} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
