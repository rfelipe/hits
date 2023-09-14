import React, { useState } from 'react';
import { Intro } from '../../../../../types';
import Button from '../../../Buttons';

interface IntroProps {
    intro: Intro[];
}

const IntroSection: React.FC<IntroProps> = ({ intro }) => {
    const [inputValue, setInputValue] = useState('');

    const Anchor = () => {
        const form = document.querySelector("#form-request-budget");
        if (form) {
          form.scrollIntoView({
            behavior: "smooth",
          });
        }
      };
    return (
        <div className='text-center'>
            {intro.map((i, index) => (
                <div key={index} className="relative pb-24 md:pb-10">
                    <div className='absolute'>
                        <svg
                            className="absolute md:top-0 md:left-0 right-0 bottom-0 h-[335px] md:h-[600px] -top-[16px] -left-[150px] md:w-screen"
                            viewBox="0 0 1475 666"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <ellipse cx="719.185" cy="332.897" rx="333.287" ry="332.897" className="fill-cold-white" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d={`M199.326 665.794C383.364 665.757 532.544 516.728 532.544 332.897C532.544 149.066 383.364 0.0370626 199.326 2.41304e-06C199.316 5.26992e-07 199.307 3.52731e-06 199.298 2.41304e-06C199.284 8.04361e-07 199.271 0 199.257 0C199.244 0 199.23 8.04361e-07 199.217 2.41304e-06L-439 2.41304e-06L-439 666L199.326 666V665.794Z`}
                                fill={`${i.colors[0]}`}
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d={`M459.223 541.24C413.348 484.205 385.898 411.754 385.898 332.899C385.898 254.045 413.347 181.594 459.222 124.56C505.097 181.595 532.547 254.046 532.547 332.9C532.547 411.755 505.098 484.205 459.223 541.24Z`}
                                fill={`${i.colors[1]}`}
                            />
                        </svg>
                    </div>
                    <div className='relative z-10 md:pt-20 px-6 md:px-0'>
                        <span className={`text-base py-2 px-4 rounded-full inline-block`} style={{'backgroundColor': `${i.colors[0]}`}} aria-label={i.tag}>{i.tag}</span>
                        <h1 className='text-lg font-bold text-original-red my-4' title={i.label}>{i.label}</h1>
                        <h2 className='text-3xl md:text-6xl font-light lg:w-7/12 mx-auto'>{i.title}</h2>
                        <p className='text-base text-grey md:text-black md:text-lg font-bold lg:w-1/4 my-6 mx-auto font-ubuntu'>{i.text}</p>

                        {i.showInput && (
                            <div className='py-2 relative md:w-[26rem] w-[19rem] mx-auto'>
                                <input
                                    type='email'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder='Insira seu e-mail e baixe o material para saber mais'
                                    className='border border-black rounded-full px-6 py-2 font-light text-sm bg-transparent w-full h-12 placeholder:text-black focus:border-black focus:ring-black font-ubuntu focus:ring-0'
                                />
                                <button type='submit' className='w-16 h-16 bg-original-red rounded-full absolute right-0 top-0 hover:bg-black flex items-center justify-center'>
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1579 1.67622L23.2956 12.4209L15.1579 23.1656C14.9033 23.5016 14.9637 23.9853 15.2918 24.2457C15.6207 24.506 16.0932 24.4447 16.3477 24.1087L24.8424 12.8923C24.9475 12.7533 25 12.5873 25 12.4209C25 12.2545 24.9475 12.0881 24.8424 11.9495L16.3477 0.733496C16.0932 0.397489 15.6207 0.335783 15.2918 0.596548C14.9633 0.856914 14.9029 1.34062 15.1579 1.67662L15.1579 1.67622Z" fill="white" stroke="white" strokeWidth="0.5" />
                                        <rect y="11.4222" width="24" height="1.99766" rx="0.998831" fill="white" />
                                    </svg>
                                </button>
                                <p className='text-grey md:text-black text-xs font-ubuntu lg:w-56 mx-auto mt-4 font-normal'>Ao continuar, você concorda com a <a className='underline cursor-pointer font-normal font-ubuntu'>Política de Privacidade</a> da Edenred Hits</p>
                            </div>
                        )}

                        {!i.showInput && (
                            <div onClick={Anchor} className="button bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border cursor-pointer font-normal inline-flex items-center lg:justify-between justify-center max-h-12 max-w-32">
                                <a className="flex items-center gap-3">{i.textInput}</a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IntroSection;
