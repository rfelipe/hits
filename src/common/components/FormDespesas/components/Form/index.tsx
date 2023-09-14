import { useFormik } from "formik";
import { useState } from "react";
import md5 from "md5";
import { sha256 } from 'js-sha256';
import * as Yup from "yup";
import Input from "../../../Input";
import {
  isValidMobilePhone,
  isValidCNPJ,
} from "@brazilian-utils/brazilian-utils";
import DataLayer from "../../../../lib/DataLayer";
import Cta from "../../../Cta";
import styles from "../../../Input/index.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  cnpj: "",
  cars_quantity: "",
  porte: "",
  assertion: false,
};

const validationSchema = Yup.object({
  name: Yup.string().matches(/^[A-Za-z ]*$/, 'Nome inválido').required("Insira seu nome"),
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
  porte: Yup.string().required("selecione o porte da empresa").oneOf(["micro", "pequena", "grande", "media"],"selecione o porte da empresa"),
  assertion: Yup.bool().oneOf([true]),
});

type Props = {
  className?: string;
  successCallback: () => void;
};

const Form = ({ className, successCallback }: Props) => {
  const [sending, setSending] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setSending(true);
      try {
        const { name, email, phone, cnpj, cars_quantity, porte, assertion } = values;
        const trackerParams = await DataLayer.getTrackerParams();

        await fetch(
          `https://server.dexdigital.com.br/ticketlog-hub/api/contact/send`,
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
              assertion,
              porte,
              type: "hits",
              source: "hits-despesas",
              ...trackerParams
            }),
          }
        );

        const p = name.split(' ')
        const nome = p.shift().toLowerCase()
        const sobrenome = p.join(' ').toLowerCase()

        DataLayer.logEvent({
          event: "success",
          "car-quantity": cars_quantity,
          cnpj: md5(cnpj),
          "cnpj_sem_hash": cnpj,
          "e-mail": sha256(email),
          "e-mail_sem_hash": email,
          "telefone": sha256(phone),
          "telefone_sem_hash": phone,
          "nome": sha256(nome),
          "nome_sem_hash": nome,
          "sobrenome": sha256(sobrenome),
          "sobrenome_sem_hash": sobrenome,
          leadid: Date.now(),
        });

        successCallback();
      } catch (error) {
        alert(
          "Houve um problema ao enviar o formulário. Por gentileza, tente novamente."
        );
        setSending(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`${className ?? ""}`}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <Input
          type="text"
          label="Nome"
          fieldInputProps={formik.getFieldProps("name")}
          error={formik.touched.name ? formik.errors.name : ""}
        />

        <div className="mt-6 lg:mt-0">
          <Input
            type="email"
            label="E-mail"
            fieldInputProps={formik.getFieldProps("email")}
            error={formik.touched.email ? formik.errors.email : ""}
          />
        </div>
        <div className="mt-6 lg:mt-0">
          <Input
            type="text"
            label="Telefone"
            fieldInputProps={formik.getFieldProps("phone")}
            mask="(99) 99999-9999"
            error={formik.touched.phone ? formik.errors.phone : ""}
          />
        </div>

        <div className="mt-6 lg:mt-0">
          <Input
            type="text"
            label="CNPJ"
            fieldInputProps={formik.getFieldProps("cnpj")}
            mask="99.999.999/9999-99"
            error={formik.touched.cnpj ? formik.errors.cnpj : ""}
          />
        </div>
      </div>

      <div className="w-full mt-6 lg:mt-8">
        <Input
          type="Number"
          label="Quantidade de veículos"  
          maxlength={4}
          fieldInputProps={formik.getFieldProps("cars_quantity")}
          error={
            formik.touched.cars_quantity ? formik.errors.cars_quantity : ""
          }
        />
      </div>
      <div className="w-full mt-6 lg:mt-8">
        <select name="porte" className={`
        ${styles.select}
      rounded-full
      w-[100%]
      h-[48px]
      border
      px-5
      focus:border-black
      focus:ring-0
      ${formik.errors.porte ? "border-border-red" : "border-black"}
      `}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>Porte da empresa</option>
          <option value="Micro">Micro</option>
          <option value="Pequeno">Pequena</option>
          <option value="Medio">Media</option>
          <option value="Grande">Grande</option>
        </select>
        {formik.errors.porte && (
          <span className="block mt-1 text-xs text-right text-[#F72717]">{formik.errors.porte}</span>
        )}
      </div>
      <div className="flex items-center mt-10 text-left">
        <input
          id="privacy-policy"
          type="checkbox"
          className="w-6 h-6 text-text-red rounded focus:ring-0 border-black"
          {...formik.getFieldProps("assertion")}
        />
        <label
          htmlFor="privacy-policy"
          className={`ml-4 text-sm font-ubuntu ${formik.touched.assertion && formik.errors.assertion
              ? "text-text-black"
              : "text-text-black"
            }`}
        >
          Você concorda que os dados informados podem ser utilizados para o
          envio de ofertas de produtos e serviços, de acordo
          <br /> com nossa{" "}
          <a
            href="https://www.ticketlog.com.br/lgpd/"
            target="_blank"
            rel="noreferrer"
            className="text-pedagio-blue underline"
          >
            Política de Privacidade.
          </a>
        </label>
      </div>

      <Cta type="submit" className="mt-12" loading={sending}>
        Solicite contato
      </Cta>
    </form>
  );
};

export default Form;
