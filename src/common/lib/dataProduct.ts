import { ProductTypeColors } from "../../types";
import imgPriceDespesas from '../../static/images/img1_hits3.png';
import imgPriceCombustivel from '../../static/images/img1_hits2.png';
import videoHits1 from '../../static/images/video_hits1.png';
import videoHits2 from '../../static/images/video_hits2.jpg';
import img1Hits1 from '../../static/images/img1_hits1.png';
import img2Hits1 from '../../static/images/img2_hits1.png';
import img3Hits1 from '../../static/images/img3_hits1.png';

import img1Hits2 from '../../static/images/img1_hits2.png';
import img2Hits2 from '../../static/images/img2_hits2.png';
import img5Hits2 from '../../static/images/img5_hits2.png';

import img3Hits2 from '../../static/images/img3_hits2.png';
import img4Hits1 from '../../static/images/img4_hits1.png';
import img4Hits2 from '../../static/images/img4_hits2.png';
import img4Hits3 from '../../static/images/img4_hits3.png';
import img2Hits3 from '../../static/images/img2_hits3.png';
import img3Hits3 from '../../static/images/img3_hits3.png';
import img1Hits3 from '../../static/images/img1_hits3.png';
import card_ticket from '../../static/images/card-ticket.png';

const productTypeColors: ProductTypeColors = {
    despesas: ['#C8C3FF', '#B0EFFF'],
    combustivel: ['#DCF691', '#FED0C8'],
};

