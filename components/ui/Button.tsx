import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    outline: "border border-white/20 hover:border-white/40 text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
