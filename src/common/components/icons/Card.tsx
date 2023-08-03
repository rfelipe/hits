const Card = ({ ...props }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_436_5360)">
                <rect width="48" height="48" fill="white" />
                <rect x="6.1" y="6.1" width="35.8" height="35.8" rx="1.9" stroke="black" stroke-opacity="0.1" stroke-width="0.2" />
                <rect x="4.1" y="8.1" width="39.8" height="31.8" rx="1.9" stroke="black" stroke-opacity="0.1" stroke-width="0.2" />
                <rect x="8.1" y="4.1" width="31.8" height="39.8" rx="1.9" stroke="black" stroke-opacity="0.1" stroke-width="0.2" />
                <circle cx="24" cy="24" r="19.9" stroke="black" stroke-opacity="0.1" stroke-width="0.2" />
                <circle cx="24" cy="24" r="9.9" stroke="black" stroke-opacity="0.1" stroke-width="0.2" />
                <path d="M0.1 0.1H16H24H32H47.9V16V24V32V47.9H32H24H16H0.1V32V24V16V0.1Z" stroke="black" stroke-opacity="0.1" stroke-width="0.2" />
            </g>
            <g clip-path="url(#clip1_436_5360)">
                <mask id="mask0_436_5360" style={{ 'maskType': 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="9" width="40" height="30">
                    <path d="M44 9H4V38.7H44V9Z" fill="white" />
                </mask>
                <g mask="url(#mask0_436_5360)">
                    <path d="M7.81547 9.87274H40.1852C41.8094 9.87274 43.1276 11.1909 43.1276 12.8152V34.8849C43.1276 36.5091 41.8094 37.8273 40.1852 37.8273H7.81547C6.19123 37.8273 4.87305 36.5091 4.87305 34.8849V12.8152C4.87305 11.1909 6.19123 9.87274 7.81547 9.87274Z" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.95752 20.1727H38.0424" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.627 30.4727H38.0421" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_436_5360">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
                <clipPath id="clip1_436_5360">
                    <rect width="40" height="29.7" fill="white" transform="translate(4 9)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Card;