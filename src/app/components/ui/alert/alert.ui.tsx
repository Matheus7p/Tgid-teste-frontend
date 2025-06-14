import { ReactNode } from "react";
import clsx from "clsx";

interface AlertProps {
  variant?: "success" | "error" | "warning" | "info";
  children: ReactNode;
}

export function Alert({ variant = "info", children }: AlertProps) {
  const variantStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-1/2 transform z-50 -translate-x-1/2 w-full max-w-md p-4 rounded-md shadow-md border",
        variantStyles[variant],
        "transition-all duration-300"
      )}
    >
      {children}
    </div>
  );
}
