import React from "react";

const FacialIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img
            src="/icons/facial.png"
            alt="Ícone de reconhecimento facial"
            className={className}
        />
    );
};

export default FacialIcon;