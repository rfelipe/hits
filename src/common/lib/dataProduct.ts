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
import img3Hits2 from '../../static/images/img3_hits2.png';
import img4Hits1 from '../../static/images/img4_hits1.png';
import img4Hits2 from '../../static/images/img4_hits2.png';
import img4Hits3 from '../../static/images/img4_hits3.png';
import img2Hits3 from '../../static/images/img2_hits3.png';
import img3Hits3 from '../../static/images/img3_hits3.png';
import img1Hits3 from '../../static/images/img1_hits3.png';

const productTypeColors: ProductTypeColors = {
    despesas: ['#C8C3FF', '#B0EFFF'],
    combustivel: ['#DCF691', '#FED0C8'],
};

export const productsData = [
    {
        type: 'despesas',
        intro: [
            {
                tag: 'Hits #1',
                label: 'Controle de Despesas',
                title: 'Quer mais sucesso no dia a dia do seu negócio?',
                text: 'Conte com a gente para o controle e organização de todas as despesas da sua empresa.',
                showInput: true,
                colors: productTypeColors.despesas
            },
        ],
        price: [
            {
                title: 'Quanto você acha justo pagar para resolver de vez a organização das despesas do dia a dia da sua empresa?',
                price: '1,50',
                text: 'E sem pagar nada nos dois primeiros meses?',
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
                type: 'mail',
                description: 'Description 3',
            },
            {
                type: 'carmarket',
                description: 'Description 1',
            }
        ],
        faq: [
            {
                colors: productTypeColors.despesas,
                items: [
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    },
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    },
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    },
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                    },
                ]
            }
        ],
        video: {
            image: videoHits1,
            title: 'Lorem ipsum dolor sit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus, elit tellus porttitor est.'
        },
        success: [
            {
                images: [img1Hits2, img2Hits2, img3Hits2],
                colors: productTypeColors.combustivel,
                title: 'Quer mais sucesso?',
                text: 'Se a sua empresa tem veículos, também temos uma solução completa para controle de gastos de combustível e automotivos.',
                label: 'Hits #2',
                textLabel: 'Quero controlar as despesas com combustível'
            }
        ],
        advantages: [
            {
                colors: productTypeColors.despesas,
                items: [
                    {
                        type: 'clock',
                        title: 'Você está cansado de perder tempo?',
                        text: 'Com o Hit #1 de despesas, você tem o controle de tudo que está acontecendo no seu negócio. De maneira online, simples de usar.',
                        image: img4Hits1,
                    },
                                        {
                        type: 'note',
                        title: 'Controle suas despesas com o aplicativo de carteira virtual.',
                        text: 'Envie e organize seus comprovantes fiscais,  além de consultar os gastos, saldos e extratos em tempo real.',
                        image: img2Hits3,
                    },
                                        {
                        type: 'phone',
                        title: 'Use seu cartão em qualquer estabelecimento.',
                        text: 'Temos ampla rede parceira com bandeiras Elo e Good Card. Faça sua solicitação agora e comece a usar o seu hit!',
                        image: img4Hits3,
                    },
                                                            {
                        type: 'mail',
                        title: 'Organize suas despesas com nossa plataforma de gestão.',
                        text: 'Você tem todas as despesas organizadas para consultar o período, data local e horário. Contrate agora e comece a economizar!',
                        image: img3Hits3,
                    }
                ]
            }
        ]
    },
    {
        type: 'combustivel',
        intro: [
            {
                tag: 'Hits #2',
                label: 'Controle de Combustível',
                title: 'Controle todos os gastos de combustível e mobilidade do seu negócio!',
                text: 'Tenha o controle na palma da mão com a Ticket Car.',
                showInput: false,
                colors: productTypeColors.combustivel
            },
        ],
        price: [
            {
                title: 'Quanto você acha justo pagar para dar o primeiro passo de organização de gastos, tendo o controle de despesas com combustível na palma da sua mão?',
                price: '1,00',
                text: 'E sem pagar nada nos dois primeiros meses?',
                colors: productTypeColors.combustivel,
                images: [img1Hits2, img2Hits2, img3Hits2],
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
                type: 'uber',
                description: '',
            },
            {
                type: 'kdOficina',
                description: '',
            },
            {
                type: 'novenove',
                description: '',
            },
            {
                type: 'bikeItau',
                description: '',
            },
            {
                type: 'emoving',
                description: '',
            },

        ],
        faq: [
            {
                colors: productTypeColors.combustivel,
                items: [
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    },
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    },
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    },
                    {
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                    },
                ]
            }
        ],
        video: {
            image: videoHits2,
            title: 'Lorem ipsum dolor sit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus, elit tellus porttitor est.'
        },
        success: [
            {
                images: [img1Hits1, img2Hits1, img3Hits1],
                colors: productTypeColors.despesas,
                title: 'Quer mais sucesso?',
                text: 'Se a sua empresa tem gastos de combustível e mobilidade, também temos uma solução completa para você.',
                label: 'Hit #1',
                textLabel: 'Quero controlar as despesas do negócio'
            }
        ],
                advantages: [
            {
                colors: productTypeColors.combustivel,
                items: [
                    {
                        type: 'clock',
                        title: '',
                        text: 'Dê o primeiro passo de controle de gastos começando pela organização com combustível e mobilidade.',
                        image: img1Hits2,
                    },
                                        {
                        type: 'note',
                        title: '',
                        text: 'Pesquise os postos com os melhores preços.',
                        image: img3Hits2,
                    },
                                        {
                        type: 'phone',
                        title: '',
                        text: 'Escolha onde utilizar o seu hit, em um dos mais de 21 mil postos parceiros.',
                        image: img2Hits2,
                    },
                                                            {
                        type: 'mail',
                        title: '',
                        text: 'Simplifique pagamento de serviços veiculares como: lavagens, estacionamento,  manutenção e aplicativos de transporte individual e envio de encomendas.',
                        image: img4Hits2,
                    }
                ]
            }
        ]
    },
];