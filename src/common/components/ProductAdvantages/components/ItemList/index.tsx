import React from 'react';
import { Data, DataItemProps } from '../../../../../types';

const ItemList: React.FC<DataItemProps> = ({ data, renderDataItem }) => {
  return <div>{data.map((item) => renderDataItem(item))}</div>;
};

export default ItemList;
