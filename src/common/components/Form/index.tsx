import Image from "next/image";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import { useState } from "react";
import * as Yup from "yup";
import {
    isValidMobilePhone,
    isValidCNPJ,
} from "@brazilian-utils/brazilian-utils";
import DataLayer from "../../lib/DataLayer";
import md5 from "md5";
import CloseImg from './images/close.svg';

const initialValues = {
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    cars_quantity: 0,
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
    cars_quantity: Yup.number()
        .min(1, "O valor precisa ser positivo")
        .required("Insira a quantidade de veículos"),
    porte: Yup.string().required("Escolha o porte da empresa").oneOf(["micro", "pequena", "grande", "media"]),
    assertion: Yup.bool().oneOf([true]),
});

const Form = ({ onClose }) => {
    const [sending, setSending] = useState(false);
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            setSending(true);
            try {
                const { name, email, phone, cnpj, cars_quantity } = values;
                const trackerParams = await DataLayer.getTrackerParams();

                await fetch(
                    `https://hub.ticketlog/api/contact/send`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            phone,
                            cnpj,
                            cars_quantity,
                            type: "hits",
                            ...trackerParams,
                        }),
                    }
                );

                DataLayer.logEvent({
                    event: "success",
                    "car-quantity": cars_quantity,
                    cnpj: md5(cnpj),
                    "cnpj_sem_hash": cnpj,
                    leadid: Date.now(),
                });

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
        <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(27,28,30,.7)] overflow-auto  z-50 p-[40px]">
            <div className="relative ml-auto w-[664px] bg-[#F1F7FF]  p-[60px] rounded-[40px] ">
                <a onClick={handleCloseClick} className="absolute cursor-pointer top-[24px] right-[24px]"><Image alt="" src={CloseImg}  /></a>
                <h2 className="text-3xl	font-bold mb-5">Preencha os dados e entraremos em contato com você.</h2>
                <p>Todos os campos são de preenchimento obrigatório.</p>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-10 mb-5">
                        <label className={
                            `block 
                            ${formik.errors.name ? "text-[#F72717] " : "text-[#6D7787] "}                            
                            mb-1
                        `}>Nome completo</label>
                        <input type="text" className={`
                    rounded-full
                    w-[100%]
                    h-[48px]                
                    px-5
                    focus:border-[#D5D8DD]
                    focus:shadow-none	
                    ${formik.errors.name ? "border-[#FED0C8]" : "border-[#D5D8DD]"}
                    `}
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && (
                            <span className="block mt-1 text-xs text-right text-[#F72717]">{formik.errors.name}</span>
                        )}
                    </div>
                    <div className="mb-5">
                        <label className={
                            `block 
                            ${formik.errors.email ? "text-[#F72717] " : "text-[#6D7787] "}                            
                            mb-1
                        `}>E-mail</label>
                        <input type="email" className={`
                    rounded-full
                    w-[100%]
                    h-[48px]
                    border
                    border-[#D5D8DD]
                    px-5
                    focus:shadow-none	
                    ${formik.errors.email ? "border-[#FED0C8]" : "border-[#D5D8DD]"}
                    `}
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && (
                            <span className="block mt-1 text-xs text-right text-[#F72717]">{formik.errors.email}</span>
                        )}
                    </div>
                    <div className="mb-5">
                        <label className={
                            `block 
                            ${formik.errors.phone ? "text-[#F72717] " : "text-[#6D7787] "}                            
                            mb-1
                        `}>Telefone</label>
                        <InputMask type="text"
                            mask="(99) 99999-9999"
                            className={`
                    rounded-full
                    w-[100%]
                    h-[48px]
                    border
                    px-5
                    focus:border-[#D5D8DD]
                    focus:shadow-none	
                    ${formik.errors.phone ? "border-[#FED0C8]" : "border-[#D5D8DD]"}
                    `}
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.phone && (
                            <span className="block mt-1 text-xs text-right text-[#F72717]">{formik.errors.phone}</span>
                        )}
                    </div>
                    <div className="flex justify-between gap-5 mb-5">
                        <div className="w-[60%]">
                            <label className={
                                `block 
                            ${formik.errors.cnpj ? "text-[#F72717] " : "text-[#6D7787] "}                            
                            mb-1
                        `}>CNPJ</label>
                            <InputMask
                                mask="99.999.999/9999-99"
                                type="text" className={`
                        rounded-full
                        w-[100%]
                        h-[48px]
                        border
                        px-5
                        focus:border-[#D5D8DD]
                        focus:shadow-none	
                        ${formik.errors.cnpj ? "border-[#FED0C8]" : "border-[#D5D8DD]"}
                        `}
                                name="cnpj"
                                value={formik.values.cnpj}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.cnpj && (
                                <span className="block mt-1 text-xs text-right text-[#F72717]">{formik.errors.cnpj}</span>
                            )}
                        </div>
                        <div className="w-[40%]">
                            <label className={
                                `block 
                            ${formik.errors.cars_quantity ? "text-[#F72717] " : "text-[#6D7787] "}                            
                            mb-1
                        `}>Quantidade de veículos</label>
                            <input type="text" className={`
                        rounded-full
                        w-[100%]
                        h-[48px]
                        border
                        px-5
                        focus:border-[#D5D8DD]
                        focus:shadow-none	
                        ${formik.errors.cars_quantity ? "border-[#FED0C8]" : "border-[#D5D8DD]"}
                        `}
                                name="cars_quantity"
                                value={formik.values.cars_quantity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.cars_quantity && (
                                <span className="block mt-1 text-xs text-right text-[#F72717]">{formik.errors.cars_quantity}</span>
                            )}
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block text-[#6D7787] mb-1">Porte da empresa</label>
                        <select className={`
                    rounded-full
                    w-[100%]
                    h-[48px]
                    border
                    border-[#D5D8DD]
                    px-5
                    focus:border-[#D5D8DD]
                    focus:shadow-none	
                    `}
                        >
                            <option>Pequena empresa</option>
                            <option>Média empresa</option>
                            <option>Grande empresa</option>
                        </select>
                    </div>
                    <p className="mb-5 text-sm">Ao enviar, você concorda com a Política de Privacidade da Edenred Hits.</p>
                    <button type="submit" className="transition  rounded-full text-lg bg-[#F72717] hover:bg-[#000000] text-[#ffffff] px-[40px] py-[12px]">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Form