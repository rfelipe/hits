import BgDespesas from './images/bg-despesas.jpg'

const ProductVideo = () => {
    return (
        <div className='pt-32'>
            <div className='w-full bg-no-repeat bg-cover' style={{ 'backgroundImage': `url(${BgDespesas.src})` }}>

                <div className='max-w-8xl'>
                    <div className='grid grid-cols-2 lg:h-[560px] place-items-center content-center container'>
                        <div className='lg:w-[590px]'>
                            <h2 className='text-white text-5xl mb-6 font-light'>Lorem ipsum dolor sit</h2>
                            <p className='text-white text-base font-ubuntu font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros.
                                Duis cursus, nisi a pellentesque finibus, elit tellus porttitor est.</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="32" fill="fill-original-red" className='fill-original-red hover:fill-black transition-all' />
                                <path d="M29.5048 17.8095L29.5049 17.8095C29.9679 17.6559 30.4414 17.8051 30.7334 18.1979L30.7334 18.1979L39.6435 30.1838C39.6436 30.1839 39.6436 30.1839 39.6436 30.184C40.4521 31.2722 40.4521 32.7279 39.6436 33.8161C39.6436 33.8161 39.6436 33.8161 39.6435 33.8162L30.7335 45.8023C30.4416 46.1949 29.9679 46.3441 29.5049 46.1905C29.0412 46.0365 28.75 45.6333 28.75 45.1434L28.75 18.8566C28.75 18.3664 29.0414 17.9631 29.5048 17.8095Z" stroke="white" stroke-width="1.5" />
                            </svg>
                            <span className='text-white font-ubuntu font-light'>Assista ao vídeo</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductVideo;