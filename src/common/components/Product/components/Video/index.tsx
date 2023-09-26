/* eslint-disable react/jsx-key */
import { Video } from "../../../../../types";
import { useState } from "react";
import VideoPlayerModal from "../../../VideoPlayerModal";
interface VideoProps {
    videos: Video;
}

const VideoSection: React.FC<VideoProps> = ({ videos }) => {
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <div className='pt-16 md:pt-20'>
            <div className='w-full bg-no-repeat bg-cover bg-center' style={{ 'backgroundImage': `url(${videos.image.src})` }}>
                <div className='px-6 lg:px-0 lg:ml-auto'>
                    <div className='flex justify-center flex-col md:flex-row gap-20 h-[560px] place-items-center content-center container grid-cols-none'>
                        <div className='lg:w-[590px] text-center lg:text-justify'>
                            <h2 className='text-white lg:text-5xl text-4xl mb-6 font-light'>{videos.title}</h2>
                            <p className='text-white text-base font-ubuntu font-light mb-8 md:mb-0'>{videos.text}</p>
                        </div>
                        <a onClick={() => setShowPlayer(true)} target="_blank" rel="noreferrer" className='flex items-center gap-4'>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="32" fill="fill-original-red" className='fill-original-red hover:fill-black transition-all' />
                                <path d="M29.5048 17.8095L29.5049 17.8095C29.9679 17.6559 30.4414 17.8051 30.7334 18.1979L30.7334 18.1979L39.6435 30.1838C39.6436 30.1839 39.6436 30.1839 39.6436 30.184C40.4521 31.2722 40.4521 32.7279 39.6436 33.8161C39.6436 33.8161 39.6436 33.8161 39.6435 33.8162L30.7335 45.8023C30.4416 46.1949 29.9679 46.3441 29.5049 46.1905C29.0412 46.0365 28.75 45.6333 28.75 45.1434L28.75 18.8566C28.75 18.3664 29.0414 17.9631 29.5048 17.8095Z" stroke="white" strokeWidth="1.5" />
                            </svg>
                            <a onClick={() => setShowPlayer(true)} target="_blank" rel="noreferrer" className='text-white font-ubuntu font-light cursor-pointer'>Assista ao vídeo</a>
                        </a>
                    </div>
                </div>
            </div>
          {showPlayer && <VideoPlayerModal url={videos.url} onClose={() => setShowPlayer(false)} />}
        </div>
    )
}

export default VideoSection