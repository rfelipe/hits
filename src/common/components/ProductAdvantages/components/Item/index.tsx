import React from 'react';
import { DataItemProps, dataItem } from '../../../../../types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../Buttons';

const DataItem: React.FC<DataItemProps & { renderImage: (props: dataItem) => JSX.Element, isLoading: boolean }> = ({ data, renderImage }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };
  const { dataItem } = data;

  if (!dataItem) return null;

  return (
    <div className='flex'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: .3, ease: "easeInOut" } }}
        onLoad={handleLoad}
        exit={{ opacity: 0 }}
      >
        <div className='py-24 px-8 lg:w-[496px]'>
          <h3 className='text-4xl font-light mb-8'>{dataItem.title}</h3>
          <p className='text-lg font-light font-ubuntu mb-8'>{dataItem.text}</p>
          <Button type={'red'} href='/'>Teste grátis por 60 dias</Button>
        </div>

      </motion.div>
      {renderImage({ ...dataItem, isLoading })}
    </div>
  );
};

export default DataItem;
