import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Note, Gas, Computer, Construction, Coffee, Mail, CarMarket } from '../../../icons';
import { Carousel } from '../../../../../types';

import bikeItau from '../../../../../static/images/bike-itau.png';
import emoving from '../../../../../static/images/emoving.png';
import supermercado from '../../../../../static/images/supermercado.jpg';
import graficas from '../../../../../static/images/graficas.jpg';
import viagens from '../../../../../static/images/viagens.jpg';
import novenove from '../../../../../static/images/99.png';
import kdOficina from '../../../../../static/images/kd-oficina.png';
import nove from '../../../../../static/images/parceiros/logo-992.png';
import uber from '../../../../../static/images/parceiros/logo-uber2.png';
import BikeItau from '../../../../../static/images/parceiros/bike-itau2.png';
import CarBee from '../../../../../static/images/parceiros/carbee2.png';
import Emoving from '../../../../../static/images/parceiros/e-moving2.png';
import EZvolt from '../../../../../static/images/parceiros/ezvolt2.png';
import Fretadao from '../../../../../static/images/parceiros/fretadao2.png';
import Tembici from '../../../../../static/images/parceiros/tembici2.png';


import Image from 'next/image';


const typeIcons = {
    note: <Note />,
    gas: <Gas />,
    computer: <Computer />,
    construction: <Construction />,
    coffee: <Coffee />,
    mail: <Mail />,
    carmarket: <CarMarket />,
    kdOficina: <Image src={kdOficina} layout='fixed' alt='KD Minha Oficina'/>,
    novenove: <Image src={novenove} layout='fixed' alt='99'/>,
    bikeItau: <Image src={bikeItau} layout='fixed' alt='Bike Itau'/>,
    emoving: <Image src={emoving} layout='fixed' alt='E-moving'/>,
    supermercado: <Image src={supermercado} layout='fixed' height={48} width={48} alt='Supermercado'/>,
    graficas: <Image src={graficas} layout='fixed' height={48} width={48} alt='Graficas'/>, 
    viagens: <Image src={viagens} layout='fixed' height={48} width={48} alt='Viagens'/>,
    //parceiros
    uber: <Image height={50} width={50} src={uber} layout='fixed' alt='Uber'/>,
    nove: <Image src={nove} layout='fixed' height={50} width={50} alt='nove'/>,
    BikeItau: <Image src={BikeItau} layout='fixed' height={50} width={50} alt='BikeItau'/>,
    CarBee: <Image src={CarBee} layout='fixed' height={50} width={50} alt='CarBee'/>,
    Emoving: <Image src={Emoving} layout='fixed' height={50} width={50} alt='Emoving'/>,
    EZvolt: <Image src={EZvolt} layout='fixed' height={50} width={50} alt='EZvolt'/>,
    Fretadao: <Image src={Fretadao} layout='fixed' height={50} width={50} alt='Fretadao'/>,
    Tembici: <Image src={Tembici} layout='fixed' height={50} width={50} alt='Tembici'/>,
    

};

interface CarouselItems {
    title: String;
    items: Carousel[];
}

const CarouselSection: FC<CarouselItems> = ({ items, title }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: '10px',
        responsive: [
                        {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],
        prevArrow: (
            <div className=''>
                <button
                    className='top-full md:top-0 absolute left-1/4 md:-left-20 z-10'
                    onClick={handlePrev}
                >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="31.5" transform="rotate(-180 32 32)" fill="white" stroke="black" />
                        <path d="M28.8421 42.7574L20.7044 32.0001L28.8421 21.2428C29.0967 20.9064 29.0363 20.4222 28.7082 20.1615C28.3793 19.9008 27.9068 19.9622 27.6523 20.2986L19.1576 31.5282C19.0525 31.6673 19 31.8335 19 32.0001C19 32.1667 19.0525 32.3333 19.1576 32.472L27.6523 43.7012C27.9068 44.0376 28.3793 44.0994 28.7082 43.8383C29.0367 43.5777 29.0971 43.0934 28.8421 42.757L28.8421 42.7574Z" fill="black" stroke="black" strokeWidth="0.5" />
                        <rect x="44" y="33" width="24" height="2" rx="1" transform="rotate(-180 44 33)" fill="black" />
                    </svg>

                </button>
            </div>
        ),
        nextArrow: (
            <div>
                <button
                    className='top-full md:top-0 absolute right-1/4 md:-right-20 z-10'
                    onClick={handleNext}
                >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="31.5" fill="white" stroke="black" />
                        <path d="M35.1579 21.2426L43.2956 31.9999L35.1579 42.7572C34.9033 43.0936 34.9637 43.5778 35.2918 43.8385C35.6207 44.0992 36.0932 44.0378 36.3477 43.7014L44.8424 32.4718C44.9475 32.3327 45 32.1665 45 31.9999C45 31.8333 44.9475 31.6667 44.8424 31.528L36.3477 20.2988C36.0932 19.9624 35.6207 19.9006 35.2918 20.1617C34.9633 20.4223 34.9029 20.9066 35.1579 21.243L35.1579 21.2426Z" fill="black" stroke="black" strokeWidth="0.5" />
                        <rect x="20" y="31" width="24" height="2" rx="1" fill="black" />
                    </svg>

                </button>
            </div>
        ),
        beforeChange: (current: number, next: number) => setActiveIndex(next),
    };

    return (
        <div className='pt-14 md:pt-10 2xl:pt-20 container mx-auto'>
            <h2 className='text-3xl md:text-5xl text-center font-light mb-20 xl:w-2/3 xl:mx-auto'>{title}</h2>
            <div className='relative md:px-32'>
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='md:w-full md:h-full md:flex md:flex-col items-center justify-center relative'
                        >
                            <div className='flex items-center justify-center m-auto mb-8 flex-col w-28'>
                                <div className='mb-2'>{typeIcons[item.type]}</div>
                                <p className='text-grey md:text-black text-base font-light text-center font-ubuntu'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CarouselSection;