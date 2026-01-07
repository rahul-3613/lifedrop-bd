import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(352,83%,38%,0.3)] hover:shadow-[0_0_50px_hsl(352,83%,38%,0.5)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        emergency: "bg-gradient-to-br from-[hsl(352,83%,38%)] to-[hsl(352,100%,25%)] text-primary-foreground shadow-[0_0_30px_hsl(352,83%,38%,0.3)] hover:shadow-[0_0_50px_hsl(352,83%,38%,0.5)] hover:scale-105 animate-[pulse-glow_2s_ease-in-out_infinite]",
        hero: "bg-primary text-primary-foreground text-lg px-8 py-6 shadow-[0_0_30px_hsl(352,83%,38%,0.3)] hover:shadow-[0_0_50px_hsl(352,83%,38%,0.5)] hover:scale-105 transition-all duration-300",
        heroOutline: "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 transition-all duration-300",
        cta: "bg-primary text-primary-foreground text-xl px-10 py-7 shadow-[0_0_30px_hsl(352,83%,38%,0.3)] hover:shadow-[0_0_50px_hsl(352,83%,38%,0.5)] hover:scale-105 animate-[heartbeat_1.5s_ease-in-out_infinite] font-bold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-14 rounded-lg px-8 text-lg",
        xl: "h-16 rounded-xl px-10 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
