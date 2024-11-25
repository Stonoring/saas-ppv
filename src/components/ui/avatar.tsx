import React from "react";

export const Avatar = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={`h-10 w-10 rounded-full overflow-hidden ${className}`}>{children}</div>;
};

export const AvatarImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
};

export const AvatarFallback = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="h-full w-full flex items-center justify-center bg-gray-300">{children}</div>;
};
