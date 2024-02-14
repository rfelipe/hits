import React, { useState, useEffect } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import Image from "next/image";
import InputMask from "react-input-mask";
import popupdesk from './imagem/popupdesk.svg';
import popupdeskthks from './imagem/popupdeskthks.svg';
import gift from './imagem/iconGift.svg';
import arrow from './imagem/iconArrow.svg';
import arrowSimple from './imagem/iconArrowSimple.png'
import arrowMore from './imagem/More.png';
import arrowMoreUp from './imagem/MoreUp.png';

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
    setCurrentScreen(1);
  };

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSend = () => {
    // Lógica para enviar o formulário
    // Você pode implementar a lógica de envio aqui
    // Após o envio, você pode chamar setCurrentScreen(4) para ir para a tela 4
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', 
                    width: `${currentScreen === 4 ? '670px' : '945px'}`, 
                    height: '352px',
                    backgroundImage: `url(${currentScreen === 4 ? popupdeskthks.src : popupdesk.src})`
                    }}>
        {currentScreen === 1 && (              
        <div style={{ width: '161px', height: '205px', position: 'absolute', top: '80px', left: '85px' }}>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '49px' }}>
            <Image alt="" src={gift} />
          </div>
          <p style={{ fontSize: '38px', lineHeight: '48px', textAlign: 'center', fontWeight: 300, color: '#FFFFFF' }}>Tem mais pra você aqui</p>
        </div>)}
        {currentScreen === 1 && (
          <div style={{ width: '461px', height: '141px', position: 'absolute', top: '33%', right: '10%' }}>

            <button onClick={() => handleOptionClick(2)} className="font-ubuntu" style={{ border: '0.77px solid #000000', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '18px', height: '37px', width: '461px', fontSize: '12px', fontWeight: 400, lineHeight: '13.79px' }}>
              Quer receber dicas de gestão de despesas?
              <div style={{ position: 'relative', top: '2px', left: '7px' }}>
                <Image src={arrow} alt="Seta" />
              </div>
            </button>
            <button onClick={() => handleOptionClick(4)} className="font-ubuntu" style={{ border: '0.77px solid #000000', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '18px', height: '37px', width: '461px', marginTop: '20px', fontSize: '12px', fontWeight: 400, lineHeight: '13.79px' }}>
              Converse com quem pode te ajudar
              <div style={{ position: 'relative', top: '2px', left: '7px' }}>
                <Image src={arrow} alt="Seta" />
              </div>
            </button>
            <PrivacyPolicy />
          </div>
        )}

        {currentScreen === 2 && (
          <div style={{ width: '461px', height: '141px', position: 'absolute', top: '80px', right: '10%' }}>
            <p style={{ fontSize: '18px', fontWeight: 500, lineHeight: '24.03px', textAlign: 'center', marginBottom: '20px' }}>Baixe gratuitamente nossas dicas:</p>
            <form>
              <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>E-mail</label>
              <input className='font-ubuntu' type="email" style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '461px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}></input>
            </form>
            <PrivacyPolicy />
            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
              <button onClick={handleBack} style={{ border: '0.77px solid #000000', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', height: '37px', width: '136px', fontSize: '14px', fontWeight: 500, lineHeight: '18.69px' }}>
                <div style={{ position: 'relative', top: '2px', right: '5px' }}>
                  <Image src={arrowSimple} alt="Seta" />
                </div>
                Voltar
              </button>
              <button onClick={handleSend} style={{ border: '0.77px solid', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', height: '37px', width: '168px', fontSize: '14px', fontWeight: 500, lineHeight: '18.69px', background: 'red', color: 'white' }}>Receber material</button>
            </div>
          </div>
        )}

        {currentScreen === 3 && (
          <div style={{ width: '493px', height: '141px', position: 'absolute', top: '80px', right: '8%' }}>
            <form>
              <div style={{ display: 'flex' }}>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>Nome completo</label>
                  <input className='font-ubuntu' type="text" style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '215px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}></input>
                </div>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>E-mail</label>
                  <input className='font-ubuntu' type="email" style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '262px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}></input>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>WhatsApp</label>
                  <InputMask className='font-ubuntu' type="text" mask="+99 99 99999-9999" style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '165px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }} />
                </div>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>CNPJ</label>
                  <InputMask className='font-ubuntu' type="text" mask="99.999.999/9999-99" style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '160px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px', }} />
                </div>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>Porte da empresa</label>
                  <select className='font-ubuntu' style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '136px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px', appearance: 'none', paddingRight: '30px', backgroundImage: `url(${isSelectOpen ? arrowMoreUp.src : arrowMore.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '31px 33px' }} onClick={handleSelectClick}>
                    <option>Pequena empresa</option>
                    <option>Média empresa</option>
                    <option>Grande empresa</option>
                  </select >
                </div>
              </div>
            </form>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <PrivacyPolicy />
            </div>
            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
              <button onClick={handleBack} style={{ border: '0.77px solid #000000', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', height: '37px', width: '136px', fontSize: '14px', fontWeight: 500, lineHeight: '18.69px' }}>
                <div style={{ position: 'relative', top: '2px', right: '5px' }}>
                  <Image src={arrowSimple} alt="Seta" />
                </div>
                Voltar
              </button>
              <button onClick={handleSend} style={{ border: '0.77px solid', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', height: '37px', width: '168px', fontSize: '14px', fontWeight: 500, lineHeight: '18.69px', background: 'red', color: 'white' }}>Enviar</button>
            </div>
          </div>
        )}

        {currentScreen === 4 && (
          <div>
            <div style={{ position: 'relative', top: '2px', right: '5px' }}>
              <Image src={arrowSimple} alt="Seta" />
            </div>
            <p>Pronto, agora é só aguardar!
                Em breve entraremos em contato com você,
                e poderá ser via whatsapp ou ligação.
                Fique de olho.</p>
            {/* <button onClick={closeModal}>Fechar</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;