import React from "react";
import Image from "next/image";
import Button from "../../../components/Buttons"

import Img1 from './images/img1.png';
import Img2 from './images/img2.png';

const Duvida = () => {
    return (
        <section className="text-center m-auto mt-[128px] md:mb-[280px]">
            <h2 className="text-3xl font-bold">
                Na dúvida sobre o plano?
            </h2>
            <p className="mt-3 text-3xl ">
                Venha conhecer um poucos mais sobre os produtos Hits!
            </p>
            <div className="mt-24 flex justify-between">
                <div className="flex">
                    <div className="relative z-10 shrink-0" >
                        <Image alt="" src={Img1}  />
                    </div>
                    <div className="relative flex items-center justify-center bg-white w-[309px] h-[309px] rounded-[100%] ml-[-66px] z-0 ">                        
                        <div className="pl-6">
                            <span className="inline-flex justify-center bg-[#C8C3FF]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                            <p className="text-lg text-left max-w-[150px] mb-2">Quero controlar as despesas do negócio</p>
                            <Button type="red" href="/despesas">Saiba mais</Button>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="relative flex items-center justify-center bg-white w-[309px] h-[309px] rounded-[100%] mr-[-66px] z-0 ">
                        <div className="pr-6 text-right">
                            <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                            <p className="text-lg  max-w-[150px] mb-2">Quero controlar as despesas com combustível</p>
                            <Button type="red" href="/combustivel">Saiba mais</Button>
                        </div>
                    </div>
                    <Image alt="" src={Img2} className="relative z-0" />
                </div>
            </div>
        </section>
    );
};

export default Duvida;
