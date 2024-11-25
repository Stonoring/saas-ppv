import React from "react";

export const ScrollArea = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`overflow-y-auto scrollbar-thin scrollbar-thumb-rounded ${className}`}>
      {children}
    </div>
  );
};
