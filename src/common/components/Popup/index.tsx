import React, { useState, useEffect } from 'react';
import popupdesk from './imagem/hit.png';

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
            <div>
                Tem mais pra você aqui
            </div>
          {currentScreen === 1 && (
            <div>
              <p>Tela 1</p>
              <button onClick={() => handleOptionClick(2)}>Opção 1</button>
              <button onClick={() => handleOptionClick(3)}>Opção 2</button>
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