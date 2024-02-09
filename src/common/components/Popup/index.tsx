import React, { useState, useEffect } from 'react';
import Image from "next/image";
import popupdesk from './imagem/popupdesk.svg';
import gift from './imagem/iconGift.svg';
import arrow from './imagem/iconArrow.svg';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsOpen(true);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const closeModal = () => {
      setIsOpen(false);
      setCurrentScreen(1);
    };
  
    const handleOptionClick = (option) => {
      setCurrentScreen(option);
    };
  
    const handleBack = () => {
      setCurrentScreen(1); // Sempre volta para a tela 1
    };
  
    const handleSend = () => {
      // Lógica para enviar o formulário
      // Você pode implementar a lógica de envio aqui
      // Após o envio, você pode chamar setCurrentScreen(4) para ir para a tela 4
    };
  
    return (
      <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)',zIndex:9999 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '945px',height:'352px', padding: '20px','backgroundImage': `url(${popupdesk.src})`}}>
            <div style={{ width:'161px', height:'205px',position: 'absolute',top: '80px',left:'85px'}}>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '49px'}}>
                    <Image alt="" src={gift}  />
                </div>
                <p style={{ fontSize:'38px',lineHeight:'48px', textAlign:'center', fontWeight:300, color:'#FFFFFF'}}>Tem mais pra você aqui</p>
            </div>
          {currentScreen === 1 && (
            <div style={{ width:'461px', height:'141px',position: 'absolute',top: '33%',right: '10%'}}>

                <button onClick={() => handleOptionClick(2)} className="font-ubuntu"
                        style={{
                            border: '0.77px solid #000000',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '18px',
                            height: '37px',
                            width: '461px',
                            fontSize:'12px',
                            fontWeight:400,
                            lineHeight:'13.79px'
                        }}>
                        Quer receber dicas de gestão de despesas?
                    <div style={{position: 'relative',top: '2px',left: '7px'}}>
                        <Image src={arrow} alt="Seta" />
                    </div>
                </button>
                <button onClick={() => handleOptionClick(3)} className="font-ubuntu"
                        style={{
                            border: '0.77px solid #000000',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '18px',
                            height: '37px',
                            width: '461px',
                            marginTop:'20px',
                            fontSize:'12px',
                            fontWeight:400,
                            lineHeight:'13.79px'
                        }}>
                        Converse com quem pode te ajudar
                    <div style={{position: 'relative',top: '2px',left: '7px'}}>
                        <Image src={arrow} alt="Seta" />
                    </div>
                </button>
                <p style={{
                    fontSize:'10px',
                    fontWeight:'300',
                    lineHeight:'13.24px',
                    textAlign:'center',
                    width:'458px',
                    height:'26px',
                    marginTop: '30px',
                }}>
                Você concorda que os dados informados podem ser utilizados para o envio de ofertas de produtos
                    e serviços, de acordo com nossa <a 
                                                        href="https://www.edenredpay.com.br/politica-privacidade/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={{fontWeight:'500',lineHeight:'13.35px'}}>
                                                            Política de Privacidade da Edenred Pay.
                                                    </a>
                </p>
            </div>
          )}
  
          {currentScreen === 2 && (
            <div>
              <p>Tela 2</p>
              {/* Formulário com campo de email */}
              <button onClick={handleBack}>Voltar</button>
              <button onClick={handleSend}>Enviar</button>
            </div>
          )}
  
          {currentScreen === 3 && (
            <div>
              <p>Tela 3</p>
              {/* Formulário com campos de nome e telefone */}
              <button onClick={handleBack}>Voltar</button>
              <button onClick={handleSend}>Enviar</button>
            </div>
          )}
  
          {currentScreen === 4 && (
            <div>
              <p>Tela 4 - Sucesso!</p>
              <p>Agradecemos pelo envio.</p>
              <button onClick={closeModal}>Fechar</button>
            </div>
          )}
        </div>
      </div>
    );
  };
export default Popup;