import React from "react";
import Image from "next/image";
import IconList from '../images/planos-list.svg';
import arrow from '../images/arrow-down.svg'
import Button from "../../../components/Buttons"
import { motion, AnimatePresence } from "framer-motion";


const Cards = () => {
    const [Despesas, setDespesas] = React.useState(false);
    const [Combustivel, setCombustivel] = React.useState(false);

  return (
    <section className="flex flex-wrap gap-8 lg:px-32 px-6 justify-center">
        <div className="bg-white rounded-lg px-7 md:px-12 py-9 md:w-[600px] text-center md:text-start">
            <h1 className="text-3xl">Despesas Gerais</h1>
            <p className="mt-4 bg-[#C8C3FF] px-4 py-2 max-md:mx-auto rounded-full w-fit">Grátis por 60 dias</p>
            <p className="mt-4 text-lg leading-6 font-light ">Para quem quer ter controle de todas as despesas do negócio, se destacar da concorrência e poder focar no que mais importa.</p>
            <ul className="mt-8 md:block hidden">
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Cartão para usar onde quiser</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/> Carteira digital</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/> Plataforma de gestão</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/> Registro das despesas</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/> Pagamento de contas e boletos</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/> Relatórios online</li>
            </ul>
            <div className="md:block hidden">
                <p className="mt-8 text-lg leading-6 font-light">Atendimento 24/7</p>
                <p className="text-lg leading-6 font-light">Sem contrato de fidelidade</p>
            </div>
            <div className='text-3xl text-black font-normal mt-6'>
                <p className=''>A partir de</p>
                <span className=' text-6xl font-semibold'>R$ 27,90</span>
                <p className="text-xs mt-2">Valor por cartão. Consultar condições</p>
            </div>
            <div className="mt-6">
                <Button type="red" href="/">Simular proposta</Button>
            </div>
            <div className="mt-4 block md:hidden">
                <h2 onClick={() => setDespesas(!Despesas)} className="flex justify-center gap-4">Conheça os benefícios 
                    <motion.div
                    animate={{
                      rotate: Despesas ? -180 : 0
                    }}>
                        <Image className="ml-4" src={arrow} alt=""/> 
                    </motion.div>
                </h2>
                <AnimatePresence>
                    {Despesas && (
                        <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            type: 'tween',
                            duration: 0.4,
                        }}>
                            <div className="">
                                <ul className="mt-8 text-start">
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Cartão para usar onde quiser</li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Carteira digital</li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Plataforma de gestão</li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Registro das despesas</li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Pagamento de contas e boletos</li>
                                    <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Relatórios online</li>
                                </ul>
                                <p className="mt-8 text-lg leading-6 font-light">Atendimento 24/7</p>
                                <p className="text-lg leading-6 font-light">Sem contrato de fidelidade</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        <div className="bg-white rounded-lg p-12 w-[600px] text-center md:text-start">
            <h1 className="text-3xl">Despesas combustível</h1>
            <p className="mt-4 bg-[#DCF691] px-4 py-2 max-md:mx-auto rounded-full w-fit">Grátis por 60 dias</p>
            <p className="mt-4 text-lg leading-6 font-light">Para quem quer ter controle das despesas com combustível, serviços veiculares, e deslocamento, garantindo a organização desses gastos separado das outras despesas da empresa.</p>
            <ul className="mt-8 md:block hidden">
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Busca dos postos de combustível com melhor preço</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Controle de serviços veiculares: manutenção, lavagem, pagamento IPVA</p></li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Aplicativo carteira digital</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Plataforma de gestão</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Registro das despesas com combustível</li>
                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/>Relatórios online</li>
            </ul>
            <div className="md:block hidden">
                <p className="mt-8 text-lg leading-6 font-light">Atendimento 24/7</p>
                <p className="text-lg leading-6 font-light">Sem contrato de fidelidade</p>
            </div>
            <div className='text-3xl text-black font-normal mt-6'>
                <p className=''>A partir de</p>
                <span className=' text-6xl font-semibold'>R$ 17,90</span>
                <p className="text-xs mt-2">Valor por cartão. Consultar condições</p>
            </div>
            <div className="mt-6">
                <Button type="red" href="/">Simular proposta</Button>
            </div>
            <div className="mt-4 block md:hidden">
                <h2 onClick={() => setCombustivel(!Combustivel)} className="flex justify-center gap-4">Conheça os benefícios 
                    <motion.div
                    animate={{
                      rotate: Combustivel ? -180 : 0
                    }}>
                        <Image className="ml-4" src={arrow} alt=""/> 
                    </motion.div>
                </h2>
                <AnimatePresence>
                    {Combustivel && (
                        <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            type: 'tween',
                            duration: 0.4,
                        }}>
                            <div className="">
                            <ul className="mt-8 text-start">
                                <li className="flex mt-2 items-center gap-3"><Image className="shrink-0" src={IconList} alt=""/><p className="w-11/12">Busca dos postos de combustível com melhor preço</p></li>
                                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Controle de serviços veiculares: manutenção, lavagem, pagamento IPVA</p></li>
                                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Aplicativo carteira digital</p></li>
                                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Plataforma de gestão</p></li>
                                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Registro das despesas com combustível</p></li>
                                <li className="flex mt-2 items-center gap-3"><Image src={IconList} alt=""/><p className="w-11/12">Relatórios online</p></li>
                            </ul>
                                <p className="mt-8 text-lg leading-6 font-light">Atendimento 24/7</p>
                                <p className="text-lg leading-6 font-light">Sem contrato de fidelidade</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        
    </section>
    
  );
};

export default Cards;
