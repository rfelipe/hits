import React from "react";
import Img1 from "./images/img1.webp";
import Image from "next/image";

const IntroBackgroundSobre = () => {
  return (
    <div className="lg:absolute -left-[55px] -top-[100px]">
      <Image src={Img1} alt="sobre"></Image>
    </div>
  );
};

export default IntroBackgroundSobre;
