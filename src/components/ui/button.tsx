// Button Component
import * as React from "react";
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", className, ...props }, ref) => {
    const baseStyles = "px-4 py-2 rounded font-medium transition";
    const sizeStyles =
      size === "sm"
        ? "text-sm"
        : size === "md"
        ? "text-base"
        : size === "lg"
        ? "text-lg"
        : "h-12 w-12 flex items-center justify-center";

    const variantStyles =
      variant === "default"
        ? "bg-purple-600 text-white hover:bg-purple-700"
        : variant === "outline"
        ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
        : variant === "ghost"
        ? "text-gray-700 hover:text-purple-900"
        : "bg-transparent";

    return (
      <button
        ref={ref}
        className={classNames(baseStyles, sizeStyles, variantStyles, className)}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";