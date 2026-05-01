import React from "react";

const CalculadoraIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img
            src="/icons/calculadora.png"
            alt="Ícone de cálculos"
            className={className}
        />
    );
};

export default CalculadoraIcon;