import React from "react";

const AssinaturaIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img
            src="/icons/assinatura.png"
            alt="Ícone de assinatura eletrônica"
            className={className}
        />
    );
};

export default AssinaturaIcon;