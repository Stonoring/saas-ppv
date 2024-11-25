import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "outline" | "secondary";
};

export const Badge = ({ variant = "default", children, className }: BadgeProps) => {
  const baseStyles = "px-3 py-1 text-xs font-semibold rounded-full";
  const styles =
    variant === "default"
      ? "bg-blue-100 text-blue-800"
      : variant === "outline"
      ? "border border-gray-300 text-gray-700 dark:text-gray-300"
      : "bg-green-100 text-green-800";

  return <div className={`${baseStyles} ${styles} ${className}`}>{children}</div>;
};
