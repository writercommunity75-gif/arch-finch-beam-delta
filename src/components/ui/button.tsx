import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg shadow-border hover:bg-primary-hover",
        outline:
          "bg-surface text-fg shadow-border hover:bg-surface-muted",
        ghost: "bg-transparent text-fg hover:bg-surface-muted",
        whatsapp:
          "bg-whatsapp text-whatsapp-fg shadow-border hover:bg-whatsapp-hover",
      },
      size: {
        sm: "h-10 rounded-lg px-3.5 text-sm",
        md: "h-11 rounded-xl px-5 text-sm",
        lg: "h-12 rounded-xl px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
