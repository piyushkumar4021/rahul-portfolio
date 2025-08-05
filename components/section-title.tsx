import { PropsWithChildren, HTMLAttributes } from "react";

type SectionTitleProps = PropsWithChildren & HTMLAttributes<HTMLHeadingElement>;

export default function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps) {
  const baseStyles = "text-3xl font-semibold text-center mb-9";

  return (
    <h2 className={`${baseStyles} ${className || ""}`} {...props}>
      {children}
    </h2>
  );
}
