import React from "react";

export default function SectionTitle({
    title,
    subtitle,
    className = "",
}: {
    title: string;
    subtitle?: string;
    className?: string;
}) {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-green to-brand-greenDark bg-clip-text text-transparent">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}