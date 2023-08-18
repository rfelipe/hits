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
                        <div className="relative flex items-center w-[704px] h-[500px]">
                      
                            <div className="absolute right-0 top-0">
                                <Image src={Hits1Img1} alt="" className=" top-0" width={500} height={500}></Image>
                            </div>
                                                        <svg width="314" height="500" viewBox="0 0 314 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-10 left-0 top-0">
                                
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 0H-1779V500H64C202.071 500 314 388.071 314 250C314 111.929 202.071 0 64 0Z" fill="#C8C3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M259 406.459C293.411 363.627 314 309.218 314 250C314 190.782 293.411 136.373 259 93.541C224.589 136.373 204 190.782 204 250C204 309.218 224.589 363.627 259 406.459Z" fill="#B0EFFF"/>                               

                            </svg>
                            
                       
                                                        <div className="pr-6 text-left absolute right-16">
                                <span className="inline-flex justify-center bg-light-violet px-4 py-2 rounded-full w-fit mb-2">Hit #01</span>
                                <p className="text-white text-3xl max-w-[250px] mb-2">Quero controlar as despesas do negócio</p>
                                <Button type="red" href="/combustivel">Eu quero</Button>
                            </div>
                        </div>
                        <div className="relative flex items-center w-[704px] h-[500px]">
                                                        <div className="absolute left-0 top-0   ">
                                <Image src={Hits2Img2} alt="" className=" top-0" width={500} height={500}></Image>
                            </div>
                            <svg width="314" height="500" viewBox="0 0 314 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-10 right-0 top-0">
                               
                                {/* <image
                                    xlinkHref={Hits2Img2.src}
                                    className={`absolute top-0 opacity-100 transition-opacity duration-1000 '
                                            }`}
                                ></image> */}
                                <path fill-rule="evenodd" clipRule="evenodd" d="M250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0H500V250V500H250Z" fill="#DCF691"/>
<path fill-rule="evenodd" clipRule="evenodd" d="M55 406.459C20.5894 363.627 0 309.218 0 250C0 190.782 20.5894 136.373 55 93.541C89.4106 136.373 110 190.782 110 250C110 309.218 89.4106 363.627 55 406.459Z" fill="#FED0C8"/>

                            </svg>

                                                                                    <div className="pr-6 text-right absolute left-16">
                                <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #02</span>
                                <p className="text-white text-3xl max-w-[250px] mb-2">Quero controlar as despesas com combustível</p>
                                <Button type="red" href="/combustivel">Eu quero</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-32">
                    <h2 className="text-5xl text-black font-light text-center mb-8">Veja como é fácil</h2>
                    <p className="text-grey md:text-black text-base md:text-lg font-light font-ubuntu mb-8 w-[808px] mx-auto text-center">
                        Se você tem um comércio ou é atacadista, prestador de serviços, construtura ou pequena indústria, você precisa testar essa solução pra manter suas contas em dia, agilizar processos
                        e acelerar o crescimento do seu negócio.
                    </p>
                    <div className="pt-16">
                        <div className="flex items-center justify-center gap-8">
                            <div className="md:w-[283px] md:h-[283px] border rounded-full bg-cold-white flex flex-col justify-center items-center">
                                <div className="mb-4">
                                    <Phone />
                                </div>
                                <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                            </div>
                            <div className="md:w-[283px] md:h-[283px] border rounded-full bg-cold-white flex flex-col justify-center items-center">
                                <div className="mb-4">
                                    <Phone />
                                </div>
                                <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                            </div>
                            <div className="md:w-[283px] md:h-[283px] border rounded-full bg-cold-white flex flex-col justify-center items-center">
                                <div className="mb-4">
                                    <Phone />
                                </div>
                                <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                            </div>
                            <div className="md:w-[283px] md:h-[283px] border rounded-full bg-cold-white flex flex-col justify-center items-center">
                                <div className="mb-4">
                                    <Phone />
                                </div>
                                <h3 className="text-black font-medium text-2xl mb-2">Controle</h3>
                                <p className="w-[188px] text-center mx-auto">Controle suas despesas em tempo real</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-32">
                    <h2 className="text-5xl text-black font-light text-center mb-16">Veja as novidades</h2>
                    <div className="flex gap-8 items-center justify-center pb-16">
                        <div className="w-[368px] h-[440px]">
                            <div className="h-[235px] bg-grey rounded-t-3xl"></div>
                            <div className="h-[205px] bg-cold-white rounded-b-3xl p-10">
                                <span className="font-ubuntu text-grey block mb-6">19 Jun 2023</span>
                                <h3 className="text-black font-medium text-base mb-4">Cartão de combustível: o que é, como funciona  e qual o melhor?</h3>
                                <div className="-ml-[20px]">
                                    <Button type="readMore" href="/">Leia mais</Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[368px] h-[440px]">
                            <div className="h-[235px] bg-grey rounded-t-3xl"></div>
                            <div className="h-[205px] bg-cold-white rounded-b-3xl p-10">
                                <span className="font-ubuntu text-grey block mb-6">19 Jun 2023</span>
                                <h3 className="text-black font-medium text-base mb-4">Cartão de combustível: o que é, como funciona  e qual o melhor?</h3>
                                <div className="-ml-[20px]">
                                    <Button type="readMore" href="/">Leia mais</Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[368px] h-[440px]">
                            <div className="h-[235px] bg-grey rounded-t-3xl"></div>
                            <div className="h-[205px] bg-cold-white rounded-b-3xl p-10">
                                <span className="font-ubuntu text-grey block mb-6">19 Jun 2023</span>
                                <h3 className="text-black font-medium text-base mb-4">Cartão de combustível: o que é, como funciona  e qual o melhor?</h3>
                                <div className="-ml-[20px]">
                                    <Button type="readMore" href="/">Leia mais</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
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
