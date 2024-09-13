import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-white hover:bg-dark-primary focus:ring-primary",
        secondary:
          "border-gray-300 bg-white hover:bg-gray-100 focus:ring-gray-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ComponentPropsWithoutRef<"button"> {}

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
};
