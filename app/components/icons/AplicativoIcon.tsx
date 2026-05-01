import React from "react";

const AplicativoIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img
            src="/icons/aplicativo.png"
            alt="Ícone de aplicativo"
            className={className}
        />
    );
};

export default AplicativoIcon;