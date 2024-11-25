import React, { useState } from "react";

export const DropdownMenu = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="relative">{children}</div>;
};

export const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ children, asChild, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      ref,
      ...props,
    });
  }
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});

DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export const DropdownMenuContent = ({
  children,
  className,
  align = "start",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { align?: "start" | "end" }) => {
  const [isOpen, setIsOpen] = useState(false); // État pour l'ouverture/fermeture
  const alignmentClass = align === "start" ? "left-0" : "right-0";

  return (
    <div
      className={`absolute z-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 w-48 transform transition-all duration-200 ${
        isOpen
          ? "scale-100 opacity-100"
          : "scale-95 opacity-0 pointer-events-none"
      } ${alignmentClass} ${className || ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export const DropdownMenuItem = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
