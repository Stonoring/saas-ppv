import React from "react";

export const Sheet = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="fixed inset-0 bg-black/50">{children}</div>;
};

export const SheetTrigger = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div>{children}</div>;
};

export const SheetContent = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>{children}</div>;
};

export const SheetHeader = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="mb-4">{children}</div>;
};

export const SheetTitle = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <h3 className="text-lg font-bold">{children}</h3>;
};
