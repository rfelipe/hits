import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Logo from './images/edenred-logo.svg'
import Image from 'next/image';
import Button from '../Buttons';
import Menu from './components/Menu'
interface Props {
  links: { href: string; label: string, color?: string }[];
}

const Header: React.FC<Props> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [isMenuOpen]);

  // const handleLinkClick = (href: string) => {
  // router.push(href);
  //  setIsMenuOpen(false);
  // };

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
          <Menu links={links} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
