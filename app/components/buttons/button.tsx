import { cn } from "@/app/core/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const buttonVariants = cva(
  // 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  "bg-[#2d2d2d] text-white shadow hover:shadow-md hover:bg-[#121212] active:bg-[#2d2d2d] px-7 py-1 text-sm rounded-[4px] font-semibold transition duration-[500] whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "text-white px-7 py-1 text-sm rounded-[4px] font-semibold",
        noBackground: "bg-transparent text-black hover:bg-gray-100 active:bg-transparent",
        outline: "bg-transparent border border-gray-100 text-black hover:bg-gray-100 active:bg-transparent",

        defaultFull: "text-white px-7 py-1 w-full text-sm rounded-[4px] font-semibold",
        noBackgroundFull: "bg-transparent w-full text-black hover:bg-gray-100 active:bg-[#2d2d2d]",
        outlineFull: "bg-transparent border w-full border-gray-100 text-black hover:bg-gray-100 active:bg-transparent",

      },
      size: {
        default: "py-1 px-7",
        sm: "py-2",
        md: "py-3",
        lg: "py-4",
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
  href?: string;
}

const LinkTemplate = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  if (href != null) {
    return <Link href={href}>{children}</Link>;
  } else {
    return children;
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    return (
      <LinkTemplate href={href}>
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </LinkTemplate>
    );
  }
);

export default Button;
