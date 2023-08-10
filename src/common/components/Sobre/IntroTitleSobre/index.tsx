import React, { useState } from 'react';
import Ribbon from '../../Ribbon';


interface IntroTitleSobreProps {
  labelName?: string;
  title?: string;
}

const IntroTitleSobre: React.FC<IntroTitleSobreProps> = ({
  labelName = 'Sobre a Edenred',
  title = 'Conte com uma líder mundial em soluções para negócios',
}) => {
    return (
        <div className='pt-20 lg:w-3/5 float-right'>
            <div>
              <p className='text-original-red font-bold text-lg'>{labelName}</p>
              <div className='flex'>
                <Ribbon className='mr-3 mt-4' backgroundColor='bg-light-red' width='w-[90px]' height='h-[30px]'/>
                <h2 className='text-6xl font-light w-full'>{title}</h2>
              </div>
            </div>
        </div>
    );
};

export default IntroTitleSobre;
