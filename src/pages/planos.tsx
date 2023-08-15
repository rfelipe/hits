import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import Faq from "../common/components/Product/components/Faq";
import Button from "../common/components/Buttons";
import Cards from "../common/components/Planos/Cards";

const Sobre: NextPage = () => {
  const faqs = [
    {
      colors: ["#F72717", "#B0EFFF"],
      items: [
        {
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        },
      ],
    },
  ];
  return (
    <MainTemplate>
      <Head>
        <title>Planos | Ticket Log</title>
        <meta name="description" content=""></meta>
      </Head>
      <div className="relative">
        <svg className="absolute" viewBox="0 0 1440 1934" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="720" cy="967" r="967" fill="#F1F7FF" />
        </svg>
      </div>
      <div className="relative overflow-hidden pt-20 md:pb-60 pb-20">
        <section className="text-center m-auto xl:max-w-[969px] p-3 mb-14">
          <h1 className="lg:text-6xl text-4xl font-light">
            Qual é o melhor Hit para você?
          </h1>
          <p className="mt-6 text-3xl font-light">
              Conheça o plano que melhor se encaixa para o seu negócio.
          </p>
          <div className="md:hidden mt-5">
            <Button type="red" href="/">
              Contrate agora
            </Button>
          </div>
        </section>
        <Cards />

        {/* ToDo 
             - Cards planos MOBILE
             - Bloco "Na duvida..." 
             - Form
        */}

        <section className="text-center m-auto p-3 mt-24">
          <h1 className="text-3xl font-bold">
            Contrate o Controle de Despesas e Controle de Combustível juntos!
          </h1>
          <p className="mt-3 text-3xl">
            Veja como podemos ajudar você a acelerar o seu sucesso!
          </p>
          <div className="mt-7">
            <Button type="red" href="/">
              Fale com vendas
            </Button>
          </div>
        </section>
        <Faq faqs={faqs} />
      </div>
    </MainTemplate>
  );
};

export default Sobre;
