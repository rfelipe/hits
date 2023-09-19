import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

type Props = {
  className?: string;
};

const RequestBudget = ({ className }: Props) => {
  const [formSuccess, setFormSuccess] = useState(false);

  const onFormSuccess = () => {
    setFormSuccess(true);
    const form = document.querySelector("#form-request-budget");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="form-request-budget"
      className={`text-center pt-12 pl-6 pr-6 lg:pl-0 lg:pr-0 ${
        className ?? ""
      }`}
    >
      {formSuccess ? (
        <Success />
      ) : (
        <>
          <h2 className="text-5xl lg:text-5xl font-light mb-5">
            Vamos conversar!
          </h2>
          <p className="text-center font-light mt-2 max-w-[600px] ml-auto mr-auto">
            Preencha os dados e entraremos em contato com você
          </p>

          <div className="flex justify-center ">
            <Form className="mt-14" successCallback={onFormSuccess} />
          </div>
        </>
      )}
    </div>
  );
};

export default RequestBudget;
