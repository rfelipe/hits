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
      style: 'h-[1100px] w-[111vw]',
      styleMobile: "h-[880px]",
      items: [
        {
          question: 'Como o Hits pode ajudar o meu negócio?',
          answer: 'Hits é feito para negócios como o seu. Organize, administre e controle gastos com facilidade e de qualquer lugar. Com nossa plataforma online ou pelo app, você tem um jeito simples e inteligente de pagar as contas da sua empresa e manter tudo registrado direitinho, cada pequeno gasto do dia a dia.',
        },
        {
            question: 'Quem pode usar o Hits?',
            answer: 'Se você é um micro ou pequena empresa, conte com nossa ferramenta e nossa parceria para manter suas contas em dia e fazer sua empresa continuar crescendo.',
        },
        {
            question: 'Como escolher o melhor Hit para meu negócio?',
            answer: 'O <a style="text-decoration: underline;font-weight: bold;" href="/despesas">Controle de Despesas</a> é o hit ideal para quem quer ter controle de todas as despesas do negócio. Você tem um cartão recarregável com bandeiras Elo e Good Card para usar onde quiser, um aplicativo de carteira virtual para acompanhar e reportar despesas e uma plataforma web para baixar relatórios e ter controle de movimentações.  <br/> <br/> Se sua empresa tem diversas despesas e precisa distinguir os gastos com combustível e mobilidade dos demais custos: é aqui que entra o <a style="text-decoration: underline;font-weight: bold;" href="/combustivel">Hit Combustível</a >. Com ele, você consegue separar esses custos de maneira digital, segura e amigável. Imagine simplificar essa tarefa e otimizar a gestão financeira da sua empresa, enquanto contribui para a sustentabilidade. <br/> <br/> Ainda na dúvida? Mande uma mensagem no <a href="https://wa.me/message/2C53SVCTRKXJL1" style="text-decoration:underline;font-weight: bold;">WhatsApp</a> que te ajudamos a escolher o melhor Hit para você!',
        },
        {
            question: 'Como funciona o teste grátis do Hits?',
            answer: 'O teste grátis é a isenção da mensalidade por 60 (sessenta) dias. Para utilizar, basta solicitar seus cartões e <a onClick="document.getElementById(`modalproduct`).style.display = `block`;" style="cursor: pointer; text-decoration: underline;font-weight: bold;">começar a usar!</a>',
        },
        {
            question: 'Como usar os meu Hits?',
            answer: 'Com o <a style="text-decoration: underline;font-weight: bold;" href="/despesas">Hits Controle de Despesas</a> te acompanha no corre do dia a dia, entregando uma solução simples, fácil e prática para usar o cartão onde quiser com uma ampla rede de aceitação nacional e internacional, além de organizar todas as despesas com um aplicativo de carteira digital e controlar todos os relatórios pela plataforma web. <br/><br/> Com o <a style="text-decoration: underline;font-weight: bold;" href="/combustivel">Hits Controle de Combustível</a>, você encontra os melhores preços de combustível na palma da mão, em tempo real. Você pode pagar por serviços essenciais, como táxi, estacionamento, Uber, 99, bicicletas compartilhadas e muito mais, tudo em um único lugar! <br/><br/>Além disso, nosso aplicativo torna tudo mais prático para você organizar suas despesas – desde o IPVA até o seguro e a manutenção do veículo.',
        },
        {
            question: 'Como comprar o meu Hit?',
            answer: 'Depois de escolher o Hit ideal para você, clique nos botões de <a onClick="document.getElementById(`modalproduct`).style.display = `block`;" style="cursor: pointer; text-decoration: underline;font-weight: bold;">“Contrate agora”</a> ou nos links a seguir e dê início ao processo de compra, você só precisa inserir seus dados iniciais e solicitar seu cartão :) <br/><br/><a href="" style="text-decoration: underline;font-weight: bold;">Contratar Controle de Despesas</a><br/><a href="" style="text-decoration: underline;font-weight: bold;">Contratar Controle de Combustível</a>',
        },
        {
            question: 'Já comprei o meu Hit, e agora?',
            answer: 'Fique de olho em nosso contato por e-mail ou WhatsApp! <br/><br/> Para <strong>Hits Despesas</strong>, finalize pedido na <a style="text-decoration: underline;font-weight: bold;" href="https://www.iflexaccmm.com.br">plataforma</a>, próximos passos em nosso contato. <br/><br/>Para <strong>Hits Combustível<strong>, configure e desbloqueie seu cartão na plataforma, use em nossa rede parceira.',
        },
        {
            question: 'Como acessar minha plataforma?',
            answer: 'Acesse pelo computador ou app, como preferir :) <br/><br/> Hits Despesas: <br/><a href="http://www.iflexaccmm.com.br" style="text-decoration: underline;font-weight: bold;">Portal do Gestor </a><br/><a href="https://play.google.com/store/apps/details?id=com.edenred.espp.digitalaccount&hl=pt_BR&gl=US" style="text-decoration: underline;font-weight: bold;">App do Gestor (Android)</a><br/><a href="https://apps.apple.com/br/app/edenred-wallet/id1542995489" style="text-decoration: underline;font-weight: bold;">App do Gestor (IOS)</a> <br/><br/>Hits Combustível: <br/><a href="https://plataforma.ticketlog.com.br/" style="text-decoration: underline;font-weight: bold;">Sou Log + </a><br/><a href="https://play.google.com/store/apps/details?id=com.embratec.ecofrotas&hl=pt_BR&gl=US" style="text-decoration: underline;font-weight: bold;">App do Gestor (Android)</a><br/><a href="https://apps.apple.com/br/app/minha-mobilidade/id886670547" style="text-decoration: underline;font-weight: bold;">App do Gestor (IOS)</a>',
        },
        {
            question: 'Sou um estabelecimento e quero ser parceiro da Edenred?',
            answer: 'Na base da parceria e da tecnologia, a gente faz a diferença no cotidiano dos nossos clientes, usando toda a expertise da Edenred a favor dos pequenos empreendedores. Entre em contato pelo <a style="text-decoration: underline;font-weight: bold;" href="https://www.ticketlog.com.br/credencie-se/">site para parceiros</a> e faça parte da Edenred!',
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
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[1890px] h-[58%] max-md:h-[71%] bg-[#F1F7FF] rounded-[100%] z-[-1]"></div>
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
        <Duvida />
        <Faq faqs={faqs} />
        {showForm && <Form onClose={() => setShowForm(false)}/>}
      </div>
    </MainTemplate>
  );
};

export default Planos;
