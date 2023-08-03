const Computer = ({ ...props }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_406_3705)">
                <mask id="mask0_406_3705" style={{ 'maskType': 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="6" width="40" height="37">
                    <path d="M44 6H4V42.476H44V6Z" fill="white" />
                </mask>
                <g mask="url(#mask0_406_3705)">
                    <path d="M37.564 41.504C37.564 34.012 31.492 27.94 24 27.94C16.508 27.94 10.436 34.012 10.436 41.504" stroke="black" stroke-width="1.944" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M41.5642 6.97198H6.43617C5.62762 6.97198 4.97217 7.62744 4.97217 8.43598V31.852C4.97217 32.6605 5.62762 33.316 6.43617 33.316H41.5642C42.3727 33.316 43.0282 32.6605 43.0282 31.852V8.43598C43.0282 7.62744 42.3727 6.97198 41.5642 6.97198Z" stroke="black" stroke-width="1.944" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_406_3705">
                    <rect width="40" height="36.476" fill="white" transform="translate(4 6)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Computer;