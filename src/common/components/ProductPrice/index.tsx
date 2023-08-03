import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductPriceProps {
    fillColor1?: string;
    fillColor2?: string;
    image?: string;
    price?: number;
    title?: string;
    description?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
    fillColor1 = 'fill-light-violet',
    fillColor2 = 'fill-blue-300',
    image,
    price,
    title,
    description
}) => {
    return (
        <div className="relative">
            <div className='bg-cold-white w-screen'>
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <svg className="pt-16" width="493" height="634" viewBox="0 0 493 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <image id="image0_685_5667" xlinkHref={image.src}></image>
                            <mask id="mask0_685_5667" maskUnits="userSpaceOnUse" x="0" y="0" width="493" height="494">
                                <circle cx="246.5" cy="247.498" r="246.5" fill="#D9D9D9" />
                            </mask>

                            <g mask="url(#mask0_685_5667)">
                                <mask id="mask1_685_5667" maskUnits="userSpaceOnUse" x="0" y="0" width="493" height="494">
                                    <circle cx="246.5" cy="247.498" r="246.5" fill="#D9D9D9" />
                                </mask>
                                <rect y="172.562" width="493" height="321.436" fill="url(#paint0_linear_685_5667)" />
                            </g>
                            <path d="M238.418 633.999C102.28 633.999 5.02603e-05 634 5.02603e-05 634C5.62111e-05 497.867 110.362 387.509 246.5 387.509C382.638 387.509 493 497.867 493 634C493 634 374.556 633.999 238.418 633.999Z" fill="#C8C3FF" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M91.7536 441.712C133.986 475.64 187.634 495.941 246.023 495.941C304.413 495.941 358.06 475.64 400.293 441.712C358.06 407.784 304.413 387.483 246.023 387.483C187.634 387.483 133.986 407.784 91.7536 441.712Z" fill="#B0EFFF" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_685_5667" transform="scale(0.000833333 0.00125)" />
                                </pattern>
                                <linearGradient id="paint0_linear_685_5667" x1="246.5" y1="172.562" x2="246.5" y2="493.998" gradientUnits="userSpaceOnUse">
                                    <stop stop-opacity="0" />
                                    <stop offset="1" />
                                    <stop offset="1" />
                                </linearGradient>

                            </defs>
                        </svg>
                        <div className='lg:w-[442px] mx-auto'>
                            <h3 className='text-2xl font-light mb-8'>{title}</h3>
                            <div className='text-3xl text-black font-normal mb-6'>
                                <p className=''>A partir de</p>
                                <span className='text-original-red text-6xl font-semibold'>R$ {price}</span>
                                <p>por mês, tá bom pra voce?</p>
                            </div>
                            <span className='font-ubuntu text-black text-base font-light'>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice;