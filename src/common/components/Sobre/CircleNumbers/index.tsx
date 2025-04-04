import React from "react";
import Image from "next/image";
import mobileHand from "./images/mobile-hand.svg"
import clock from "./images/clock.svg"
import user from "./images/user.svg"
import edit from "./images/edit.svg"
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";





const CircleNumbers = () => {
  return (
    <section>
        <div className="lg:flex items-center justify-end relative lg:pb-56 pb-12">
            <div className="lg:w-1/2 lg:mr-auto lg:mt-40 mt-12">
                <div className='p-6 lg:w-[470px] container mx-auto'>
                    <p className='text-lg mb-6 font-light'>A Edenred é uma marca global e digital de serviços e meios de pagamento que atua como companheira de todas as horas para trabalhadores e empresas.</p>
                    <p className='text-lg mb-6 font-light'>Líder em seu segmento, conecta <strong>60 milhões</strong> de usuários, <strong>2 milhões</strong> de estabelecimentos e aproximadamente <strong>1 milhão</strong> de empresas-clientes, em <strong>45 países</strong>.</p>
                </div>
            </div>
            <div className="lg:hidden max-w-[90%] ml-auto mr-auto ">
                <Swiper>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={clock} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={2} duration={3}/> milhões</p>
                            <p className="text-sm">de estabelecimentos</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={mobileHand} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={60} duration={5}/> milhões</p>
                            <p className="text-sm">de usuários</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={user} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={1} duration={3}/> milhão</p>
                            <p className="text-sm">de empresas clientes</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={edit} width={48} height={48}/>
                            <p className="text-2xl"><CountUp end={45} duration={3}/> países</p>
                            <p className="text-sm text-center">que a Edenred<br/> está presente</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
                <svg className="float-right absolute top-0 right-0 max-xl:w-[690px] " width="809" height="640" viewBox="0 0 809 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="480" cy="480" r="160" fill="#F1F7FF"/>
                    <circle cx="160" cy="480" r="160" fill="#F1F7FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M729.64 320L1305 320L1305 6.10352e-05L729.74 1.07443e-05C729.706 1.07414e-05 729.673 1.07385e-05 729.64 1.07356e-05C641.274 -2.75072e-05 569.64 71.6344 569.64 160C569.64 248.365 641.274 320 729.64 320Z" fill="#F72717"/>
                    <circle cx="729.64" cy="160" r="160" transform="rotate(-180 729.64 160)" fill="#F72717"/>
                    <circle cx="160" cy="160" r="160" fill="#F1F7FF"/>
                    <circle cx="480" cy="160" r="160" fill="#F1F7FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M605.2 260.134C627.223 232.722 640.4 197.9 640.4 160C640.4 122.101 627.223 87.2789 605.2 59.8663C583.177 87.2789 570 122.101 570 160C570 197.9 583.177 232.722 605.2 260.134Z" fill="#B0EFFF"/>
                </svg>
                <div className="">
                    <div className=" float-right absolute top-[105px] right-[580px] max-xl:top-[130px] max-xl:right-[488px]">
                        <div className="flex items-center flex-col">
                            <Image src={mobileHand} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={60} duration={5}/> milhões</p>
                            <p className="text-sm">de usuários</p>
                        </div>
                    </div>
                    <div className=" float-right absolute top-[105px] right-[270px] max-xl:top-[130px] max-xl:right-[218px]">
                        <div className="flex items-center flex-col">
                            <Image src={clock} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={2} duration={3}/> milhões</p>
                            <p className="text-sm">de estabelecimentos</p>
                        </div>
                    </div>
                    <div className=" float-right absolute top-[415px] right-[585px] max-xl:top-[390x] max-xl:right-[488px]">
                        <div className="flex items-center flex-col">
                            <Image src={user} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={1} duration={3}/> milhão</p>
                            <p className="text-sm">de empresas clientes</p>
                        </div>
                    </div>
                    <div className=" float-right absolute top-[415px] right-[265px] max-xl:top-[390px] max-xl:right-[218px]">
                        <div className="flex items-center flex-col">
                            <Image src={edit} width={48} height={48}/>
                            <p className="text-2xl"><CountUp end={45} duration={3}/> países</p>
                            <p className="text-sm text-center">que a Edenred<br/> está presente</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex items-center justify-end lg:pt-32 relative">
            <div className="lg:w-1/2 hidden lg:block">
                <svg className="float-left absolute top-0 left-0 max-xl:w-[690px]" width="809" height="640" viewBox="0 0 809 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="329" cy="480" r="160" transform="rotate(-180 329 480)" fill="#F1F7FF"/>
                    <circle cx="649" cy="480" r="160" transform="rotate(-180 649 480)" fill="#F1F7FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.3599 0.000100599L-496 0L-496 320L79.2602 320C79.2935 320 79.3265 320 79.3598 320C167.726 320 239.36 248.366 239.36 160C239.36 71.6346 167.726 0.000161118 79.3599 0.000100599Z" fill="#F72717"/>
                    <circle cx="79.3603" cy="160" r="160" fill="#F72717"/>
                    <circle cx="649" cy="160" r="160" transform="rotate(-180 649 160)" fill="#F1F7FF"/>
                    <circle cx="329" cy="160" r="160" transform="rotate(-180 329 160)" fill="#F1F7FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M203.8 59.8658C181.777 87.2783 168.6 122.1 168.6 160C168.6 197.899 181.777 232.721 203.8 260.134C225.823 232.721 239 197.899 239 160C239 122.1 225.823 87.2783 203.8 59.8658Z" fill="#B0EFFF"/>
                </svg>
                <div className=" float-left absolute top-[105px] left-[270px] max-xl:top-[130px] max-xl:left-[228px]">
                    <div className="flex items-center flex-col">
                        <Image src={clock} width={48} height={48}/>
                        <p className="text-2xl">+ <CountUp end={130} duration={5}/> mil</p>
                        <p className="text-sm text-center">empresas clientes</p>
                    </div>
                </div>
                <div className=" float-left absolute top-[105px] left-[570px] max-xl:top-[130px] max-xl:left-[475px]">
                    <div className="flex items-center flex-col">
                        <Image src={mobileHand} width={48} height={48}/>
                        <p className="text-2xl">+ <CountUp end={8.3} duration={5} decimal="," decimals={1}/> milhões</p>
                        <p className="text-sm text-center">de empregados<br/> beneficiados</p>
                    </div>
                </div>
                <div className=" float-left absolute top-[415px] left-[270px] max-xl:top-[395px] max-xl:left-[228px]">
                    <div className="flex items-center flex-col">
                        <Image src={edit} width={48} height={48}/>
                        <p className="text-2xl">+ <CountUp end={500} duration={5}/> mil</p>
                        <p className="text-sm text-center">estabelecimentos<br/>parceiros</p>
                    </div>
                </div>
                <div className=" float-left absolute top-[415px] left-[580px] max-xl:top-[395px] max-xl:left-[485px]">
                    <div className="flex items-center flex-col">
                        <Image src={user} width={48} height={48}/>
                        <p className="text-2xl">Brasil</p>
                        <p className="text-sm text-center">Presente em todos os<br/>estados brasileitos</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className='p-6 lg:w-[470px] container mx-auto'>
                    <p className='text-lg mb-6 font-light'>No Brasil, contamos com mais de 130 mil empresas clientes, 8,3 milhões de empregados beneficiados e 500 mil comerciantes credenciados.</p>
                    <p className='text-lg mb-6 font-light'>No mercado nacional, trabalhamos com três linhas de negócios:.</p>
                    <ul className="lg:ml-10 ml-4">
                        <li className="before:inline-block before:-ml-4 before:text-light-red before:font-bold before:w-4 before:content-['\2022'] text-base mt-3 font-medium"><strong>Benefícios ao trabalhador</strong>, com a marca Ticket;</li>
                        <li className="before:inline-block before:-ml-4 before:text-light-red before:font-bold before:w-4 before:content-['\2022'] text-base mt-3 font-medium"><strong>Mobilidade</strong>, com as marcas Ticket Log e Repom;</li>
                        <li className="before:inline-block before:-ml-4 before:text-light-red before:font-bold before:w-4 before:content-['\2022'] text-base mt-3 font-medium"><strong>Soluções de Pagamento e Novos Mercados</strong>, com  Edenred Pay e Punto.</li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden max-w-[90%] ml-auto mr-auto mt-12">
                <Swiper>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={clock} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={130} duration={5}/> mil</p>
                            <p className="text-sm text-center">empresas clientes</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={mobileHand} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={8.3} duration={5} decimal="," decimals={1}/> milhões</p>
                            <p className="text-sm text-center">de empregados <br/>beneficiados</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={edit} width={48} height={48}/>
                            <p className="text-2xl">+<CountUp end={500} duration={5}/> mil</p>
                            <p className="text-sm text-center">estabelecimentos<br/>parceiros</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="justify-center items-center flex">
                        <div className="bg-cold-white w-[227px] h-[227px] py-10 px-5 rounded-full justify-center flex items-center flex-col ">
                            <Image src={user} width={48} height={48}/>
                            <p className="text-2xl">Brasil</p>
                            <p className="text-sm text-center">Presente em todos os<br/>estados brasileitos</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    </section>
    
  );
};

export default CircleNumbers;
