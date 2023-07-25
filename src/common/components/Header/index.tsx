import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <header
      className={`
    hidden
    relative
    pl-[5%]
    pr-[5%]
    pt-8
    lg:block
    border-b-[1px]
    border-solid
    bg-white
    pb-8
    z-30
    `}
    >
      <div className="flex items-center justify-between">
        <a href="https://ticketlog.com.br/" className="w-[250px]">
          <Image alt="TicketLog" priority />
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
