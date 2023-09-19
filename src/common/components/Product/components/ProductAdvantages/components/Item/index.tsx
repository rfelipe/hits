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

  const Anchor = () => {
    const form = document.querySelector("#form-request-budget");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  // console.log(advantages)

  if (!advantages) return null;

  return (
    <div className='flex flex-col-reverse md:flex-row pt-3 md:pt-0 justify-between items-center'>
      <motion.div className='flex items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
                        transition={{ opacity: { duration: .3, ease:"easeInOut" } }}
                        onLoad={handleLoad}
                        exit={{ opacity: 0 }}
      >
        <div className='px-6 md:py-24 md:px-0 md:pl-6 md:w-[460px] 2xl:w-[496px]'>
          <h3 className='text-2xl md:text-4xl font-light mb-8'>{advantages.title}</h3>
          <p className='text-grey md:text-black text-base md:text-lg font-light font-ubuntu mb-8'>{advantages.text}</p>
          <div className='flex justify-center md:justify-start'>
          <div onClick={Anchor} className="button bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border cursor-pointer font-normal inline-flex items-center lg:justify-between justify-center max-h-12 max-w-32">
              <a className="flex items-center gap-3">Quero conhecer</a>
          </div>
          </div>
        </div>

      </motion.div>
      {renderImage({ ...advantages })}
    </div>
  );
};

export default DataItem;
