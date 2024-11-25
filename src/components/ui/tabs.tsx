import React, { useState } from "react";

export const Tabs = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div>{children}</div>;
};

export const TabsList = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="flex">{children}</div>;
};

export const TabsTrigger = ({
  children,
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="p-4">{children}</div>;
};
