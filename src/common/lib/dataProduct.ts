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
                title: 'Administre todos os gastos de combustível na sua empresa',
                text: 'Conte com a gente para o controle e organização dos gastos da sua empresa',
                showInput: true,
                colors: productTypeColors.despesas
            },
        ],
        price: [
            {
                title: 'Quanto você acha justo pagar para resolver a organização das despesas do dia a dia da sua empresa?',
                price: '3',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                colors: productTypeColors.despesas,
                images: [img1Hits3, img2Hits3, img3Hits3],
            },
        ],
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
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img4Hits1,
                    },
                                        {
                        type: 'note',
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img2Hits3,
                    },
                                        {
                        type: 'phone',
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img4Hits3,
                    },
                                                            {
                        type: 'mail',
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
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
                title: 'Administre todos os gastos de combustível na sua empresa',
                text: 'Conte com a gente para o controle e organização dos gastos da sua empresa',
                showInput: false,
                colors: productTypeColors.combustivel
            },
        ],
        price: [
            {
                title: 'Quanto você acha justo pagar para resolver a organização das despesas do dia a dia da sua empresa?',
                price: '3',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                colors: productTypeColors.combustivel,
                images: [img1Hits2, img2Hits2, img3Hits2],
            },
        ],
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
                text: 'Se a sua empresa tem veículos, também temos uma solução completa para controle de gastos de combustível e automotivos.',
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
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img1Hits2,
                    },
                                        {
                        type: 'note',
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img3Hits2,
                    },
                                        {
                        type: 'phone',
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img2Hits2,
                    },
                                                            {
                        type: 'mail',
                        title: 'Administre despesas fixas e variáveis em tempo real',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                        image: img4Hits2,
                    }
                ]
            }
        ]
    },
];