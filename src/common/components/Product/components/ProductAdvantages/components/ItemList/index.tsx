import React from 'react';
import { Advantage, AdvantagesListProps } from '../../../../../../../types';

const ItemList: React.FC<AdvantagesListProps> = ({ advantages, renderDataItem }) => {
  return <div className='relative md:static w-full'>{advantages.map((item) => renderDataItem(item))}</div>;
};

export default ItemList;
