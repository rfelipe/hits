import React from "react";
import Image from "next/image";
import Button from "../../../components/Buttons"

import Img1 from './images/img1-2.png';
import Img2 from './images/img2-2.png';
import ImgBg1 from './images/bg-p1.png';
import ImgBg2 from './images/bg-p.png';

const Duvida = () => {
    return (
        <section className="text-center m-auto mt-20">
            <h2 className="text-3xl font-bold">
                Ainda em dúvida de qual Hit é o ideal para você?
            </h2>
            <p className="mt-3 text-3xl ">
                Venha saber mais sobre cada um!
            </p>
            <div className="mt-20 flex justify-between flex-wrap min-[1252px]:flex-nowrap">
                <div className="flex">
                    <div className="relative z-10 shrink-0 hidden min-[1252px]:block -left-[80px]" >
                        <Image alt="" src={Img1}  />
                    </div>
                    <div className="relative z-10 shrink-0 min-[1252px]:hidden" >
                        <Image alt="" src={ImgBg1}  />
                    </div>
                    <div className="absolute z-10 left-[99px]     min-[1252px]:relative flex items-center justify-center min-[1252px]:bg-white w-[309px] h-[309px] rounded-[100%] ml-[-66px] min-[1252px]:ml-[-248px] min-[1252px]:z-0 ">                        
                        <div className="pl-6">
                            <span className="inline-flex justify-center bg-[#C8C3FF]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                            <p className="text-lg text-center min-[1252px]:text-left max-w-[150px] mb-2">Quero controlar as despesas do negócio</p>
                            <Button type="red" href="/despesas">Saiba mais</Button>
                        </div>
                    </div>
                </div>
                <div className="flex ml-auto">
                    <div className="absolute z-10   min-[1252px]:relative flex items-center justify-center min-[1252px]:bg-white w-[309px] h-[309px] rounded-[100%] mr-[274px] min-[1252px]:z-0 ">
                        <div className="pr-6">
                            <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                            <p className="text-lg text-center min-[1252px]:text-end  max-w-[150px] mb-2">Quero controlar as despesas com combustível</p>
                            <Button type="red" href="/combustivel">Saiba mais</Button>
                        </div>
                    </div>
                    <div className="min-[1252px]:block hidden absolute -right-[80px]">
                        <Image alt="" src={Img2} className="relative z-0" />
                    </div>
                    <div className="min-[1252px]:hidden">
                        <Image alt="" src={ImgBg2} className="relative z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Duvida;
