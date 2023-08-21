import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import Faq from "../common/components/Product/components/Faq";
import Button from "../common/components/Buttons";
import Cards from "../common/layouts/Planos/Cards";
import Duvida from "../common/layouts/Planos/Duvida";
import Form from "../common/components/Form";
import {useState} from "react";

const Planos: NextPage = () => {
  const [showForm, setShowForm] = useState(false);

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
      <div className="relative overflow-hidden pt-20  pb-20">
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[1890px] h-[67%] bg-[#F1F7FF] rounded-[100%] z-[-1]"></div>
        <section className="text-center m-auto xl:max-w-[969px] p-3 md:mb-20 mb-10">
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
        <Duvida />
        <Faq faqs={faqs} />
        {showForm && <Form onClose={() => setShowForm(false)}/>}
      </div>
    </MainTemplate>
  );
};

export default Planos;
