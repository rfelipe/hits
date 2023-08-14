import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import { ProductProvider } from "../common/components/ProductContext";
import { productsData } from "../common/lib/dataProduct";
import { Phone, Clock, Note, Gas } from "../common/components/icons";
import Button from "../common/components/Buttons";
import Img3Hits3 from "../static/images/home/hits1.png";

const Home: NextPage = () => {
    return (
        <MainTemplate>
            <Head>
                <title>Ticket Log</title>
                <meta name="description" content=""></meta>
            </Head>
            <>
                <div className="py-32">
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
                <div className="pb-32">
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
                        <div className="relative">
                            <svg width="705" height="309" viewBox="0 0 705 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M429.595 58.2671C408.584 84.7071 396 118.265 396 154.791C396 191.316 408.575 224.874 429.595 251.314C450.606 224.874 463.191 191.316 463.191 154.791C463.191 118.265 450.616 84.7071 429.595 58.2671Z" fill="#C8C3FF" />
                                <path d="M429.565 251.083C457.915 286.39 501.465 309 550.304 309C635.739 309 705 239.834 705 154.5C705 69.1656 635.748 -3.01851e-06 550.304 -6.74279e-06C501.465 -8.87153e-06 457.915 22.6102 429.565 57.9165C450.802 84.3729 463.512 117.952 463.512 154.5C463.512 191.048 450.802 224.627 429.565 251.083Z" fill="#F1F7FF" />
                                <mask id="mask0_579_4093" maskUnits="userSpaceOnUse" x="-59" y="0" width="489" height="309">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M309.89 0C358.474 -2.12368e-06 401.797 22.6102 430 57.9165C408.874 84.3729 396.23 117.952 396.23 154.5C396.23 191.048 408.874 224.627 430 251.083C401.797 286.39 358.474 309 309.89 309C303.936 309 298.06 308.661 292.282 308H-59V6.1307e-06H302V0.199537C304.613 0.0670456 307.244 1.15665e-07 309.89 0Z" fill="#B0EFFF" />
                                </mask>
                                <image xlinkHref={Img3Hits3.src} id="imageHome1" className="absolute top-0 left-0"></image>
                            </svg>
                            <div className='absolute top-32 left-[35%] text-center md:top-14 w-48 md:left-[32%] items-end md:text-justify'>
                                <span className={`text-base py-2 px-4 rounded-full inline-flex items-end bg-light-violet mb-3`}>Hit #01</span>
                                <p className='text-black text-base font-medium w-[128px] mb-3'>Quero controlar as despesas do negócio</p>
                                <Button type="red" href="/">Eu quero</Button>
                            </div>
                        </div>
                    </div>
                    <h2 className="">Vem pro lado
                        sucesso da força</h2>
                </div>
            </>
        </MainTemplate>
    );
};

export default Home;
