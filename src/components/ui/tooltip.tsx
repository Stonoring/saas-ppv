import React, { useState } from "react";

export const Tooltip = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className="relative group">{children}</div>;
  };  

export const TooltipProvider = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="relative">{children}</div>;
};

export const TooltipTrigger = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="inline-block">{children}</div>;
};

export const TooltipContent = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="absolute bg-black text-white text-sm rounded px-2 py-1">
      {children}
    </div>
  );
};
