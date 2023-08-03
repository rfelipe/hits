import { ReactNode, useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <div className="pt-12">     
     <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
