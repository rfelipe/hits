import type { NextPage } from "next";
import { useEffect, useState } from 'react';
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import { Phone, Clock, Note, Gas } from "../common/components/icons";
import Button from "../common/components/Buttons";
import Img2 from '../static/images/home/img1.png';
import Img1 from '../static/images/home/img2.png';
import Img3 from '../static/images/home/img3.png';
import Img4 from '../static/images/home/img4.png';
import Image from "next/image";
import Hits1Img1 from '../static/images/img1_hits1.png';
import Hits1Img1Mob from '../static/images/home/Group 47274.png';
import Hits2Img2Mob from '../static/images/home/Group 47246.png';
import Hits2Img2 from '../static/images/img1_hits2.png';
import imgNovidades1 from '../static/images/home/novidades1.png'
import imgNovidades2 from '../static/images/home/novidades2.png'
import imgNovidades3 from '../static/images/home/novidades3.png'
import bighits1 from '../static/images/home/bighit1.png'
import IconList from '../common/layouts/Planos/images/planos-list.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Logo from '../common/components/Header/images/edenred-logo.svg'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Home: NextPage = () => {
    const [bannerHits1, setbannerHits1] = useState(false);
    const [bannerHits2, setbannerHits2] = useState(false);


    return (
        <MainTemplate>
            <Head>
                <title>Ticket Log</title>
                <meta name="description" content=""></meta>
            </Head>
            <>
                {/* HITS 01 - Mobile*/} {bannerHits1 && (
                    <Fade left>
                        <div className="md:hidden px-10 py-6 fixed w-full h-screen top-0 z-20 bg-light-violet">
                            <div className="flex justify-between items-center">
                                <Image src={Logo} alt="Logo Edenred"></Image>
                                <button onClick={() => setbannerHits1(!bannerHits1)} className=" bg-white  text-black hover:bg-black hover:border-black w-[42px] h-[42px] rounded-full border">X</button>
                            </div>
                            <div className={`mt-20 text-left z-10`}>
                                <span className="inline-flex justify-center bg-white px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                                <p className='text-2xl'>Por menos de</p>
                                <span className=' text-6xl font-semibold'>R$ 1,50</span>
                                <p className="text-2xl mt-2">ao dia por mês, você pode:</p>
                                <ul className="mt-8 mb-8">
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Ter visibilidade e controle de todos os gastos.</p></li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Acompanhar e controlar as movimentações com relatórios.</p></li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Acabar com os reembolsos e adiantamentos.</p></li>
                                </ul>
                                <div className="mt-4 flex items-center">
                                    <Button type="red" href="/despesas">SAIBA MAIS</Button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                )}
                {/* HITS 02 - Mobile*/} {bannerHits2 && (
                    <Fade right>
                        <div className="md:hidden px-10 py-6 fixed w-full h-screen top-0 z-20 bg-light-olive">
                            <div className="flex justify-between items-center">
                                <Image src={Logo} alt="Logo Edenred"></Image>
                                <button onClick={() => setbannerHits2(!bannerHits2)} className=" bg-white  text-black hover:bg-black hover:border-black w-[42px] h-[42px] rounded-full border">X</button>
                            </div>
                            <div className={`mt-20 text-left z-10`}>
                                <span className="inline-flex justify-center bg-white px-4 py-2 rounded-full w-fit mb-2">Hit #02</span>
                                <p className='text-2xl'>Por menos de</p>
                                <span className=' text-6xl font-semibold'>R$ 1,50</span>
                                <p className="text-2xl mt-2">ao dia por mês, você pode:</p>
                                <ul className="mt-8 mb-8">
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Controlar todas as despesas dos veículos das empresas.</p></li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Pesquisar os postos com os melhores preços.</p></li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Escolher onde abastecer em mais de 21 mil postos parceiros.</p></li>
                                </ul>
                                <div className="mt-4 flex items-center">
                                    <Button type="red" href="/despesas">SAIBA MAIS</Button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                )}
                <div className="pt-14 md:pt-32">
                    <h2 className="text-5xl text-black font-light text-center md:max-w-4xl mx-auto mb-8">Descubra como gerenciar suas despesas diárias de forma eficaz!</h2>
                    <p className="text-grey md:text-black text-base md:text-lg font-light font-ubuntu mb-8 lg:w-[808px] mx-auto text-center">
                        Se você tem muito para conquistar, mas não tem tempo para perder, acelere seu sucesso com a Edenred Hits.
                    </p>
                    <div className="flex justify-between flex-wrap md:gap-5">
                        {/* HITS 01 */} {!bannerHits2 && (
                           <Slide left>
                            <div className="relative flex items-center w-[704px] h-[500px]">
                                <div className={`hidden md:block absolute  top-0 ${ bannerHits1  ? '-right-[533px]' : 'right-0'}  `}>
                                    <Image src={Hits1Img1} alt="" className=" top-0" width={500} height={500}></Image>
                                </div>
                                <div className="md:hidden absolute left-0 top-0">
                                    <Image src={Hits1Img1Mob} alt="" className=" top-0" width={400} height={400}></Image>
                                </div>

                                {bannerHits1 ? (
                                    <svg className="hidden md:block absolute z-10 left-0 top-0" width="846" height="500" viewBox="0 0 846 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M596 0H-1247V500H596C734.071 500 846 388.071 846 250C846 111.929 734.071 0 596 0Z" fill="#C8C3FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M791 406.459C825.411 363.627 846 309.218 846 250C846 190.782 825.411 136.373 791 93.541C756.589 136.373 736 190.782 736 250C736 309.218 756.589 363.627 791 406.459Z" fill="#B0EFFF"/>
                                    </svg>
                                ) : (
                                    <svg width="314" height="500" viewBox="0 0 314 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute z-10 left-0 top-0">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0H-1779V500H64C202.071 500 314 388.071 314 250C314 111.929 202.071 0 64 0Z" fill="#C8C3FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M259 406.459C293.411 363.627 314 309.218 314 250C314 190.782 293.411 136.373 259 93.541C224.589 136.373 204 190.782 204 250C204 309.218 224.589 363.627 259 406.459Z" fill="#B0EFFF"/>                               
                                    </svg>
                                )}

                                {bannerHits1 && (
                                    <div className={`hidden md:block md:pr-6 text-center md:text-left absolute max-md:left-24 max-md:bottom-20 md:right-16 z-10`}>
                                        <p className='text-2xl'>Por menos de</p>
                                        <span className=' text-6xl font-semibold'>R$ 1,50</span>
                                        <p className="text-2xl mt-2">ao dia por mês, você pode:</p>
                                        <ul className="mt-8 md:block hidden mb-8">
                                            <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Ter visibilidade e controle de todos os gastos.</li>
                                            <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Acompanhar e controlar as movimentações com relatórios.</li>
                                            <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Acabar com os reembolsos e adiantamentos.</li>
                                        </ul>
                                        <Button type="red" href="/despesas">SAIBA MAIS</Button>
                                    </div>
                                )}
                                <div className={`md:pr-6 text-center md:text-left absolute max-md:left-24 max-md:bottom-20  ${ bannerHits1  ? 'md:-right-[27rem]' : 'md:right-16'}`}>
                                    <span className="inline-flex justify-center bg-light-violet px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                                    <p className="text-white text-3xl max-w-[250px] mb-2">Quero controlar as despesas do negócio</p>
                                    {!bannerHits1 ? (
                                        <button onClick={() => setbannerHits1(!bannerHits1)} className="bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border" >Eu quero</button>
                                    ) : (
                                        <div>
                                            <button onClick={() => setbannerHits1(!bannerHits1)} className="hidden md:block absolute bg-original-red border-original-red text-white hover:bg-black hover:border-black w-[42px] h-[42px] rounded-full border -right-24">X</button>
                                            <button onClick={() => setbannerHits1(!bannerHits1)} className="md:hidden bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border" >Eu quero</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                           </Slide> 
                        )}
                        {/* HITS 02 */} {!bannerHits1 && (
                           <Slide right>
                            <div className="relative flex items-center ml-auto w-[704px] h-[500px]">
                                <div className={`hidden md:block absolute  top-0 ${ bannerHits2 ? '-left-[500px]' : 'left-0' }  `}>
                                    <Image src={Hits2Img2} alt="" className=" top-0" width={500} height={500}></Image>
                                </div>
                                <div className="md:hidden absolute right-0 top-0   ">
                                    <Image src={Hits2Img2Mob} alt="" className=" top-0" width={400} height={400}></Image>
                                </div>
                                {bannerHits2 ? (
                                    <svg className="hidden md:block absolute z-10 right-0 top-0" width="815" height="500" viewBox="0 0 815 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M250 500L2093 500V0L250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500Z" fill="#DCF691"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55 93.5407C20.5894 136.373 0 190.782 0 250C0 309.218 20.5894 363.627 55 406.459C89.4106 363.627 110 309.218 110 250C110 190.782 89.4106 136.373 55 93.5407Z" fill="#FED0C8"/>
                                    </svg>
                                ) : (
                                    <svg width="314" height="500" viewBox="0 0 314 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute z-10 right-0 top-0">
                                        <path fill-rule="evenodd" clipRule="evenodd" d="M250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0H500V250V500H250Z" fill="#DCF691"/>
                                        <path fill-rule="evenodd" clipRule="evenodd" d="M55 406.459C20.5894 363.627 0 309.218 0 250C0 190.782 20.5894 136.373 55 93.541C89.4106 136.373 110 190.782 110 250C110 309.218 89.4106 363.627 55 406.459Z" fill="#FED0C8"/>
                                    </svg>
                                )}

                                {bannerHits2 && (
                                    <div className={`hidden md:block md:pr-6 text-center md:text-left absolute max-md:right-24 max-md:bottom-20 md:right-16 z-10`}>
                                        <p className='text-2xl'>Por menos de</p>
                                        <span className=' text-6xl font-semibold'>R$ 1,00</span>
                                        <p className="text-2xl mt-2">ao dia por mês, você pode:</p>
                                        <ul className="mt-8 md:block hidden mb-8">
                                            <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Controlar todas as despesas dos veículos das empresas.</li>
                                            <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Pesquisar os postos com os melhores preços.</li>
                                            <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Escolher onde abastecer em mais de 21 mil postos parceiros.</li>
                                        </ul>
                                        <Button type="red" href="/combustivel">SAIBA MAIS</Button>
                                    </div>
                                )}        
                                
                                <div className={`pr-6 md:text-right text-center max-md:right-16 max-md:bottom-20  absolute ${ bannerHits2  ? 'md:-left-[27rem]' : 'md:left-16'}`}>
                                    <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #02</span>
                                    <p className="text-white text-3xl max-w-[250px] mb-2">Quero controlar as despesas com combustível</p>
                                    {!bannerHits2 ? (
                                        <button onClick={() => setbannerHits2(!bannerHits2)} className="bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border" >Eu quero</button>
                                    ) : (
                                        <div>
                                            <button onClick={() => setbannerHits2(!bannerHits2)} className="hidden md:block absolute bg-original-red border-original-red text-white hover:bg-black hover:border-black w-[42px] h-[42px] rounded-full border -left-16">X</button>
                                            <button onClick={() => setbannerHits2(!bannerHits2)} className="md:hidden mx-auto bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border" >Eu quero</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                           </Slide> 
                        )}
                    </div>
                </div>
                <div className="md:pt-32">
                    <h2 className="text-5xl text-black font-light text-center mb-8">Experimente a facilidade em primeira mão!</h2>
                    <p className="text-grey md:text-black text-base md:text-lg font-light font-ubuntu px-6 mb-8 lg:w-[808px] mx-auto text-center">
                        Se você tem um <strong>comércio ou é atacadista, prestador de serviços, construtora ou pequena indústria</strong>, você precisa testar essa solução pra manter suas contas em dia, agilizar processos e acelerar o crescimento do negócio
                    </p>
                    <div className="pt-7 md:pt-16">
                        <div className="lg:max-w-[90%] ml-auto mr-auto">
                        <Swiper slidesPerView={4} initialSlide={1} navigation
                            modules={[Navigation]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1240: {
                                    slidesPerView: 4,
                                }
                              }}
                        >
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[243px] h-[243px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Phone />
                                    </div>
                                    {/* <h3 className="text-black font-medium text-2xl mb-2">Controle</h3> */}
                                    <p className="w-[188px] text-center mx-auto">Aplicativo e plataforma para gestão sem custo adicional.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[243px] h-[243px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Gas />
                                    </div>
                                    {/* <h3 className="text-black font-medium text-2xl mb-2">Controle</h3> */}
                                    <p className="w-[188px] text-center mx-auto">Use onde precisar com uma ampla rede parceira.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[243px] h-[243px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Clock />
                                    </div>
                                    {/* <h3 className="text-black font-medium text-2xl mb-2">Controle</h3> */}
                                    <p className="w-[188px] text-center mx-auto">Tempo para focar no crescimento do seu negócio.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="w-[243px] h-[243px] border mr-6 rounded-full bg-cold-white flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Note />
                                    </div>
                                    {/* <h3 className="text-black font-medium text-2xl mb-2">Controle</h3> */}
                                    <p className="w-[188px] text-center mx-auto">Visibilidade e controle em todos os gastos.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
                <div className="pt-14 md:pt-32">
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
                        <Button type="learnMore" href="/">Confira todas as notícias</Button>
                    </div>
                </div>
                <div className="pt-14 md:pt-32 mb-14">
                    <div className="flex max-xl:flex-col-reverse max-xl:flex-wrap mb-10">
                        <div className="flex">
                            <div className="relative z-10 shrink-0 hidden md:block" >
                                <Image alt="" src={Img1} className=""/>
                            </div>
                            <div className="relative z-10 shrink-0 md:hidden" >
                                <Image alt="" src={Img4} className=""/>
                            </div>
                            <div className="relative flex items-center justify-center bg-cold-white w-[309px] h-[309px] rounded-[100%] ml-[-66px] z-0 ">
                                <div className="pl-6">
                                    <span className="inline-flex justify-center bg-[#C8C3FF]  px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                                    <p className="text-lg text-left max-w-[150px] mb-2">Quero controlar as despesas do negócio</p>
                                    <Button type="red" href="/despesas">Eu quero</Button>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-black text-6xl ml-auto my-auto font-light max-xl:max-w-4xl max-xl:text-center max-xl:mb-10 xl:w-[500px] mx-auto">Vem pro lado do sucesso, compre o seu Hit online!</h2>
                    </div>
                    <div className="flex justify-end">
                        <div className="relative flex items-center justify-center bg-cold-white w-[309px] h-[309px] rounded-[100%] mr-[-66px] z-0 ">
                            <div className="pr-6 text-right">
                                <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #02</span>
                                <p className="text-lg  max-w-[150px] mb-2">Quero controlar as despesas com combustível</p>
                                <Button type="red" href="/combustivel">Eu quero</Button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image alt="" src={Img2} className=" relative z-0" />
                        </div>
                        <div className="md:hidden">
                            <Image alt="" src={Img3} className=" relative z-0" />
                        </div>
                    </div>
                </div>
            </>
        </MainTemplate>
    );
};

export default Home;
