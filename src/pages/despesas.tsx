import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import IntroBackgroundProduct from "../common/components/IntroBackgroundProduct";
import IntroTitleProduct from "../common/components/IntroTitleProduct";
import ProductAdvantages from "../common/components/ProductAdvantages";
import Carousel from "../common/components/Carousel";
import Faq from "../common/components/Faq";
import { Note, Gas, Computer, Construction, Coffee, Mail, CarMarket } from '../common/components/icons';
import Img1 from '../common/components/ProductPrice/images/despesas.png';
import ProductPrice from "../common/components/ProductPrice";
import { ProductDataPrice } from "../types";
import EasyToUse from "../common/components/EasyToUse";
import WhoEdenred from "../common/components/WhoEdenred";
import ProductVideo from '../common/components/ProductVideo';
import WantMoreSuccess from "../common/components/WantMoreSuccess";

const Despesas: NextPage = () => {
  const carouselItems = [
    {
      icon: <Note/>,
      description: 'Material de escritório',
    },
    {
      icon: <Gas />,
      description: 'Postos de combustíveis',
    },
    {
      icon: <Computer />,
      description: 'Agências de marketing e comunicação',
    },
    {
      icon: <Construction />,
      description: 'Construção e decoração',
    },
    {
      icon: <Coffee />,
      description: 'Café e lanchonete',
    },
    {
      icon: <Mail />,
      description: 'Description 3',
    },
    {
      icon: <CarMarket />,
      description: 'Description 1',
    }
  ];

  const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
    {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
    {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
    {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },

];
    const productPriceData: ProductDataPrice[] = [
    {
        image: Img1,
        price: '29,90',
        title: 'Quanto você acha justo pagar para resolver a organização das despesas do dia a dia da sua empresa?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  const [firstProductData] = productPriceData;

  return (
    <MainTemplate>
      <Head>
        <title>Despesas | Ticket Log</title>
        <meta name="description" content=""></meta>
      </Head>
      <div className="pt-20">
        <div className="relative pb-60 overflow-hidden">
          <IntroBackgroundProduct
            fillColor1="fill-light-violet"
            fillColor2="fill-light-cobalt"
            ellipseColor="fill-cold-white"
          />
          <div className="container m-auto z-10 relative">
            <IntroTitleProduct></IntroTitleProduct>
          </div>

        </div>
        <ProductAdvantages></ProductAdvantages>
        <Carousel items={carouselItems}></Carousel>
        <ProductPrice {...firstProductData}></ProductPrice>
        <EasyToUse />
        <ProductVideo/>
        <WhoEdenred />
        <Faq faqs={faqs}></Faq>
        <WantMoreSuccess />
      </div>
    </MainTemplate>
  );
};

export default Despesas;
