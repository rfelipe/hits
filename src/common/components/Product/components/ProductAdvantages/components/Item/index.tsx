import React from 'react';
import { AdvantageItemProps, AdvantageItems } from '../../../../../../../types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../../../Buttons';

const DataItem: React.FC<AdvantageItemProps & { renderImage: (props: AdvantageItems) => JSX.Element, isLoading: boolean }> = ({ advantages, renderImage }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  // console.log(advantages)

  if (!advantages) return null;

  return (
    <div className='flex flex-col-reverse md:flex-row pt-3 md:pt-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
                        transition={{ opacity: { duration: .3, ease:"easeInOut" } }}
                        onLoad={handleLoad}
                        exit={{ opacity: 0 }}
      >
        <div className='px-6 md:py-24 md:px-8 md:w-[496px]'>
          <h3 className='text-2xl md:text-4xl font-light mb-8'>{advantages.title}</h3>
          <p className='text-grey md:text-black text-base md:text-lg font-light font-ubuntu mb-8'>{advantages.text}</p>
          <div className='flex justify-center md:justify-start'><Button type="red" href="/">Teste grátis por 60 dias</Button></div>
        </div>

      </motion.div>
      {renderImage({ ...advantages })}
    </div>
  );
};

export default DataItem;
