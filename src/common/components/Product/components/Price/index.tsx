import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../../../Buttons';
import { Price } from '../../../../../types';
import cart_red from "../../../Header/images/shopping-cart-red.png";
import cart from "../../../Header/images/shopping-cart.png";


interface PricesProps {
    prices: Price[];
}

const PriceSection: React.FC<PricesProps> = ({ prices }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative pt-24 md:pt-10">
            {prices.map((price: any, index) => (
                <div className='bg-cold-white w-screen pt-16 px-6 md:pt-0' key={index}>
                    <div className="container mx-auto lg:max-w-7xl">
                        <div className="flex flex-col-reverse items-center md:flex-row">
                            <>
                                <svg className="pt-16 w-full h-full md:w-auto md:h-auto" width="500" height="634" viewBox="0 0 500 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="maskPrice" maskUnits="userSpaceOnUse" x="0" y="0" width="493" height="494">
                                        <circle cx="246.5" cy="247.498" r="246.5" fill={price.colors[0]} />
                                    </mask>
                                    {price.images.map((image: any, imageIndex: number) => (
                                        <>
                                            <image
                                                xlinkHref={image.src}
                                                className={`transition-opacity duration-1000 w-[493px] h-[494px] ${imageIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            ></image>
                                        </>
                                    ))}
                                    <g mask="url(#maskPrice)">
                                        <mask id="maskPrice" maskUnits="userSpaceOnUse" x="0" y="0" width="493" height="494">
                                            <circle cx="246.5" cy="247.498" r="246.5" fill={`${price.colors[1]}`} />
                                        </mask>
                                        <rect y="172.562" width="493" height="321.436" fill="url(#paintPrice)" />
                                    </g>
                                    <path d="M238.418 633.999C102.28 633.999 5.02603e-05 634 5.02603e-05 634C5.62111e-05 497.867 110.362 387.509 246.5 387.509C382.638 387.509 493 497.867 493 634C493 634 374.556 633.999 238.418 633.999Z" fill={`${price.colors[0]}`} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M91.7536 441.712C133.986 475.64 187.634 495.941 246.023 495.941C304.413 495.941 358.06 475.64 400.293 441.712C358.06 407.784 304.413 387.483 246.023 387.483C187.634 387.483 133.986 407.784 91.7536 441.712Z" fill={`${price.colors[1]}`} />
                                    <defs>
                                        <linearGradient id="paintPrice" x1="246.5" y1="172.562" x2="246.5" y2="493.998" gradientUnits="userSpaceOnUse">
                                            <stop stopOpacity="0" />
                                            <stop offset="1" />
                                            <stop offset="1" />
                                        </linearGradient>

                                    </defs>
                                </svg>
                            </>
                            <div className='lg:w-[442px] mx-auto'>
                                <h3 className='text-2xl font-light mb-8'>{price.title}</h3>
                                <div className='text-3xl text-black font-normal mb-6'>
                                    <p className=''>Por menos de</p>
                                    <span className='text-original-red text-6xl font-semibold'>R$ {price.price}</span>
                                    <p>ao dia do mês, tá bom pra você?</p>
                                </div>
                                <span className='font-ubuntu text-grey md:text-black text-base font-light mb-6 block'>{price.text}</span>
                                <a className="button group border-original-red text-original-red hover:bg-original-red hover:border-original-red hover:text-white py-3 px-10 rounded-full border cursor-pointer font-normal inline-flex items-center lg:justify-between justify-center max-h-12 max-w-32" 
                                href={price.urlInput} target='_blank' rel='noreferrer' >
                                    <a target="_blank" className="flex items-center gap-1 transition-all duration-500">
                                        <div className='group-hover:hidden'>
                                            <Image  src={cart_red} height={25} width={25} alt=''/>
                                        </div>
                                        <div className='group-hover:block hidden'>
                                            <Image  src={cart} height={25} width={25} alt=''/>
                                        </div>Contrate agora
                                    </a>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PriceSection;