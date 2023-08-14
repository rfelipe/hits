import React, { useState } from 'react';
import Button from '../Buttons';

interface IntroTitleProductProps {
  labelName?: string;
  labelColor?: string;
  productName?: string;
  title?: string;
  text?: string;
  showInput?: boolean;
}

const IntroTitleProduct: React.FC<IntroTitleProductProps> = ({
  labelName = 'Hit #1',
  labelColor = 'bg-light-violet',
  productName = 'Controle de Despesas',
  title = 'Quer mais sucesso no dia a dia do seu negócio?',
  text = 'Conte com a gente para o controle e organização dos gastos da sua empresa',
  showInput = true,
}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='pt-20 text-center'>
            <span className={`text-base py-2 px-4 rounded-full inline-block ${labelColor}`} aria-label={labelName}>{labelName}</span>
            <h1 className='text-lg font-bold text-original-red my-4' title={productName}>{productName}</h1>
            <h2 className='text-6xl font-light lg:w-7/12 mx-auto'>{title}</h2>
            <p className='text-lg font-bold lg:w-1/4 my-6 mx-auto font-ubuntu'>{text}</p>

            {showInput && (
                <div className='py-2 relative w-80 mx-auto'>
                    <input
                        type='email'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder='Coloque seu e-mail e saiba mais'
                        className='border border-black rounded-full px-6 py-2 font-light text-sm bg-transparent w-full h-12 placeholder:text-black focus:border-black focus:ring-black font-ubuntu focus:ring-0'
                    />
                    <button type='submit' className='w-16 h-16 bg-original-red rounded-full absolute right-0 top-0 hover:bg-black flex items-center justify-center'>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1579 1.67622L23.2956 12.4209L15.1579 23.1656C14.9033 23.5016 14.9637 23.9853 15.2918 24.2457C15.6207 24.506 16.0932 24.4447 16.3477 24.1087L24.8424 12.8923C24.9475 12.7533 25 12.5873 25 12.4209C25 12.2545 24.9475 12.0881 24.8424 11.9495L16.3477 0.733496C16.0932 0.397489 15.6207 0.335783 15.2918 0.596548C14.9633 0.856914 14.9029 1.34062 15.1579 1.67662L15.1579 1.67622Z" fill="white" stroke="white" strokeWidth="0.5"/>
                            <rect y="11.4222" width="24" height="1.99766" rx="0.998831" fill="white"/>
                        </svg>
                    </button>
                    <p className='text-black text-xs font-ubuntu lg:w-56 mx-auto mt-4 font-normal'>Ao continuar, você concorda com a <a className='underline cursor-pointer font-normal font-ubuntu'>Política de Privacidade</a> da Edenred Hits</p>
                </div>
            )}
            
            {!showInput && (
                <Button type="red" href="/">Teste grátis por 60 dias</Button>
            )}
        </div>
    );
};

export default IntroTitleProduct;
