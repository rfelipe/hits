import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Faq } from '../../../../../types';

interface FaqProps {
    faqs: Faq[];
}

const FaqSection: React.FC<FaqProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); 
    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="py-16 md:py-32">
            <div className=''>
                {faqs.map((faq, index) => (
                    <><div className='relative'>
                        <svg className='absolute h-[500px] md:h-auto md:w-screen -ml-80 md:-ml-0' width="1440" height="842" viewBox="0 0 1440 842" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="103" y="0.327148" width="1870" height="841.673" rx="420.836" fill="#F1F7FF" />
                            <ellipse cx="-129" cy="420.836" rx="421" ry="420.836" transform="rotate(-180 -129 420.836)" fill={`${faq.colors[0]}`} />
                            <path fillRule="evenodd" clipRule="evenodd" d="M199.422 156.65C257.37 228.751 292.043 320.341 292.043 420.026C292.043 519.711 257.37 611.301 199.422 683.402C141.474 611.301 106.801 519.711 106.801 420.026C106.801 320.341 141.474 228.751 199.422 156.65Z" fill={`${faq.colors[1]}`} />
                        </svg>
                    </div><div className="z-10 relative px-6">
                            <h2 className="text-3xl md:text-6xl text-center font-light pt-12 md:pt-32 mb-6">Perguntas frequentes</h2>
                            <p className="hidden md:block text-lg font-ubuntu text-end w-full lg:w-[808px] mb-16 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus, elit tellus porttitor est, quis porta nunc orci quis massa. </p>
                            <div className='w-full lg:w-[598px] mx-auto'>
                                {faq.items.map((item, index) => (
                                    <div key={index} className='mb-8'>
                                        <div className='border border-black pl-6 rounded-full h-12 mb-3'
                                            onClick={() => toggleAccordion(index)}>
                                            <div className='flex justify-between items-center'>
                                                <h3>{item.question}</h3>
                                                <button className='w-10 h-10 bg-original-red rounded-full flex justify-center items-center mt-[3px] mr-[3px]'>
                                                    <AnimatePresence initial={false} mode="wait">
                                                        <motion.div
                                                            className=' text-white text-3xl font-ubuntu '
                                                            key={activeIndex}
                                                            initial={{
                                                                rotate: activeIndex === index ? -90 : 90,
                                                            }}
                                                            animate={{
                                                                rotate: 0,
                                                                transition: {
                                                                    type: "tween",
                                                                    duration: 0.3,
                                                                    ease: "circOut",
                                                                },
                                                            }}
                                                            exit={{
                                                                rotate: activeIndex === index ? -90 : 90,
                                                                transition: {
                                                                    type: "tween",
                                                                    duration: 0.3,
                                                                    ease: "circIn",
                                                                },
                                                            }}
                                                        >
                                                            {activeIndex === index ? '-' : '+'}
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </button>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <motion.div
                                                    key={index}
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: 'auto',
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        type: 'tween',
                                                        duration: 0.4,
                                                    }}
                                                >
                                                    <p className="pl-6">{item.answer}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div></>
                ))}
            </div>
        </div>
    )
}

export default FaqSection;