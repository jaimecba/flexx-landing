import React from "react";

const DashboardIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img
            src="/icons/dashboard.png"
            alt="Ícone de dashboard"
            className={className}
        />
    );
};

export default DashboardIcon;