import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none";

    const styles =
        variant === "primary"
            ? "bg-brand-green text-white hover:bg-brand-greenDark"
            : "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white";

    return (
        <button className={`${base} ${styles} ${className}`} {...props}>
            {children}
        </button>
    );
}