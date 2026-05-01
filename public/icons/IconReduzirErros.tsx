const IconReduzirErros = (props) => (
    <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="128" cy="128" r="110" fill="#E9EEF3" />

        <rect
            x="90"
            y="70"
            width="80"
            height="110"
            rx="8"
            fill="white"
            stroke="#0B3C5D"
            strokeWidth="6"
        />

        <line x1="105" y1="95" x2="155" y2="95" stroke="#0B3C5D" strokeWidth="4" />
        <line x1="105" y1="115" x2="155" y2="115" stroke="#0B3C5D" strokeWidth="4" />
        <line x1="105" y1="135" x2="145" y2="135" stroke="#0B3C5D" strokeWidth="4" />

        <circle cx="170" cy="170" r="26" fill="#5FAF2D" />

        <path
            d="M158 170l8 8 14-14"
            stroke="white"
            strokeWidth="5"
            fill="none"
        />
    </svg>
);

export default IconReduzirErros;