import Button from '../../../Buttons';
import { WantMoreSuccess } from '../../../../../types';
import { useEffect, useState } from 'react';

interface SuccessProps {
    success: WantMoreSuccess[];
}

const WantMoreSuccessSection: React.FC<SuccessProps> = ({ success }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='py-16 md:pt-32'>
            {success.map((s, index) => (
                // eslint-disable-next-line react/jsx-key
                <div className='flex items-center flex-col-reverse md:flex-row md:justify-end'>
                    <div className='px-6 lg:w-[530px] container mx-auto text-center'>
                        <h2 className='text-3xl md:text-5xl text-black font-light mb-6 md:mb-8'>{s.title}</h2>
                        <p className='font-ubuntu md:text-base text-lg text-grey md:text-black  mb-6 font-light lg:w-[388px] pb-8'>{s.text}</p>
                        <div className='flex flex-col  justify-center items-center 2xl:items-start md:justify-normal 2xl:flex-row gap-3'>
                            <Button type="red" href="/">Teste grátis por 60 dias</Button>
                            <Button type="learnMore" href="/">Saiba mais</Button>
                        </div>
                    </div>
                    <div className='relative pb-8 md:pb-0'>
                        <svg width="704" height="500" viewBox="0 0 704 500" fill="none" xmlns="http://www.w3.org/2000/svg" className='pl-32 h-80 md:pl-0 lg:h-auto'>
                            <mask id="maskWantMoreSuccess" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
                                <circle cx="250" cy="250" r="250" fill="#D9D9D9" />
                            </mask>
                            {s.images.map((image: any, imageIndex: number) => (
                                <>
                                    <image
                                        xlinkHref={image.src}
                                        className={`absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ${imageIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    ></image>
                                </>
                            ))}
                            <g mask="url(#maskWantMoreSuccess)">
                                <mask id="mask1_579_4338" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
                                    <circle cx="250" cy="250" r="250" fill="#D9D9D9" />
                                </mask>
                                <rect y="174" width="500" height="326" fill="url(#paintWantMoreSuccess)" />
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M640 500C501.929 500 390 388.071 390 250C390 111.929 501.929 0 640 0H890V250V500H640Z" fill={`${s.colors[0]}`} />
                            <path fillRule="evenodd" clipRule="evenodd" d="M445 406.459C410.589 363.627 390 309.218 390 250C390 190.782 410.589 136.373 445 93.541C479.411 136.373 500 190.782 500 250C500 309.218 479.411 363.627 445 406.459Z" fill={`${s.colors[1]}`} />
                            <defs>
                                <linearGradient id="paintWantMoreSuccess" x1="250" y1="174" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                                    <stop stopOpacity="0" />
                                    <stop offset="1" />
                                    <stop offset="1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='absolute top-32 left-[35%] text-center md:top-72 w-48 md:left-32 items-end md:text-right'>
                            <span className={`text-base py-2 px-4 rounded-full inline-flex items-end`} style={{'backgroundColor': `${s.colors[0]}`}} aria-label={s.label}>{s.label}</span>
                            <p className='text-white text-2xl'>{s.textLabel}</p>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default WantMoreSuccessSection;