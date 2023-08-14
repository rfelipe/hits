import { ReactNode, useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const links = [
  { href: '/despesas', label: 'Despesas', color: 'bg-light-violet'  },
  { href: '/combustivel', label: 'Combustíveis', color: 'bg-light-olive' },
  { href: '/planos', label: 'Planos', color: 'bg-light-pink' },
  { href: '/sobre', label: 'Sobre a Edenred', color: 'bg-light-pink' }
];

const MainTemplate = ({ children }: Props) => {
  return (
    <div className="pt-12">     
     <Header links={links} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
