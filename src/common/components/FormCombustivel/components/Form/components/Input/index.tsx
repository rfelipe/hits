import Image from "next/image";
import { FieldInputProps } from "formik/dist/types";
import InputMask from "react-input-mask";
import styles from "./index.module.css";
import ErrorIcon from "./images/error-icon.png";

type Props = {
  label: string;
  type: string;
  fieldInputProps: FieldInputProps<any>;
  mask?: string;
  error?: string;
};

const Input = ({ label, type, fieldInputProps, mask, error }: Props) => (
  <div className={styles.wrapper}>
    {mask ? (
      <InputMask
        mask={mask}
        type={type}
        className={`${styles.input}
    focus:border-border-grey
    border-solid border-1
    ${error ? "border-border-red text-text-red" : "border-border-grey"}`}
        {...fieldInputProps}
        required
      />
    ) : (
      <input
        type={type}
        className={`${styles.input}
      focus:border-border-grey
      border-solid border-1
      ${error ? "border-border-red text-text-red" : "border-border-grey"}`}
        {...fieldInputProps}
        required
      />
    )}

    <label
      className={`
      ${styles.label}
      font-ubuntu
      ${error ? "text-text-red" : "text-text-grey"}`}
    >
      <span>{label}</span>
    </label>
    {error && (
      <div
        className={`text-left pl-4 text-red ${styles.error} flex ${
          type === "number" ? "mt-6 mr-5" : "pt-0.5"
        }`}
      >
        <Image
          alt="Error"
          src={ErrorIcon}
          layout="fixed"
          width={16}
          height={15}
          className="shrink-0"
        />
        <span className="pl-2 pb-0.5 font-ubuntu text-text-red">{error}</span>
      </div>
    )}
  </div>
);

export default Input;
