import React from "react";

const TempoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src="/icons/tempo.png"
        alt="Ícone de tempo"
        className={className}
    />
);

export default TempoIcon;