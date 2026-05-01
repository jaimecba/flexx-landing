const IconIndicadores = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={64}
        height={64}
    >
        <circle cx="32" cy="32" r="30" fill="#E9F2FF" />
        <g
            stroke="#1A62FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        >
            <rect x="18" y="40" width="6" height="18" rx="2" />
            <rect x="26" y="36" width="6" height="22" rx="2" />
            <rect x="34" y="28" width="6" height="30" rx="2" />

            <line x1="40" y1="28" x2="40" y2="16" />
            <line x1="40" y1="16" x2="46" y2="22" />
            <line x1="40" y1="16" x2="34" y2="22" />
        </g>
        <g stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="47" y="47" width="12" height="12" rx="1.5" fill="white" stroke="#4CAF50" strokeWidth="1" />
            <path d="M49 50 L52 53 L56 49" fill="none" />
        </g>
    </svg>
);

export default IconIndicadores;