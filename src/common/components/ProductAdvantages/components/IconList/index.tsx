import React from 'react';
import { Data, IconListProps } from '../../../../../types';
import Icon from '../Icon';

const IconList: React.FC<IconListProps> = ({ data, onItemClick, selectedData }) => {
  return (
    <div className='inline-flex flex-col pl-36'>
      {data.map((item) => (
        <div
          key={item.type}
          onClick={() => onItemClick(item)}
          className={`w-[106px] h-[106px] mb-6 border rounded-full flex justify-center items-center cursor-pointer hover:bg-light-violet transition-all ease-in-out ${
            selectedData && selectedData.type === item.type ? 'border-light-violet bg-light-violet' : 'border-light-violet bg-transparent'
          }`}
        >
          <Icon type={item.type} />
        </div>
      ))}
    </div>
  );
};

export default IconList;
