import React from 'react';
import { Product } from '../../../types';
import IntroSection from '../../components/Product/components/Intro';
import PriceSection from '../../components/Product/components/Price';
import EasyToUse from '../../components/EasyToUse';
import WhoEdenred from '../../components/WhoEdenred';
import FaqSection from '../../components/Product/components/Faq';
import VideoSection from '../../components/Product/components/Video';
import WantMoreSuccessSection from '../../components/Product/components/WantMoreSuccess';
import AdvantagesSection from '../../components/Product/components/ProductAdvantages';
import CarouselSection from '../../components/Product/components/Carousel';

interface ProductTemplateProps {
  product: Product;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const { intro, carouselItems, price, faq, video, success, advantages } = product;

  return (
    <div className="pt-8 md:pt-20 overflow-x-hidden">
        <IntroSection intro={intro} />
        <AdvantagesSection advantages={advantages} />
        <CarouselSection items={carouselItems} />
        <PriceSection prices={price} />
        <EasyToUse/>
        <VideoSection videos={video} />
        <WhoEdenred/>
        <FaqSection faqs={faq} />
        <WantMoreSuccessSection success={success} />
    </div>
  );
};

export default ProductTemplate;
