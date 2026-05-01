import React from "react";

const GraficoIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img
            src="/icons/grafico.png"
            alt="Ícone de indicadores"
            className={className}
        />
    );
};

export default GraficoIcon;