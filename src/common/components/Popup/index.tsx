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
import error from './imagem/errorIcon.png';


const Popup = ({ type="", tempo=30000}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  const [form2Focus, setForm2Focus] = useState(false);
  const [form3Focus, setForm3Focus] = useState(false);
  const [form3EmailFocus, setForm3EmailFocus] = useState(false);
  const [form3WhatssFocus, setForm3WhatssFocus] = useState(false);
  const [form3CnpjFocus, setForm3CnpjFocus] = useState(false);
  const [form3CompanyFocus, setForm3CompanyFocus] = useState(false);
  const [formType, setFormType] = useState("");
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
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    porte: "",
  });

  const [form2Errors, setForm2Errors] = useState<{ email?: string }>({});
  
  const [form3Errors, setForm3Errors] = useState<{ name?: string; email?: string; phone?: string; cnpj?: string; porte?:string }>({});


  const form2Schema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("Insira seu e-mail."),
  });

  const hasRepeatedOrSequentialNumbers = (value: string): boolean => {
    const sequentialNumbersRegex = /(0123456789)|(9876543210)/;
  
    return sequentialNumbersRegex.test(value) || /(.)\1{2,}/.test(value);
  };

  const form3Schema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z ]*$/, 'Nome inválido').required("Insira seu nome."),
    email: Yup.string().email("E-mail inválido").required("Insira seu e-mail."),
    phone: Yup.string()
    .test("valid-phone", "Número inválido", (value?: string) => {
      const restOfNumber = value.slice(2);
      const hasRepeatedOrSequentialNumbers = /(.)\1{2,}/.test(restOfNumber);

      return !hasRepeatedOrSequentialNumbers;
    })
    .required("Insira seu telefone"),
    cnpj: Yup.string()
      .test("valid-cnpj", "CNPJ inválido", (value?: string) => {
        return isValidCNPJ(value || "");
      })
      .required("Insira seu cnpj"),
    porte: Yup.string()
    .required("Selecione o porte.")
    .notOneOf([""], "Selecione o porte."),
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
          await sendFormData(form2Data, type);
          setFormType('news'); // Defina o formType aqui
          setCurrentScreen(4);
        } catch (error) {
          console.error("Erro de validação:", error.errors);
          setForm2Errors(getValidationErrors(error));
        }
        break;
      case 3:
        try {
          await form3Schema.validate(form3Data, { abortEarly: false });
          await sendFormData(form3Data, type);
          setFormType('contato'); // Defina o formType aqui
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
        `https://server.dexdigital.com.br/ticketlog-hub/api/contact/send`,
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
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-20 h-[352px]`} 
        style={{
          backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          height: `${isMobile ? mobileHeight : '352px'}`,
          width: `${isMobile ? 'inherit' : (currentScreen === 4 ? '645px' : '945px')}`
        }}>
        {isOpen && (
          <div
            className="absolute top-2 right-[50px] max-sm:right-[0] max-sm:left-[275px] cursor-pointer w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center shadow-md"
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
          <div className="w-[461px] h-[141px] absolute top-[33%] max-sm:top-[60px] right-[10%] max-sm:left-[70px] max-sm:w-[208px]">
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
              Inscreva-se na nossa newsletter!
            </p>
            <form>
              <label className="text-[#6D7787] text-[12px] font-ubuntu mb-[10px]">E-mail</label>
              <input
                className="font-ubuntu border-[0.77px] border-D5D8DD rounded-[18px] h-[37px] w-[461px] font-semibold text-[13px] leading-[21.62px] max-sm:w-[208px]"
                type="email"
                value={form2Data.email}
                onChange={(e) => handleChangeForm2("email", e.target.value)}
                onFocus={() => setForm2Focus(true)}
                onBlur={() => setForm2Focus(false)}
              />
              <div className="mb-[10px] text-red-500 text-[10px] max-sm:top-[90px] absolute top-[75px] right-[2%]  max-sm:right-[26px] flex">
              {(form2Errors.email && !form2Focus) && (
                <>
                  <div className="relative right-[5px] flex items-center">
                    <Image src={error} alt="Seta" />
                  </div>
                  {form2Errors.email}
                </>
              )}
              </div>
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
                Eu quero
              </button>
            </div>
          </div>
        )}

        {currentScreen === 3 && (
          <div className="absolute top-[80px] max-sm:right-[unset] right-[75px]  w-[493px] h-[141px] max-sm:w-[208px] max-sm:h-[470px] max-sm:top-[45px]">
            <form className="flex-wrap">
              <div className="flex max-sm:flex-wrap">
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">Nome completo</label>
                  <input
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[215px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="text"
                    value={form3Data.name}
                    onChange={(e) => handleChangeForm3("name", e.target.value)}
                    onFocus={() => setForm3Focus(true)}
                    onBlur={() => setForm3Focus(false)}
                  />
                  <div className="mb-[10px] text-red-500 text-[10px] max-sm:top-[35px] max-sm:left-[40%]  absolute top-[35px] left-[23%]   flex">
                  {(form3Errors.name && !form3Focus) && (
                    <>
                      <div className="relative right-[5px] flex items-center">
                        <Image src={error} alt="Seta" />
                      </div>
                      {form3Errors.name}
                    </>
                  )}
                  </div>
                </div>
                <div className="ml-[4px]">
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">E-mail</label>
                  <input
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[262px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="email"
                    value={form3Data.email}
                    onChange={(e) => handleChangeForm3("email", e.target.value)}
                    onFocus={() => setForm3EmailFocus(true)}
                    onBlur={() => setForm3EmailFocus(false)}
                  />
                  <div className="mb-[10px] text-red-500 text-[10px] max-sm:top-[95px] max-sm:left-[40%] absolute top-[35px] right-[2%]   flex">
                  {(form3Errors.email && !form3EmailFocus) && (
                    <>
                      <div className="relative right-[5px] flex items-center">
                        <Image src={error} alt="Seta" />
                      </div>
                      {form3Errors.email}
                    </>
                  )}
                  </div>
                </div>
              </div>
              <div className="flex gap-[16px] mt-[4px] max-sm:flex-wrap max-sm:gap-[0px]">
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">phone</label>
                  <InputMask
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[156px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="text"
                    mask="(99) 99999-9999"
                    value={form3Data.phone}
                    onChange={(e) => handleChangeForm3("phone", e.target.value)}
                    onFocus={() => setForm3WhatssFocus(true)}
                    onBlur={() => setForm3WhatssFocus(false)}
                  />
                  <div className="mb-[10px] text-red-500 text-[10px] max-sm:top-[160px] max-sm:left-[40%] absolute top-[100px] left-[12%]  flex">
                    {(form3Errors.phone && !form3WhatssFocus) && (
                      <>
                        <div className="relative right-[5px] flex items-center">
                          <Image src={error} alt="Seta" />
                        </div>
                        {form3Errors.phone}
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">CNPJ</label>
                  <InputMask
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[160px] font-semibold text-xs leading-21.62 max-sm:w-[208px]"
                    type="text"
                    mask="99.999.999/9999-99"
                    value={form3Data.cnpj}
                    onChange={(e) => handleChangeForm3("cnpj", e.target.value)}
                    onFocus={() => setForm3CnpjFocus(true)}
                    onBlur={() => setForm3CnpjFocus(false)}
                  />
                  <div className="mb-[10px] text-red-500 text-[10px] max-sm:top-[222px] max-sm:left-[40%] absolute top-[100px] left-[49%] flex">
                    {(form3Errors.cnpj && !form3CnpjFocus) && (
                      <>
                        <div className="relative right-[5px] flex items-center">
                          <Image src={error} alt="Seta" />
                        </div>
                        {form3Errors.cnpj}
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <label className="font-ubuntu text-gray-600 text-xs mb-[2px] max-sm:text-[10px]">Porte da empresa</label>
                  <select
                    className="font-ubuntu border border-gray-300 rounded-[20px] h-[37px] w-[145px] font-semibold text-xs leading-21.62 appearance-none pr-[10px] bg-no-repeat bg-right-center bg-[31px 33px] relative max-sm:w-[208px]"     
                    style={{
                      backgroundImage: `url(${isSelectOpen ? arrowMoreUp.src : arrowMore.src})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: '31px 33px',
                    }}
                    value={form3Data.porte}
                    onChange={(e) => handleChangeForm3("porte", e.target.value)}
                    onClick={handleSelectClick}
                    onFocus={() => setForm3CompanyFocus(true)}
                    onBlur={() => setForm3CompanyFocus(false)}
                  >
                    <option value="">Porte da empresa</option>
                    <option value="Pequena">Pequena</option>
                    <option value="Micro">Micro</option>
                    <option value="Pequena">Pequena</option>
                    <option value="Média">Média</option>
                    <option value="Grande">Grande</option>
                  </select>
                  <div className="mb-[10px] text-red-500 text-[10px] max-sm:top-[277px] max-sm:left-[40%] absolute top-[127px] left-[75%] flex">
                  {(form3Errors.porte && !form3CompanyFocus) && (
                    <>
                      <div className="relative right-[5px] flex items-center">
                        <Image src={error} alt="Seta" />
                      </div>
                      {form3Errors.porte}
                    </>
                  )}
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-space-evenly mt-[10px]">
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
          </div>
        )}

        {currentScreen === 4 && (
          <div className="w-442 max-sm:w-[243px] h-[164px] max-sm:h-[300px] mx-auto  max-sm:mt-[-55px] max-sm:ml-[-30px]">
            <div className="flex justify-around mb-[10px]">
              <Image src={thnks} alt="Seta" className="w-51 h-51" />
            </div>
            <div className="block justify-around">
              <p className="text-center max-sm:text-[16px] max-sm:text-[16px]">Pronto, agora é só aguardar!</p>
              <p className="text-center max-sm:text-[16px] max-sm:text-[16px] max-sm:w-[unset] max-sm:ml-[unset] w-[534px] ml-[-16px]">
                {formType === "news"
                ? "Fique de olho no seu e-mail para não perder nenhuma novidade 😊!"
                : "Em breve entraremos em contato com você, e poderá ser via whatsapp  ou ligação."}
              </p>
              <p className="text-center max-sm:text-[16px] max-sm:text-[16px] max-sm:w-[unset] max-sm:ml-[unset] w-[534px] ml-[-16px]">
                {formType === "news"
                ? ""
                : "Fique de olho!😊"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;