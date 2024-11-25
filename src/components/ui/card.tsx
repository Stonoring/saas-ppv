// Card Component
import * as React from "react";

// Description text inside cards
export const CardDescription = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <p className="text-sm text-gray-600 dark:text-gray-400">{children}</p>;
};

// Main card wrapper
export const Card = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`p-6 shadow-md rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-all ${className}`}
    >
      {children}
    </div>
  );
};

// Card Header
export const CardHeader = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="mb-4 border-b pb-2">{children}</div>;
};

// Card Title
export const CardTitle = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{children}</h3>
  );
};

// Card Content (Body)
export const CardContent = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="space-y-4">{children}</div>;
};
