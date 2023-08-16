import { ImageProps } from '../../../../../../../types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageItem: React.FC<ImageProps> = ({ src, alt, isLoading, colors }) => {
    const [isImageLoading, setIsImageLoading] = useState(false);

    const handleLoad = () => {
        setIsImageLoading(true);
    };

    if (!src) return null;
    return (
        <div className='2xl:absolute relative top-0 right-0 pb-7 pt-7 2xl:pb-0 2xl:pl-0'>
            <svg className='relative z-10 w-4/5 float-right  h-auto 2xl:w-auto' width="705" height="666" viewBox="0 0 705 666" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="668" height="666">
                        <ellipse cx="334.072" cy="333.103" rx="333.205" ry="332.897" transform="rotate(-180 334.072 333.103)" fill="#C8C3FF" />
                    </mask>
                </defs>
                <image xlinkHref={src.src} className={`opacity-0 transition-opacity duration-1000 w-[666px] h-[666px] ${src ? 'opacity-100' : 'opacity-0'
                    }`} />
                <g mask="url(#mask0)">

                </g>

                <path fillRule="evenodd" clipRule="evenodd" d="M853.766 0.205726C669.79 0.261435 520.664 149.283 520.664 333.103C520.664 516.957 669.845 666 853.87 666C857.64 666 861.353 665.937 865.009 665.813L1125 665.813L1125 0.000244141L853.766 0.000220451L853.766 0.205726Z" fill={colors[0]} />
                <path fillRule="evenodd" clipRule="evenodd" d="M593.972 124.763C639.835 181.797 667.277 254.248 667.277 333.101C667.277 411.955 639.835 484.406 593.972 541.44C548.109 484.406 520.667 411.955 520.667 333.101C520.668 254.248 548.109 181.797 593.972 124.763Z" fill={colors[1]} />
            </svg>
        </div>
    );
};

export default ImageItem;
