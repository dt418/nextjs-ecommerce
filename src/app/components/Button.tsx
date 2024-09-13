import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-none px-8 py-4 text-body-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-white hover:bg-dark-primary focus:ring-primary",
        secondary:
          "border-border-gray bg-light-grey hover:bg-border-gray focus:border-primary focus:ring-primary",
        opaque:
          "border-none bg-light-grey/15 text-white hover:bg-light-grey/30 focus:ring-primary",
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