export const productsData = [
    {
        type: 'despesas',
        intro: [
            {
                tag: 'Hit #1',
                label: 'Controle de Despesas',
                title: 'Sente falta de prever suas despesas e não ter surpresas no final do mês?',
                text: 'Com o Hit #1 você tem controle de todas as despesas... Fica tão fácil que parece invisível!',
                showInput: false,
                textInput: 'Quero Conhecer',
                urlInput: 'https://loja.ticketlog.com.br/controle-de-despesas/informacoes',
                colors: productTypeColors.despesas
            },
        ],
        price: [
            {
                title: 'Quanto você acha justo pagar para resolver de vez a organização das despesas do dia a dia da sua empresa?',
                price: '1,50',
                text: 'E sem pagar nada nos dois primeiros meses?',
                urlInput: 'https://loja.ticketlog.com.br/controle-de-despesas/informacoes',
                colors: productTypeColors.despesas,
                images: [img1Hits3, img2Hits3, img3Hits3],
            },
        ],
        Easy: [
            {
                title: 'Fácil de usar, simples de contratar',
                text1: 'Simule a quantidade de cartões que deseja utilizar',
                text2: 'Informe os dados cadastrais necessários',
                text3: 'Faça o seu login na plataforma e peça seu cartão',
                textButton: 'Teste grátis por 60 dias',
            }
        ],
        carouselTitle: 'Um cartão que é aceito em todos os lugares que você precisa!',
        carouselItems: [
            {
                type: 'note',
                description: 'Material de escritório',
            },
            {
                type: 'gas',
                description: 'Postos de combustíveis',
            },
            {
                type: 'computer',
                description: 'Agências de marketing e comunicação',
            },
            {
                type: 'construction',
                description: 'Construção e decoração',
            },
            {
                type: 'coffee',
                description: 'Café e lanchonete',
            },
            {
                type: 'supermercado',
                description: 'Supermercado',
            },
            {
                type: 'graficas',
                description: 'Graficas',
            },
            {
                type: 'viagens',
                description: 'Viagens',
            }
        ],
        faq: [
            {
                colors: productTypeColors.despesas,
                items: [
                    {
                        question: 'O que é o Hit Controle de Despesas?',
                        answer: 'O <strong>Controle de Despesas</strong> é o hit ideal para quem quer ter controle de todas as despesas do negócio, se destacar da concorrência e ter tempo para focar no que mais importa. Você tem um cartão recarregável com bandeiras Elo e Good Card para usar onde quiser, um aplicativo de carteira virtual para acompanhar e reportar despesas e uma plataforma web para baixar relatórios e ter controle de movimentações.',
                    },
                    {
                        question: 'Como funciona a modalidade de pagamento do Hit de Despesas?',
                        answer: 'Hits Controle de Despesas funciona com a modalidade recarga de crédito, onde você recarrega os seus cartões e paga conforme o uso.',
                    },
                    {
                        question: 'Como comprar o meu Hits?',
                        answer: 'Depois de escolher o Hits ideal para você, clique nos botões de <a target="_blank" href="https://loja.ticketlog.com.br/controle-de-despesas/informacoes" style="cursor: pointer; text-decoration: underline;font-weight: bold;">“Contrate agora”</a> ou nos links a seguir e dê início ao processo de compra, você só precisa inserir seus dados iniciais e solicitar seu cartão :) <br/><br/> <a target="_blank" href="https://loja.ticketlog.com.br/controle-de-despesas/informacoes" style="text-decoration: underline;font-weight: bold;">Contratar Controle de Despesas</a>',
                    },
                    {
                        question: 'Já comprei o meu Hits, e agora?',
                        answer: 'Fique de olho em nosso contato por e-mail ou WhatsApp! <br/> Para <strong>Hits Despesas</strong>, finalize pedido na <a target="_blank" href="https://www.iflexaccmm.com.br" style="text-decoration: underline;font-weight: bold;">plataforma</a>, próximos passos em nosso contato. ',
                    },
                    {
                        question: 'Como acessar minha plataforma?',
                        answer: 'Acesse pelo computador ou app, como preferir :) <br/><br/>Hits Despesas: <br/><a target="_blank" href="https://www.iflexaccmm.com.br" style="text-decoration: underline;font-weight: bold;">Portal do Gestor </a> <br/><a target="_blank" href="https://play.google.com/store/apps/details?id=com.edenred.espp.digitalaccount&hl=pt_BR&gl=US" style="text-decoration: underline;font-weight: bold;">App da carteira digital (Android)</a><br/><a target="_blank" href="https://apps.apple.com/br/app/edenred-wallet/id1542995489" style="text-decoration: underline;font-weight: bold;">App da carteira digital (IOS)</a>',
                    }
                ]
            }
        ],
        video: {
            image: videoHits1,
            title: 'Controle de despesas',
            text: 'Para se destacar da concorrência e ter mais foco no seu negócio.',
            url: 'https://www.youtube.com/embed/d4XXM3UaTwg'
        },
        success: [
            {
                images: [img1Hits2, img5Hits2],
                colors: productTypeColors.combustivel,
                title: 'Quer mais sucesso?',
                text: 'Se a sua empresa tem veículos, também temos uma solução completa para controle de gastos com combustível e mobilidade.',
                label: 'Hit #2',
                textLabel: 'Quero controlar as despesas com combustível',
                link: '/combustivel'

            }
        ],
        advantages: [
            {
                colors: productTypeColors.despesas,
                items: [
                    {
                        type: 'phone',
                        title: 'Use seu cartão em qualquer estabelecimento.',
                        text: 'Temos ampla rede parceira com bandeiras Elo e Good Card. Faça sua solicitação agora e comece a usar o seu hit!',
                        textInput: 'Fale com vendas',
                        image: img4Hits3,
                    },
                    {
                        type: 'note',
                        title: 'Controle suas despesas com o aplicativo de carteira virtual.',
                        text: 'Envie e organize seus comprovantes fiscais,  além de consultar os gastos, saldos e extratos em tempo real.',
                        textInput: 'Fale com vendas',
                        image: img2Hits3,
                    },
                    {
                        type: 'mail',
                        title: 'Organize suas despesas com nossa plataforma de gestão.',
                        text: 'Você tem todas as despesas organizadas para consultar o período, data local e horário. Contrate agora e comece a economizar!',
                        textInput: 'Fale com vendas',
                        image: img3Hits3,
                    },
                    {
                        type: 'clock',
                        title: 'Você está cansado de perder tempo?',
                        text: 'Com o Hit #1 de despesas, você tem o controle de tudo que está acontecendo no seu negócio. De maneira online, simples de usar.',
                        textInput: 'Fale com vendas',
                        image: img4Hits1,
                    },
                ]
            }
        ]
    },
    {
        type: 'combustivel',
        intro: [
            {
                tag: 'Hit #2',
                label: 'Controle de Combustível',
                title: 'Já sabe como dar o primeiro passo para controle de despesas?',
                text: 'Separe os gastos com combustível e mobilidade das outras despesas da empresa tendo o Ticket Car na palma da mão.',
                showInput: false,
                urlInput: 'https://loja.ticketlog.com.br/ticket-car/informacoes',
                textInput: 'Quero Conhecer',
                colors: productTypeColors.combustivel
            },
        ],
        price: [
            {
                title: 'Quanto você acha justo pagar para dar o primeiro passo de organização de gastos, tendo o controle de despesas com combustível na palma da sua mão?',
                price: '1,00',
                text: 'E sem pagar nada nos dois primeiros meses?',
                colors: productTypeColors.combustivel,
                urlInput: 'https://loja.ticketlog.com.br/ticket-car/informacoes',
                images: [img1Hits2, img5Hits2, img3Hits2],
            },
        ],
        Easy: [
            {
                title: 'Simples de contratar, fácil de usar',
                text1: 'Simule a quantidade de cartões que deseja utilizar',
                text2: 'Informe os dados cadastrais necessários e efetue o pagamento da sua recarga',
                text3: 'Faça o seu login na plataforma e comece a usar',
                textButton: 'Compre agora',
            }
        ],
        carouselTitle: 'Parceiros',
        carouselItems: [
            {
                type: 'nove',
                description: '',
            },
            {
                type: 'uber',
                description: '',
            },
            {
                type: 'BikeItau',
                description: '',
            },
            {
                type: 'CarBee',
                description: '',
            },
            {
                type: 'Emoving',
                description: '',
            },
            {
                type: 'EZvolt',
                description: '',
            },
            {
                type: 'Fretadao',
                description: '',
            },
            {
                type: 'Tembici',
                description: '',
            },
            

        ],
        faq: [
            {
                colors: productTypeColors.combustivel,
                items: [
                    {
                        question: 'O que é o Hit Controle de Combustível?',
                        answer: 'Com o Hit Controle de Combustível, você encontra os melhores preços de combustível na palma da mão, em tempo real. Você pode pagar por serviços essenciais, como táxi, estacionamento, Uber, 99, bicicletas compartilhadas e muito mais, tudo em um único lugar! <br/><br/>Além disso, nosso aplicativo torna tudo mais prático para você organizar suas despesas – desde o IPVA até o seguro e a manutenção do veículo.',
                    },
                    {
                        question: 'Como funciona a modalidade de pagamento do Hit Controle de Combustível?',
                        answer: 'Hits Controle de Combustível funciona com a modalidade recarga de crédito, onde você recarrega os seus cartões e paga conforme o uso.',
                    },
                    {
                        question: 'Como comprar o meu Hit?',
                        answer: 'Depois de escolher o Hit ideal para você, clique nos botões de <a target="_blank" href="https://loja.ticketlog.com.br/ticket-car/informacoes" style="cursor: pointer; text-decoration: underline;font-weight: bold;">“Contrate agora”</a> ou nos links a seguir e dê início ao processo de compra, você só precisa inserir seus dados iniciais e solicitar seu cartão :) <br><br> <a target="_blank" href="https://loja.ticketlog.com.br/ticket-car/informacoes" style="text-decoration: underline;font-weight: bold">Contratar Controle de Combustível</a>',
                    },
                    {
                        question: 'Já comprei o meu Hit, e agora?',
                        answer: 'Fique de olho em nosso contato por e-mail ou WhatsApp!<br/><br/> Para <strong>Hits Combustível</strong>, configure e desbloqueie seu cartão na plataforma, use em nossa rede parceira.',
                    },
                    {
                        question: 'Como acessar minha plataforma?',
                        answer: 'Acesse pelo computador ou app, como preferir :) <br/><br/>Hits Combustível: <br/><a target="_blank" href="https://plataforma.ticketlog.com.br/" style="text-decoration: underline;font-weight: bold;">Plataforma Sou Log+ (web)</a><br/><a target="_blank" href="https://play.google.com/store/apps/details?id=com.ticketlog.empresas&hl=pt_BR&gl=US" style="text-decoration: underline;font-weight: bold;">Sou Log+ (Android)</a><br/><a target="_blank" href="https://apps.apple.com/br/app/sou-log-app-do-gestor/id1353125779" style="text-decoration: underline;font-weight: bold;">Sou Log+ (IOS)</a><br/><a target="_blank" href="https://play.google.com/store/apps/details?id=com.embratec.ecofrotas&hl=pt_BR&gl=US" style="text-decoration: underline;font-weight: bold;">App Minha Mobilidade (Android)</a><br/><a target="_blank" href="https://apps.apple.com/br/app/minha-mobilidade/id886670547" style="text-decoration: underline;font-weight: bold;">App Minha Mobilidade (IOS)</a>',
                    },
                    {
                        question: 'Sou um estabelecimento e quero ser parceiro da Edenred?',
                        answer: 'Na base da parceria e da tecnologia, a gente faz a diferença no cotidiano dos nossos clientes, usando toda a expertise da Edenred a favor dos pequenos empreendedores. Entre em contato pelo <a target="_blank" style="text-decoration: underline;font-weight: bold;" href="https://www.ticketlog.com.br/credencie-se/">site para parceiros</a> e faça parte da Edenred!',
                    },
                ]
            }
        ],
        video: {
            image: videoHits2,
            title: 'Controle de combustível',
            text: 'Para iniciar o controle de despesas, separando os gastos com abastecimento de outros custos.',
            url: 'https://www.youtube.com/embed/U9z3YqibeRg'
        },
        success: [
            {
                images: [img1Hits1, img2Hits1, img3Hits1],
                colors: productTypeColors.despesas,
                title: 'Quer mais sucesso?',
                text: 'Se você quer ter controle total das despesas do negócio, se destacar da concorrência e poder focar no que mais importa, também temos uma solução completa para você.',
                label: 'Hit #1',
                textLabel: 'Quero controlar as despesas do negócio',
                link: '/despesas'
            }
        ],
        advantages: [
            {
                colors: productTypeColors.combustivel,
                items: [
                    {
                        type: 'gas',
                        title: 'Abasteça onde quiser.',
                        text: 'Acompanhe os dados dos seus veículos, pesquisa e compare os melhores preços de combustível. São mais de 21 mil postos para abastecer seu veículo.',
                        textInput: 'Fale com vendas',
                        image: card_ticket,
                    },
                                        {
                        type: 'note',
                        title: 'Parceria para o que precisar. ',
                        text: 'Simplifique pagamento de serviços veiculares como: lavagens, estacionamento, manutenção e aplicativos de transporte individual e envio de encomendas.',
                        textInput: 'Fale com vendas',
                        image: img5Hits2,
                    },
                                        {
                        type: 'phone',
                        title: 'Tudo na palma da mão.',
                        text: 'Com os Apps Ticket Log, gestores e usuários podem acompanhar saldo e despesas, encontrar parceiros, saber o preço do combustível e ainda realizar o pagamento do combustível pelo celular.',
                        textInput: 'Fale com vendas',
                        image: img1Hits2,
                    },
                                                            {
                        type: 'mail',
                        title: 'Precisando de uma ajuda?',
                        text: 'Conte com atendimento 24/7 prontos para te ajudar no que precisar na hora em que quiser.',
                        textInput: 'Fale com vendas',
                        image: img4Hits2,
                    }
                ]
            }
        ]
    },
];