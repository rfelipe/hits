import React from 'react';

const PrivacyPolicy = () => {
  return (
    <p style={{
      fontSize: '10px',
      fontWeight: '300',
      lineHeight: '13.24px',
      textAlign: 'center',
      width: '458px',
      height: '26px',
      marginTop: '30px',
    }}>
      Você concorda que os dados informados podem ser utilizados para o envio de ofertas de produtos
      e serviços, de acordo com nossa 
      <a
        href="https://www.edenredpay.com.br/politica-privacidade/"
        target="_blank"
        rel="noreferrer"
        style={{ fontWeight: '500', lineHeight: '13.35px' }}>
        Política de Privacidade da Edenred Pay.
      </a>
    </p>
  );
};

export default PrivacyPolicy;
