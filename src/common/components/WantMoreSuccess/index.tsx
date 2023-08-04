import Img from './components/images/despesas.png';
import Button from '../Buttons';

const WantMoreSuccess = () => {
    return (
        <div className='py-32'>
            <div className='flex items-center justify-end'>
                <div className='pr-6 lg:w-[503px] container mx-auto'>
                    <h2 className='text-5xl text-black font-light mb-8'>Quer mais sucesso?</h2>
                    <p className='font-ubuntu text-base mb-6 font-light lg:w-[388px] pb-8'>Se a sua empresa tem veículos, também temos uma solução completa para controle de gastos de combustível e automotivos.</p>
                    <div className='flex gap-3'>
                                            <Button type="red" href="/">Teste grátis por 60 dias</Button>
                    <Button type="learnMore" href="/">Saiba mais</Button>
                    </div>
                </div>
                <div>
                    <svg width="704" height="500" viewBox="0 0 704 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="maskWantMoreSuccess" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
                            <circle cx="250" cy="250" r="250" fill="#D9D9D9" />
                        </mask>
                        <image id="imageWantMoreSuccess" xlinkHref={Img.src}></image>
                        <g mask="url(#maskWantMoreSuccess)">
                            <mask id="mask1_579_4338" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
                                <circle cx="250" cy="250" r="250" fill="#D9D9D9" />
                            </mask>
                            <rect y="174" width="500" height="326" fill="url(#paintWantMoreSuccess)" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M640 500C501.929 500 390 388.071 390 250C390 111.929 501.929 0 640 0H890V250V500H640Z" fill="#DCF691" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M445 406.459C410.589 363.627 390 309.218 390 250C390 190.782 410.589 136.373 445 93.541C479.411 136.373 500 190.782 500 250C500 309.218 479.411 363.627 445 406.459Z" fill="#FED0C8" />
                        <defs>
                            <pattern id="patternWantMoreSuccess0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#imageWantMoreSuccess" transform="scale(0.000833333 0.00125)" />
                            </pattern>
                            <pattern id="patternWantMoreSuccess1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#imageWantMoreSuccess" transform="scale(0.000833333 0.00125)" />
                            </pattern>
                            <linearGradient id="paintWantMoreSuccess" x1="250" y1="174" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                                <stop stopOpacity="0" />
                                <stop offset="1" />
                                <stop offset="1" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

            </div>
        </div>
    )
}

export default WantMoreSuccess;