import React from 'react';
import { Advantage, IconListProps } from '../../../../../../../types';
import Icon from '../Icon';

const IconList: React.FC<IconListProps> = ({ advantages, onItemClick, selectedData }) => {
  const colors = advantages[0].colors.map((colors) => { return colors })
  return (
    <div className='inline-flex flex-row justify-center md:flex-col px-6 md:pl-36 gap-4 md:gap-0'>
      {advantages[0].items.map((advantage, index) => (
        <div  
          key={index}
          onClick={() => onItemClick(advantage)}
          className={`w-[76px] h-[76px] p-4 md:p-0 md:w-[86px] md:h-[86px] 2xl:w-[106px] 2xl:h-[106px] mb-3 border rounded-full flex justify-center items-center cursor-pointer hover:bg-light-violet transition-all ease-in-out`}
          style={{ backgroundColor: selectedData && selectedData.type === advantage.type ? colors[0] : 'transparent', borderColor: colors[0] }}

        >
          <Icon type={advantage.type} />
        </div>
      ))}
    </div>
  );
};

export default IconList;
