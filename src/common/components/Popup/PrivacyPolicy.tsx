import React from 'react';

const PrivacyPolicy = () => {
  return (
    <p className="text-[10px] font-[300] max-sm:leading-[9px] leading-[13.24px] text-center w-[458px] h-[26px] mt-[10px] max-sm:text-[7px] max-sm:w-[100%]">
      Você concorda que os dados informados podem ser utilizados para o envio de ofertas de produtos
      e serviços, de acordo com nossa{' '}
      <a
        href="https://www.edenredpay.com.br/politica-privacidade/"
        target="_blank"
        rel="noreferrer"
        className="font-[500]"
      >
        Política de Privacidade da Edenred Pay.
      </a>
    </p>
  );
}

export default PrivacyPolicy;
