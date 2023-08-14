import React from "react";
import Button from "../../Buttons";
import CountUp from "react-countup";
import Image from "next/image";
import mapImg from "./images/map.png"

const GlobalMap = () => {
  return (
    <section>
        <div className="lg:flex items-center justify-end lg:pt-56 pt-11">
            <div className="lg:w-2/3">
                <div className='lg:pr-6 p-6 lg:w-[600px] container mx-auto'>
                    <h2 className='text-3xl text-black font-light'>Global:</h2>
                    <h2 className='lg:text-5xl text-3xl text-black mb-8 font-bold'><CountUp end={45} duration={5} /> países atendidos</h2>
                    <p className='text-lg mb-6 font-light'>A Edenred é líder mundial em soluções de benefícios, mobilidade e pagamentos corporativos.</p>
                </div>
            </div>
            <div className="mt-12">
                <Image src={mapImg} />
            </div>
        </div>
    </section>
    
  );
};

export default GlobalMap;
