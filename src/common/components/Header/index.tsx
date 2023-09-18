import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Logo from './images/edenred-logo.svg'
import Image from 'next/image';
import Button from '../Buttons';
import Menu from './components/Menu'
import Duvida from "../../../common/layouts/Planos/Duvida";
import Img1 from '../../../common/layouts/Planos/Duvida/images/img1-2.png';
import Img2 from '../../../common/layouts/Planos/Duvida/images/img2-2.png';
import ImgBg1 from '../../../common/layouts/Planos/Duvida/images/bg-p1.png';
import ImgBg2 from '../../../common/layouts/Planos/Duvida/images/bg-p.png';


interface Props {
  links: { href: string; label: string, color?: string }[];
}

const Header: React.FC<Props> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.className = 'overflow-hidden md:overflow-visible';
    } else {
      document.body.className='overflow-visible';
    }
  }, [isMenuOpen]);

  return (
    <header className="relative bg-white z-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="relative text-white w-[82px] h-[52px] md:w-auto md:h-auto z-20">
                <Image src={Logo} alt="Logo Edenred"></Image>
              </a>
            </Link>
          </div>   
          <Menu links={links} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
        </div>
      </div>
      <div id='modalproduct' className={`fixed top-0 left-0 w-screen h-screen bg-[rgba(27,28,30,.7)] overflow-auto  z-50 md:p-[40px] ${isModalOpen ? 'block' : 'hidden'}`}>
        <div className="relative overflow-hidden m-auto bg-[#F1F7FF] py-[60px] md:rounded-3xl ">
          <div onClick={() => {setIsModalOpen(false), document.getElementById("modalproduct").style.display = "none";}} className='absolute right-4 cursor-pointer bg-white rounded-full w-9 h-9 text-center flex items-center justify-center top-4'>X</div>
          <section className="text-center m-auto mt-10">
              <p className="px-4 mt-3 text-3xl ">
              Escolha o produto que deseja falar
              </p>
              <div className="mt-20 flex justify-between flex-wrap min-[1337px]:flex-nowrap">
                  <div className="flex">
                      <div className="relative z-10 shrink-0 hidden min-[1337px]:block -left-[75px]" >
                          <Image alt="" src={Img1}  />
                      </div>
                      <div className="relative z-10 shrink-0 min-[1337px]:hidden" >
                          <Image alt="" src={ImgBg1}  />
                      </div>
                      <div className="absolute z-10 min-[1337px]:relative max-[1337px]:left-[25px] flex items-center justify-center min-[1337px]:bg-white w-[309px] h-[309px] rounded-[100%] min-[1337px]:-left-[142px] min-[1337px]:z-0 ">                        
                          <div className="pl-6">
                              <span className="inline-flex justify-center bg-[#C8C3FF]  px-4 py-2 rounded-full w-fit mb-2">Hit #1</span>
                              <p className="text-lg text-center mx-auto max-w-[150px] mb-2">Quero controlar as despesas do negócio</p>
                              <Button type="red" href="/despesas">Contrate agora</Button>
                          </div>
                      </div>
                  </div>
                  <div className="flex ml-auto">
                      <div className="absolute z-10 min-[1337px]:right-[288px] min-[1337px]:relative flex items-center justify-center min-[1337px]:bg-white w-[309px] h-[309px] rounded-[100%] min-[1337px]:z-0 ">
                          <div className="pr-6">
                              <span className="inline-flex justify-center bg-[#DCF691]  px-4 py-2 rounded-full w-fit mb-2">Hit #2</span>
                              <p className="text-lg text-center mx-auto max-w-[150px] mb-2">Quero controlar as despesas com combustível</p>
                              <Button type="red" href="/combustivel">Contrate agora</Button>
                          </div>
                      </div>
                      <div className="min-[1337px]:block hidden absolute -right-[65px]">
                          <Image alt="" src={Img2} className="relative z-0" />
                      </div>
                      <div className="min-[1337px]:hidden">
                          <Image alt="" src={ImgBg2} className="relative z-0" />
                      </div>
                  </div>
              </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
