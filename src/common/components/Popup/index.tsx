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
import { useMediaQuery } from 'react-responsive';
import popupdesk from './imagem/popupdesk.svg';
import popupdeskthks from './imagem/popupdeskthks.svg';
import gift from './imagem/iconGift.svg';
import arrow from './imagem/iconArrow.svg';
import arrowSimple from './imagem/iconArrowSimple.png'
import arrowMore from './imagem/More.png';
import arrowMoreUp from './imagem/MoreUp.png';
import thnks from './imagem/thnks.png';
import mobilescreen1 from './imagem/mobileScreen1.png';
import mobilescreen2 from './imagem/mobileScreen2.png';
import mobilescreen3 from './imagem/mobileScreen3.png';
import mobilescreen4 from './imagem/mobileScreen4.png';


const Popup = ({ type="", tempo=30000}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        `https://www.ticketlog.com.br/hub/api/contact/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            type: type,
            source: source,
            ...trackerParams,
          }),
        }
      );

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };


  const desktopImage = currentScreen === 4 ? popupdeskthks.src : popupdesk.src;
  let mobileImage;
  let mobileHeight;
  switch (currentScreen) {
    case 1:
      mobileImage = mobilescreen1.src;
      mobileHeight = '240px';
      break;
    case 2:
      mobileImage = mobilescreen2.src;
      mobileHeight = '376px';
      break;
    case 3:
      mobileImage = mobilescreen3.src;
      mobileHeight = '570px';
      break;
    case 4:
      mobileImage = mobilescreen4.src;
      mobileHeight = '240px';
      break;
  }

  return (
    <div className={`fixed ${isOpen ? 'block' : 'hidden'} inset-0 bg-black bg-opacity-50 z-50 max-sm:w-[100%] max-sm:h-[100%]`}>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-20 h-[352px] max-sm:w-[100%]`} style={{ backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: `${isMobile ? mobileHeight : '352px'}`, width: `${currentScreen === 4 ? '670px' : '945px'}`}}>
        {isOpen && (
          <div
            className="absolute top-2 right-[50px] cursor-pointer w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center shadow-md"
            onClick={handleClose}
          >
            <span className="text-black text-2xl max-sm:text-[18px] font-bold max-sm:font-[400]">&times;</span>
          </div>
        )}
        {currentScreen !== 4 && (
          <div className="w-[161px] h-[205px] absolute top-[80px] left-[85px] mx-auto max-sm:invisible">
            <div className="mx-auto w-[49px]">
              <Image alt="" src={gift} />
            </div>
            <p className="text-white text-3xl leading-12 text-center font-light">Tem mais pra você aqui</p>
          </div>
        )}
        {currentScreen === 1 && (
          <div className="w-[461px] h-[141px] absolute top-[33%] max-sm:top-[60px] right-[10%] max-sm:right-[82px] max-sm:w-[208px]">
            <button onClick={() => handleOptionClick(2)} className="font-ubuntu border-[0.77px] border-black px-10 flex justify-between items-center rounded-[20px] h-[37px] w-[461px]  max-sm:w-[208px] text-xs max-sm:text-[10px] font-semibold leading-[13.79px]">
              Quer receber dicas de gestão de despesas?
              <div className="relative top-[2px] left-[35px]">
                <Image src={arrow} alt="Seta" />
              </div>
            </button>
            <button onClick={() => handleOptionClick(3)} className="font-ubuntu border-[0.77px] border-black px-10 mt-[20px] flex justify-between items-center rounded-[20px] h-[37px] w-[461px] max-sm:w-[208px] text-xs max-sm:text-[10px] font-semibold leading-[13.79px]">
              Converse com quem pode te ajudar
              <div className="relative top-[2px] left-[35px]">
                <Image src={arrow} alt="Seta" />
              </div>
            </button>
            <PrivacyPolicy />
          </div>
        )}

        {currentScreen === 2 && (
          <div className="w-[461px] h-[141px] absolute top-[80px] right-[10%] max-sm:left-[70px] max-sm:right-[unset] max-sm:w-[208px] max-sm:top-[65px] max-sm:flex-wrap">
            <p className="text-[18px] font-semibold max-sm:font-[500] leading-[24.03px] text-center mb-[20px] max-sm:mb-[10px]">
              Baixe gratuitamente nossas dicas:
            </p>
            <form>
              <label className="text-[#6D7787] text-[12px] font-ubuntu mb-[10px]">E-mail</label>
              <input
                className="font-ubuntu border-[0.77px] border-D5D8DD rounded-[18px] h-[37px] w-[461px] font-semibold text-[13px] leading-[21.62px] max-sm:w-[208px]"
                type="email"
                value={form2Data.email}
                onChange={(e) => handleChangeForm2("email", e.target.value)}
              />
            </form>
            <PrivacyPolicy />
            <div className="flex flex-nowrap justify-center gap-[20px] mt-[10px] max-sm:flex-wrap max-sm:flex-col-reverse max-sm:content-center max-sm:gap-[10px]">
              <button
                onClick={handleBack}
                className="border-[0.77px] border-[#000000] p-[10] flex justify-center items-center rounded-[18px] h-[37px] w-[136px] max-sm:w-[168px] font-semibold text-[14px] leading-[18.69px]"
              >
                <div className="relative top-[2px] right-[5px]">
                  <Image src={arrowSimple} alt="Seta" />
                </div>
                Voltar
              </button>
              <button
                onClick={handleSend}
                className="border-[0.77px] border-[#F72717] p-[10px] flex justify-center items-center rounded-[18px] h-[37px] w-[168px] max-sm:w-[168px] font-semibold text-[14px] leading-[18.69px] bg-[#F72717] text-white "
              >
                Receber material
              </button>
            </div>
            <div className="mb-[10px] text-red-500 text-[12px] top-[215px] max-sm:top-[260px] absolute top-[200px] right-[35%]  max-sm:right-[26px]">
              {form2Errors.email}
            </div>
          </div>
        )}

        {currentScreen === 3 && (
          <div className="absolute top-[80px] right-[75px] w-[493px] h-[141px] max-sm:w-[208px] max-sm:h-[470px] max-sm:top-[45px]">
            <form className="flex-wrap">
              <div className="flex max-sm:flex-wrap">
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">Nome completo</label>
                  <input
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[215px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="text"
                    value={form3Data.fullName}
                    onChange={(e) => handleChangeForm3("fullName", e.target.value)}
                  />
                </div>
                <div className="ml-[4px]">
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">E-mail</label>
                  <input
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[262px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="email"
                    value={form3Data.email}
                    onChange={(e) => handleChangeForm3("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-[16px] mt-[4px] max-sm:flex-wrap max-sm:gap-[0px]">
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">WhatsApp</label>
                  <InputMask
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[165px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="text"
                    mask="+99 99 99999-9999"
                    value={form3Data.whatsapp}
                    onChange={(e) => handleChangeForm3("whatsapp", e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">CNPJ</label>
                  <InputMask
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[160px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="text"
                    mask="99.999.999/9999-99"
                    value={form3Data.cnpj}
                    onChange={(e) => handleChangeForm3("cnpj", e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">Porte da empresa</label>
                  <select
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[136px] font-semibold text-xs leading-21.62 appearance-none pr-[10px] bg-no-repeat bg-right-center bg-[31px 33px] relative max-sm:w-[208px]"     
                    style={{
                      backgroundImage: `url(${isSelectOpen ? arrowMoreUp.src : arrowMore.src})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: '31px 33px',
                    }}
                    value={form3Data.companySize}
                    onChange={(e) => handleChangeForm3("companySize", e.target.value)}
                    onClick={handleSelectClick}
                  >
                    <option>Pequena</option>
                    <option>Micro</option>
                    <option>Pequena</option>
                    <option>Média</option>
                    <option>Grande</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="flex justify-space-evenly mt-[4px]">
              <PrivacyPolicy />
            </div>
            <div className="flex flex-nowrap justify-center gap-[20px] max-sm:gap-[10px] mt-[10px] max-sm:flex-wrap  max-sm:flex-col-reverse max-sm:content-center">
              <button onClick={handleBack} className="border border-black p-[10px] flex justify-center items-center rounded-[20px] h-[35px] w-[136px] font-semibold text-xs leading-18.69 max-sm:w-[145px]">
                <div className="relative top-[2px] right-[5px]">
                  <Image src={arrowSimple} alt="Seta" />
                </div>
                Voltar
              </button>
              <button onClick={handleSend} className="border p-[10px] flex justify-center items-center rounded-[20px] h-[37px] w-[168px] font-semibold text-xs leading-18.69 bg-[#F72717] text-white max-sm:w-[145px]">Enviar</button>
            </div>
            <div className="mb-10 text-red-500 text-xs absolute top-[215px] w-full flex flex-wrap justify-around flex-row items-stretch max-sm:top-[445px]">
              <p>{form3Errors.fullName}</p>
              <p>{form3Errors.email}</p>
              <p>{form3Errors.whatsapp}</p>
              <p>{form3Errors.cnpj}</p>
            </div>
          </div>
        )}

        {currentScreen === 4 && (
          <div className="w-442 max-sm:w-[243px] h-[164px] max-sm:h-[300px] mx-auto mt-[90px] max-sm:mt-[-55px] max-sm:ml-[-30px]">
            <div className="flex justify-around mb-[10px]">
              <Image src={thnks} alt="Seta" className="w-51 h-51" />
            </div>
            <div className="flex justify-around">
              <p className="text-center max-sm:text-[16px] max-sm:text-[16px]">
                Pronto, agora é só aguardar! Em breve entraremos em contato com você,
                e poderá ser via whatsapp ou ligação. Fique de olho.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;