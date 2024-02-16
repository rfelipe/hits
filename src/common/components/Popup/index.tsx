import React, { useState, useEffect } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import Image from "next/image";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import {
    isValidMobilePhone,
    isValidCNPJ,
} from "@brazilian-utils/brazilian-utils";
import DataLayer from "../../lib/DataLayer";
import popupdesk from './imagem/popupdesk.svg';
import popupdeskthks from './imagem/popupdeskthks.svg';
import gift from './imagem/iconGift.svg';
import arrow from './imagem/iconArrow.svg';
import arrowSimple from './imagem/iconArrowSimple.png'
import arrowMore from './imagem/More.png';
import arrowMoreUp from './imagem/MoreUp.png';
import thnks from './imagem/thnks.png';

const Popup = ({ type="", tempo=30000}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, tempo);

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

  const handleClose = () => {
    closeModal();
  };

  const [form2Data, setForm2Data] = useState({
    email: "",
    // ... (outros campos do form2)
  });

  const [form3Data, setForm3Data] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    cnpj: "",
    companySize: "Pequena empresa",
  });

  const [form2Errors, setForm2Errors] = useState<{ email?: string }>({});
  
  const [form3Errors, setForm3Errors] = useState<{ fullName?: string; email?: string; whatsapp?: string; cnpj?: string }>({});


  const form2Schema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("Campo E-mail é obrigatório."),
    // ... (outras validações do form2)
  });

  const form3Schema = Yup.object().shape({
    fullName: Yup.string().required("Campo nome é obrigatório."),
    email: Yup.string().email("E-mail inválido").required("Campo E-mail é obrigatório."),
    whatsapp: Yup.string().test(
      "whatsapp",
      "Número de WhatsApp inválido.",
      isValidMobilePhone
    ),
    cnpj: Yup.string().test("cnpj", "CNPJ inválido.", isValidCNPJ),
    // ... (outras validações do form3)
  });

  const handleChangeForm2 = (field, value) => {
    setForm2Data((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleChangeForm3 = (field, value) => {
    setForm3Data((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSend = async () => {
    switch (currentScreen) {
      case 2:
        try {
          await form2Schema.validate(form2Data, { abortEarly: false });
          await sendFormData(form2Data,type);
          setCurrentScreen(4);
        } catch (error) {
          console.error("Erro de validação:", error.errors);
          setForm2Errors(getValidationErrors(error));
        }
        break;
      case 3:
        try {
          await form3Schema.validate(form3Data, { abortEarly: false });
          await sendFormData(form3Data,type);
          setCurrentScreen(4);
        } catch (error) {
          console.error("Erro de validação:", error.errors);
          setForm3Errors(getValidationErrors(error));
        }
        break;
      default:
        break;
    }
  };

  const getValidationErrors = (error) => {
    const validationErrors = {};
    error.inner.forEach((err) => {
      validationErrors[err.path] = err.message;
    });
    return validationErrors;
  };

  const sendFormData = async (formData, type) => {
    try {
      const trackerParams = await DataLayer.getTrackerParams();
      let source = "";
  
      if (type === "hits-popup-home") {
        source = currentScreen === 2 ? "hits-popup-home-news" : "hits-popup-home-lead-despesas";
      } else if (type === "hits-popup-despesas") {
        source = currentScreen === 2 ? "hits-popup-despesas-news" : "hits-popup-despesas-lead";
      }
  
      await fetch(
        process.env.NEXT_PUBLIC_HUB_BASE_URL + '/api/contact/send',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            type: type,
            source: source, // Adiciona a propriedade source
            ...trackerParams,
          }),
        }
      );

      // Lógica adicional após o envio, se necessário
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      // Tratar erros no envio, exibindo mensagens, etc.
    }
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', height: '352px',
                    width: `${currentScreen === 4 ? '670px' : '945px'}`, backgroundImage: `url(${currentScreen === 4 ? popupdeskthks.src : popupdesk.src})`
                  }}>
          {isOpen && (
            <div
              style={{ position: 'absolute',top: '2px',right: '72px',cursor: 'pointer',width: '35px',height: '35px',borderRadius: '50%',
                backgroundColor: '#ffffff',display: 'flex',alignItems: 'center',justifyContent: 'center',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              }}
              onClick={handleClose}
            >
              <span style={{ color: '#000000', fontSize: '20px', fontWeight: 'bold' }}>
                &times; {/* Caractere "x" */}
              </span>
            </div>
          )}
        {currentScreen != 4 && (              
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
            <button onClick={() => handleOptionClick(3)} className="font-ubuntu" style={{ border: '0.77px solid #000000', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '18px', height: '37px', width: '461px', marginTop: '20px', fontSize: '12px', fontWeight: 400, lineHeight: '13.79px' }}>
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
              <input
                className='font-ubuntu'
                type="email"
                value={form2Data.email}
                onChange={(e) => handleChangeForm2("email", e.target.value)}
                style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '461px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}
              />
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
              <div style={{ marginBottom: '10px', color: 'red', fontSize: '12px',position: 'absolute',top: '200px',right: '35%'}}>
                {form2Errors.email}
              </div>
          </div>
        )}

        {currentScreen === 3 && (
          <div style={{ width: '493px', height: '141px', position: 'absolute', top: '80px', right: '8%' }}>
            <form>
              <div style={{ display: 'flex' }}>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>Nome completo</label>
                  <input
                    className='font-ubuntu'
                    type="text"
                    value={form3Data.fullName}
                    onChange={(e) => handleChangeForm3("fullName", e.target.value)}
                    style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '215px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>E-mail</label>
                  <input
                    className='font-ubuntu'
                    type="email"
                    value={form3Data.email}
                    onChange={(e) => handleChangeForm3("email", e.target.value)}
                    style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '262px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>WhatsApp</label>
                  <InputMask
                    className='font-ubuntu'
                    type="text"
                    mask="+99 99 99999-9999"
                    value={form3Data.whatsapp}
                    onChange={(e) => handleChangeForm3("whatsapp", e.target.value)}
                    style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '165px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>CNPJ</label>
                  <InputMask
                    className='font-ubuntu'
                    type="text"
                    mask="99.999.999/9999-99"
                    value={form3Data.cnpj}
                    onChange={(e) => handleChangeForm3("cnpj", e.target.value)}
                    style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '160px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#6D7787', fontSize: '12px', marginBottom: '10px' }} className='font-ubuntu'>Porte da empresa</label>
                  <select
                    className='font-ubuntu'
                    value={form3Data.companySize}
                    onChange={(e) => handleChangeForm3("companySize", e.target.value)}
                    style={{ border: '0.77px solid #D5D8DD', borderRadius: '18px', height: '37px', width: '136px', fontWeight: 700, fontSize: '13px', lineHeight: '21.62px', appearance: 'none', paddingRight: '30px', backgroundImage: `url(${isSelectOpen ? arrowMoreUp.src : arrowMore.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '31px 33px' }}
                  >
                    <option>Pequena</option>
                    <option>Micro</option>
                    <option>Pequena</option>
                    <option>Média</option>
                    <option>Grande</option>
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
            <div style={{ marginBottom: '10px', color: 'red', fontSize: '12px',position: 'absolute',top: '210px',width: '100%',display: 'flex',flexWrap: 'wrap',justifyContent: 'space-around',flexDirection: 'row', alignItems: 'stretch'}}>
                <p>{form3Errors.fullName}</p>
                <p>{form3Errors.email}</p>
                <p>{form3Errors.whatsapp}</p>
                <p>{form3Errors.cnpj}</p>
            </div>
          </div>
        )}

        {currentScreen === 4 && (
          <div style={{ width:'442px',height:'164px',marginLeft: 'auto', marginRight: 'auto', marginTop: '90px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
              <Image src={thnks} alt="Seta" style={{ width:'51px',height:'51px'}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ textAlign:'center' }}>
                  Pronto, agora é só aguardar!
                  Em breve entraremos em contato com você,
                  e poderá ser via whatsapp ou ligação.
                  Fique de olho.
                </p>
            </div>
            {/* <button onClick={closeModal}>Fechar</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;