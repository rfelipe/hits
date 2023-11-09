import Button from "../Buttons";
import Link from "next/link";
import Image from "next/image";
import LogoEdenred from '../Header/images/logo-edenred.png';
import Linkedin from './images/linkedin.png';
import Facebook from './images/facebook.png';
import Youtube from './images/youtube.png';
import Spotify from './images/spotify.png';
import Instagram from './images/instagram.png';
import dex from './images/dEx.png';
import Optanon from "../../../common/lib/Optanon";
import WhatsAppIcon from './images/whatsapp-icon.svg';

const Footer = () => {
  const links = [
    {
      label: 'Despesas',
      href: '/despesas',
      color: 'bg-light-violet'
    },
    {
      label: 'Combustível',
      href: '/combustivel',
      color: 'bg-light-olive'
    },
    {
      label: 'Sobre a Edenred',
      href: '/sobre',
      color: 'bg-light-pink'
    },
    {
      label: 'Perguntas Frequentes',
      href: '/planos#faq',
      color: 'bg-light-pink'
    }
  ]
  return (
    <footer className="md:max-w-7xl mx-auto px-6">
      <div className="relative flex justify-between flex-col-reverse md:flex-row">
        <div className="relative w-[315px] h-[479px] mx-auto">
          <svg width="315" height="479" viewBox="0 0 315 479" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto md:mx-0">
            <path d="M59.0001 280C85.8445 301.264 119.916 314 157 314C194.084 314 228.156 301.273 255 280C228.156 258.736 194.084 246 157 246C119.916 246 85.8445 258.727 59.0001 280Z" fill="#FED0C8" />
            <path d="M255.687 279.758C291.641 250.963 314.666 206.729 314.666 157.124C314.666 70.3483 244.232 4.27029e-05 157.333 2.7509e-05C70.434 1.2315e-05 0.000231842 70.3387 0.000216668 157.124C0.000207995 206.729 23.025 250.963 58.9786 279.758C85.9201 258.187 120.115 245.278 157.333 245.278C194.551 245.278 228.746 258.188 255.687 279.758Z" fill="#F72717" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2.48201e-05 410L2.18041e-05 479L20.2633 479C47.2702 526.61 98.5495 558.75 157.371 558.75C216.195 558.75 267.475 526.612 294.482 479L315 479L315 410L314.541 410C314.675 407.35 314.742 404.683 314.742 402C314.742 352.513 291.712 308.385 255.75 279.658C228.802 301.177 194.598 314.056 157.371 314.056C120.144 314.056 85.9409 301.177 58.9929 279.658C23.0305 308.385 8.83681e-05 352.513 8.6205e-05 402C8.60877e-05 404.683 0.0677434 407.35 0.201471 410L2.48201e-05 410Z" fill="#B0EFFF" />
          </svg>
          <div className="absolute top-24 -left-2 md:left-0 right-0 w-48 m-auto text-center">
            <span className="text-white text-2xl font-light">Acelere seu sucesso com os <strong className="font-bold">Hits da Edenred</strong></span>
          </div>
          <div className="w-full flex items-center justify-center absolute bottom-3">
            <a className="md:hidden mx-auto " href="https://dexdigital.com.br" target="_blank" rel="noreferrer">
                <Image alt="dEx digital" src={dex}/>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:self-end items-center">
          {/* <div> */}
          <div className="flex items-center flex-col-reverse md:flex-row md:pb-14">
            {links.map((link, index) => (

              <>

                <Link key={index} href={link.href}>
                  <a className="">

                    <div className='relative group px-6 gap-8 md:gap-0 pb-8 md:py-2 '>
                      <div className="rounded-md text-lg font-light text-black relative">{link.label}
                        <div className={`absolute -bottom-2 left-0 right-0 w-[50%] mx-auto scale-x-0 h-1 ${link.color || 'bg-light-pink'} transition-all duration-300 ease-out group-hover:scale-x-100`}></div>

                      </div>
                    </div>
                  </a>
                </Link>
              </>
            ))}
              <Image src={LogoEdenred} alt={'Logo Edenred'} width={105} height={67}></Image>
          </div>

          <div className="flex max-md:items-center md:mb-14 md:justify-normal flex-col md:flex-row w-full justify-start mx-auto">
            <Button type="readMore" href="https://www.iflexaccmm.com.br">Acesso a plataforma Hit Despesas</Button>
            <Button type="readMore" href="https://plataforma.ticketlog.com.br/">Acesso a plataforma Hit Combustível</Button>
          </div>
          <div className="flex justify-between max-md:pb-10 gap-8 md:pb-0 md:justify-normal md:items-start md:mr-auto md:gap-16 md:px-6">
            <Link href={'https://www.linkedin.com/company/ticket-log/'} key="linkedin">
              <a target="_blank" className="hover:scale-125 transition-all">
                <Image src={Linkedin} alt={'Icon'} width={24} height={24}></Image>
              </a>
            </Link>
            <Link href={'https://www.facebook.com/TicketLog'} key="facebook">
              <a target="_blank" className="hover:scale-125 transition-all">
                <Image src={Facebook} alt={'Icon'} width={24} height={24}></Image>
              </a>
            </Link>
            <Link href={'https://www.instagram.com/edenredhits/'} key="instagram">
              <a target="_blank" className="hover:scale-125 transition-all">
                <Image src={Instagram} alt={'Icon'} width={24} height={24}></Image>
              </a>
            </Link>
            <Link href={'https://www.youtube.com/ticketlog'} key="youtube">
              <a target="_blank" className="hover:scale-125 transition-all">
                <Image src={Youtube} alt={'Icon'} width={24} height={24}></Image>
              </a>
            </Link>
          </div>
          <div className="flex max-md:flex-col max-md:text-center max-md:gap-5 max-md:m-auto gap-10 my-5 mr-auto max-md:pb-14 px-6 text-xs">
              <a href="https://www.ticketlog.com.br/lgpd/#termos-de-servico" target="_blank" rel="noreferrer">Termos de Uso e Política de Privacidade</a>
              <a href="https://www.ticketlog.com.br/lgpd" target="_blank" rel="noreferrer" >LGPD</a>
              <a id="onetrust" className="optanon-show-settings cursor-pointer" onClick={() => {
                      Optanon.triggerGoogleAnalyticsEvent(
                        "OneTrust Cookie Consent",
                        "Banner Open Preferences"
                      );
                }}>Gerenciar Cookies</a>
            <a className="hidden md:block absolute right-0" href="https://dexdigital.com.br" target="_blank" rel="noreferrer">
              <Image alt="dEx digital" src={dex}/>
            </a>
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=5511974221381&text=Ol%C3%A1,%20estou%20com%20d%C3%BAvidas%20sobre%20os%20Hits%20da%20Edenred,%20pode%20me%20ajudar?‌" target="_blank" className="fixed bottom-5 right-5 z-50 translate-y-0 hover:-translate-y-[8px] transition ease-in-out duration-300">
        <Image src={WhatsAppIcon}  width={50} height={50}></Image>
      </a>
    </footer>
  );
};

export default Footer;
