import Image from "next/image";
import { useRouter } from "next/router";
import LogoEdenred from "./images/edenred.png";

const Header = () => {
  return (
    <header
      className={`
    hidden
    relative
    pl-[5%]
    pr-[5%]
    pt-4
    lg:block
    border-solid
    bg-white
    pb-4
    z-30
    `}
    >
      <div className="flex items-center justify-between">
        <a href="https://ticketlog.com.br/" className="w-[250px]">
          <Image alt="TicketLog" src={LogoEdenred} priority />
        </a>
        <div className="flex justify-end items-center">        
          <div className="hidden min-[1445px]:flex min-[1285px]:items-center">
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center min-[1445px]:hidden">
      </div>
    </header>
  );
};

export default Header;
