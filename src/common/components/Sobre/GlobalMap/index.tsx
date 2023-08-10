import React from "react";
import Button from "../../Buttons";
import CountUp from "react-countup";
import Image from "next/image";
import mapImg from "./images/map.png"

const GlobalMap = () => {
  return (
    <section>
        <div className="flex items-center justify-end pt-56">
            <div className="w-2/3">
                <div className='pr-6 lg:w-[600px] container mx-auto'>
                    <h2 className='text-3xl text-black font-light'>Global:</h2>
                    <h2 className='text-5xl text-black mb-8 font-bold'><CountUp end={45} duration={5} /> países atendidos</h2>
                    <p className='text-lg mb-6 font-light'>A Edenred é líder mundial em soluções de benefícios, mobilidade e pagamentos corporativos.</p>
                    <Button type={'learnMore'} href='/'>Conheça a Edenred</Button>
                </div>
            </div>
            <div className="">
                <Image className="float-right" src={mapImg} />

            </div>
        </div>
    </section>
    
  );
};

export default GlobalMap;
