import React from "react";

const GargalosIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src="/icons/gargalos.png"
        alt="Ícone de gargalos"
        className={className}
    />
);

export default GargalosIcon;