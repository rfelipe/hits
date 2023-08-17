import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import { ProductProvider } from "../common/components/ProductContext";
import { productsData } from "../common/lib/dataProduct";
import { Phone, Clock, Note, Gas } from "../common/components/icons";
import Button from "../common/components/Buttons";
import Img2 from '../static/images/home/img1.png';
import Img1 from '../static/images/home/img2.png';
import Image from "next/image";
import Hits1Img1 from '../static/images/img1_hits1.png';
import Hits2Img2 from '../static/images/img1_hits2.png';
import imgNovidades1 from '../static/images/home/novidades1.png'
import imgNovidades2 from '../static/images/home/novidades2.png'
import imgNovidades3 from '../static/images/home/novidades3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Swiper, SwiperSlide } from "swiper/react";



const Home: NextPage = () => {


    return (
        <MainTemplate>
            <Head>
                <title>Ticket Log</title>
                <meta name="description" content=""></meta>
            </Head>
            <>
                <div className="pt-32">
                    <h2 className="text-5xl text-black font-light text-center mb-8">Quem conta com a gente acelera seu sucesso</h2>
                    <p className="text-grey md:text-black text-base md:text-lg font-light font-ubuntu mb-8 w-[808px] mx-auto text-center">
                        Ajudamos você a manter o controle dos gastos
                        usando um aplicativo super simples e eficiente.
                    </p>
                    <div className="flex justify-between">
                        <div className="relative flex">
                            <svg width="704" height="500" viewBox="0 0 704 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                                

                                <image
                                    xlinkHref={Hits1Img1.src}
                                    className={`absolute top-0 opacity-100 transition-opacity duration-1000 '
                                            }`}
                                ></image>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0H-1779V500H64C202.071 500 314 388.071 314 250C314 111.929 202.071 0 64 0Z" fill="#C8C3FF"/>
                                <path fill-rule="evenodd" clipRule="evenodd" d="M259 406.459C293.411 363.627 314 309.218 314 250C314 190.782 293.411 136.373 259 93.541C224.589 136.373 204 190.782 204 250C204 309.218 224.589 363.627 259 406.459Z" fill="#B0EFFF" />

                            </svg>
                        </div>
                        <div className="relative">
                            <svg width="704" height="500" viewBox="0 0 704 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M640 500C501.929 500 390 388.071 390 250C390 111.929 501.929 0 640 0H890V250V500H640Z" fill="#DCF691" />
                                <image
                                    xlinkHref={Hits2Img2.src}
                                    className={`absolute top-0 opacity-100 transition-opacity duration-1000 '
                                            }`}
                                ></image>
                                <path fill-rule="evenodd" clipRule="evenodd" d="M445 406.459C410.589 363.627 390 309.218 390 250C390 190.782 410.589 136.373 445 93.541C479.411 136.373 500 190.782 500 250C500 309.218 479.411 363.627 445 406.459Z" fill="#FED0C8" />

                            </svg>

                        </div>
                    </div>
                </div>
                <div className="pt-32"> {/* DONE MOBILE AND DESK */}
                    <h2 className="text-5xl text-black font-light text-center mb-8">Veja como é fácil</h2>
                    <p className="text-grey md:text-black text-base md:text-lg font-light font-ubuntu mb-8 w-[808px] mx-auto text-center">
                        Se você tem um <strong>comércio ou é atacadista, prestador de serviços, construtura ou pequena indústria</strong>, você precisa testar essa solução pra manter suas contas em dia, agilizar processos
                        e acelerar o crescimento do seu negócio.
                    </p>
                    <div className="pt-16">
                        <div className="lg:max-w-[90%] ml-auto mr-auto">
                        <Swiper slidesPerView={4} initialSlide={1}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 4,
                                }
                              }}
                        >
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[283px] h-[283px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Phone />
                                    </div>
                                    <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                    <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[283px] h-[283px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Gas />
                                    </div>
                                    <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                    <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[283px] h-[283px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Clock />
                                    </div>
                                    <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                    <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[283px] h-[283px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Note />
                                    </div>
                                    <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                    <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
                <div className="pt-32"> {/* DONE MOBILE AND DESK */}
                    <h2 className="text-5xl text-black font-light text-center mb-16">Veja as novidades</h2>
                    <div className="lg:max-w-[90%] ml-auto mr-auto mt-12">
                        <Swiper slidesPerView={3} initialSlide={2} spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    initialSlide: 0
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    initialSlide: 0
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    allowTouchMove: true,
                                    initialSlide: 1
                                }
                              }}
                        >
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[368px] h-[440px]">
                                    <div className="h-[220px] bg-grey rounded-t-3xl overflow-hidden"><Image src={imgNovidades1} alt=""/></div>
                                    <div className="h-[205px] bg-cold-white rounded-b-3xl p-10">
                                        <span className="font-ubuntu text-grey block mb-6">19 Jun 2023</span>
                                        <h3 className="text-black font-medium text-base mb-4">Cartão de combustível: o que é, como funciona  e qual o melhor?</h3>
                                        <div className="-ml-[20px]">
                                            <Button type="readMore" href="/">Leia mais</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[368px] h-[440px]">
                                    <div className="h-[220px] bg-grey rounded-t-3xl overflow-hidden"><Image src={imgNovidades2} alt=""/></div>
                                    <div className="h-[205px] bg-cold-white rounded-b-3xl p-10">
                                        <span className="font-ubuntu text-grey block mb-6">19 Jun 2023</span>
                                        <h3 className="text-black font-medium text-base mb-4">Cartão de combustível: o que é, como funciona  e qual o melhor?</h3>
                                        <div className="-ml-[20px]">
                                            <Button type="readMore" href="/">Leia mais</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[368px] h-[440px]">
                                    <div className="h-[220px] bg-grey rounded-t-3xl overflow-hidden"><Image className="w-full" src={imgNovidades3} alt=""/></div>
                                    <div className="h-[205px] bg-cold-white rounded-b-3xl p-10">
                                        <span className="font-ubuntu text-grey block mb-6">19 Jun 2023</span>
                                        <h3 className="text-black font-medium text-base mb-4">Cartão de combustível: o que é, como funciona  e qual o melhor?</h3>
                                        <div className="-ml-[20px]">
                                            <Button type="readMore" href="/">Leia mais</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Button type="learnMore" href="/">Veja todas as notícias</Button>
                    </div>
                </div>
                <div className="pt-32">
                    <div className="flex">
                        <div className="flex">
                            <div className="relative z-10 shrink-0" >
                                <Image alt="" src={Img1} />
                            </div>
                            <div className="relative flex items-center justify-center bg-cold-white w-[309px] h-[309px] rounded-[100%] ml-[-66px] z-0 ">
                                <div className="pl-6">
                                    <span className="inline-flex justify-center bg-[#C8C3FF]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                                    <p className="text-lg text-left max-w-[150px] mb-2">Quero controlar as despesas do negócio</p>
                                    <Button type="red" href="/despesas">Eu quero</Button>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-black text-6xl ml-auto font-light w-[500px]">Vem pro lado sucesso da força</h2>
                    </div>
                    <div className="flex justify-end">
                        <div className="relative flex items-center justify-center bg-cold-white w-[309px] h-[309px] rounded-[100%] mr-[-66px] z-0 ">
                            <div className="pr-6 text-right">
                                <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                                <p className="text-lg  max-w-[150px] mb-2">Quero controlar as despesas com combustível</p>
                                <Button type="red" href="/combustivel">Eu quero</Button>
                            </div>
                        </div>
                        <Image alt="" src={Img2} className="relative z-0" />
                    </div>
                </div>
            </>
        </MainTemplate>
    );
};

export default Home;
