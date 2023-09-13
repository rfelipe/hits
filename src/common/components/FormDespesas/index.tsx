import Image from "next/image";
import Field, { useFormik } from "formik";
import InputMask from "react-input-mask";
import { useState } from "react";
import * as Yup from "yup";
import {
  isValidMobilePhone,
  isValidCNPJ,
} from "@brazilian-utils/brazilian-utils";
import DataLayer from "../../lib/DataLayer";
import selectImage from "../FormDespesas/images/More.png"
const initialValues = {
  name: "",
  email: "",
  phone: "",
  cnpj: "",
  porte: "",
};



const validationSchema = Yup.object({
  name: Yup.string().required("Insira seu nome"),
  email: Yup.string().email("E-mail inválido").required("Insira seu e-mail"),
  phone: Yup.string()
    .test("valid-phone", "Número inválido", (value?: string) => {
      return isValidMobilePhone(value || "");
    })
    .required("Insira seu telefone"),
  cnpj: Yup.string()
    .test("valid-cnpj", "CNPJ inválido", (value?: string) => {
      return isValidCNPJ(value || "");
    })
    .required("Insira seu cnpj"),
  // porte: Yup.string().required("Escolha o porte da empresa").oneOf(["micro", "pequena", "grande", "medio"])
});

const Form = () => {
  const [sending, setSending] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setSending(true);
      try {
        const { name, email, phone, cnpj, porte } = values;
        const trackerParams = await DataLayer.getTrackerParams();

        // await fetch(
        //   `https://server.dexdigital.com.br/ticketlog-hub/api/contact/send`,
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       name,
        //       email,
        //       phone,
        //       cnpj,
        //       porte,
        //       type: "hits",
        //       ...trackerParams,
        //     }),
        //   }
        // );

        //successCallback();
      } catch (error) {
        alert(
          "Houve um problema ao enviar o formulário. Por gentileza, tente novamente."
        );
        setSending(false);
      }
    },
  });

  return (
    <div className="">
      <div className="relative m-auto px-[20px] pt-14">
        <h2 className="text-5xl	text-center font-light mb-5">
          Solicite uma Proposta
        </h2>
        <p className="text-center font-light">Preencha os dados e entraremos em contato com você.</p>
        <form onSubmit={formik.handleSubmit} className="md:w-1/2 m-auto mt-10">
            <div className="flex justify-between max-md:flex-col gap-5 mb-5">
                <div className="md:w-1/2">
                <label
                className={`block 
                                ${
                                formik.errors.name
                                    ? "text-[#F72717] "
                                    : "text-[#6D7787] "
                                }                            
                                mb-1
                            `}
                >
                Nome completo
                </label>
                <input
                  type="text"
                  className={`
                          rounded-full
                          w-[100%]
                          h-[48px]                
                          px-5
                          focus:border-[#D5D8DD]
                          focus:shadow-none	
                          ${
                          formik.errors.name
                              ? "border-[#FED0C8]"
                              : "border-[#D5D8DD]"
                          }
                          `}
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && (
                <span className="block mt-1 text-xs text-right text-[#F72717]">
                    {formik.errors.name}
                </span>
                )}
                </div>
                <div className="md:w-1/2">
                    <label
                    className={`block 
                                    ${
                                    formik.errors.email
                                        ? "text-[#F72717] "
                                        : "text-[#6D7787] "
                                    }                            
                                    mb-1
                                `}
                    >
                    E-mail
                    </label>
                    <input
                    type="email"
                    className={`
                            rounded-full
                            w-[100%]
                            h-[48px]
                            border
                            border-[#D5D8DD]
                            px-5
                            focus:shadow-none	
                            ${
                            formik.errors.email
                                ? "border-[#FED0C8]"
                                : "border-[#D5D8DD]"
                            }
                            `}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && (
                    <span className="block mt-1 text-xs text-right text-[#F72717]">
                        {formik.errors.email}
                    </span>
                    )}
                </div>
            </div>
            <div className="flex justify-between max-md:flex-col gap-5 mb-5">
                <div className="md:w-1/2">
                <label
                className={`block 
                                ${
                                formik.errors.phone
                                    ? "text-[#F72717] "
                                    : "text-[#6D7787] "
                                }                            
                                mb-1
                            `}
                >
                Telefone
                </label>
                <InputMask
                type="text"
                mask="(99) 99999-9999"
                className={`
                        rounded-full
                        w-[100%]
                        h-[48px]
                        border
                        px-5
                        focus:border-[#D5D8DD]
                        focus:shadow-none	
                        ${
                        formik.errors.phone
                            ? "border-[#FED0C8]"
                            : "border-[#D5D8DD]"
                        }
                        `}
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.errors.phone && (
                <span className="block mt-1 text-xs text-right text-[#F72717]">
                    {formik.errors.phone}
                </span>
                )}
                </div>
                <div className="md:w-1/2">
                <label
                    className={`block 
                                ${
                                formik.errors.cnpj
                                    ? "text-[#F72717] "
                                    : "text-[#6D7787] "
                                }                            
                                mb-1
                            `}
                >
                    CNPJ
                </label>
                <InputMask
                    mask="99.999.999/9999-99"
                    type="text"
                    className={`
                            rounded-full
                            w-[100%]
                            h-[48px]
                            border
                            px-5
                            focus:border-[#D5D8DD]
                            focus:shadow-none	
                            ${
                            formik.errors.cnpj
                                ? "border-[#FED0C8]"
                                : "border-[#D5D8DD]"
                            }
                            `}
                    name="cnpj"
                    value={formik.values.cnpj}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.cnpj && (
                    <span className="block mt-1 text-xs text-right text-[#F72717]">
                    {formik.errors.cnpj}
                    </span>
                )}
                </div>
            </div>
            <div className="mb-5">
                <label className={`block ${
                                formik.errors.porte
                                    ? "text-[#F72717] "
                                    : "text-[#6D7787] "
                                } mb-1`}>
                  Porte da empresa
                </label>
                <select
                name="porte"
                value={formik.values.porte}
                className={`
                        rounded-full
                        w-[100%]
                        h-[48px]
                        border
                        border-[#D5D8DD]
                        px-5
                        focus:border-[#D5D8DD]
                        focus:shadow-none	
                        mb-1
                        bg-[length:34px]
                        `} style={{ 'backgroundImage': `url(${selectImage.src }) `}}
                >
                  <option value="micro">Micro</option>
                  <option value="pequeno">Pequeno</option>
                  <option value="medio">Médio</option>
                  <option value="grande">Grande</option>
                </select>
                {formik.errors.porte && (
                    <span className="block mt-1 text-xs text-right text-[#F72717]">
                    {formik.errors.porte}
                    </span>
                )}
            </div>
            <div className="flex items-center mt-5 text-left">
                <label
                htmlFor="privacy-policy"
                className={`ml-4 text-xs font-ubuntu `}
                >
                Você concorda que os dados informados podem ser utilizados para o envio de ofertas de produtos e serviços, de acordo com a nossa Política de Privacidade da <a className="font-bold" href="https://www.edenredpay.com.br/politica-privacidade/" target="_blank" rel="noreferrer">Edenred Pay</a>.
                </label>
            </div>
            <div className="text-center">
                <button type="submit" className="transition mt-8 rounded-full text-lg bg-[#F72717] hover:bg-[#000000] text-[#ffffff] px-[40px] py-[12px]">
                    Enviar proposta
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
