import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Button from "../Buttons";
import Image from "next/image";


function ApiData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        var categoria = 'gestao';
        var quantPosts = 3;

        const response = await fetch(`https://www.ticketlog.com.br/blog/wp-json/custom/v1/latest-posts-by-category?category_slug=${categoria}&post_count=${quantPosts}`);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
        <div className="pt-14 md:pt-32">
            <h2 className="text-5xl text-black font-light text-center mb-16">Veja as novidades</h2>
            {isLoading ? (
                <p className='text-center'>Carregando...</p>
            ) : (
                <div className="lg:max-w-[90%] ml-auto mr-auto mt-12">
                    <Swiper slidesPerView={3} initialSlide={2} spaceBetween={30}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                initialSlide: 0
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                initialSlide: 0
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                allowTouchMove: true,
                                initialSlide: 1
                            }
                        }}
                    >
                        {data.map((item,index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                                <div className="w-[368px] h-[440px]">
                                    <div className="h-[220px] bg-grey rounded-t-3xl overflow-hidden">
                                        <Image src={item.image.url} width={368} height={220} alt=""/>
                                        </div>
                                    <div className="h-[205px] bg-cold-white rounded-b-3xl px-10 py-5">
                                        <span className="font-ubuntu text-grey block mb-6">{item.date}</span>
                                        <h3 className="text-black font-medium text-base mb-4 h-20 max-h-20">{item.title}</h3>
                                        <div className="-ml-[20px]">
                                            <Button target='_blank' type="readMore" href={item.link}>Leia mais</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>     
                        ))}
                        
                    </Swiper>
                </div>
            )}
            
            <div className="flex justify-center mt-10">
                <Button target='_blank' type="learnMore" href="https://www.ticketlog.com.br/blog/gestao/">Confira todas as notícias</Button>
            </div>
        </div>
  );
}

export default ApiData;
