import React from "react";

const DadosIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src="/icons/dados.png"
        alt="Ícone de dados"
        className={className}
    />
);

export default DadosIcon;