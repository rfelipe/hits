import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classNames from 'classnames';
import Logo from './images/edenred-logo.svg'
import Image from 'next/image';
import Button from '../Buttons';
interface Props {
  links: { href: string; label: string, color?: string }[];
}

const Header: React.FC<Props> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white">
                <Image src={Logo} alt="Logo Edenred" width={150} height={100}></Image>
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <>
                  <Link key={index} href={link.href}>
                    <a >
                      <div className='relative group px-6 py-2 '>
                        <div className="rounded-md text-lg font-light text-black relative">{link.label}
                          <div className={`absolute -bottom-2 left-0 right-0 w-[50%] mx-auto scale-x-0 h-1 ${link.color || 'bg-light-pink'} transition-all duration-300 ease-out group-hover:scale-x-100`}></div>

                        </div>
                      </div>
                    </a>
                  </Link>
                </>
              ))}
              <Button type="red" href={'/'}>Contrate agora</Button>
            </div>
          </div>
        </div>
      </div>
{/* <nav
  className={classNames(
    'md:hidden',
    isMenuOpen ? 'block' : 'hidden',
    'px-2 pt-2 pb-3 space-y-1 sm:px-3'
  )}
>
  {links.map((link) => (
    <Link key={link.href} href={link.href}>
      <a
        onClick={() => handleLinkClick(link.href)}
        className={classNames(
          'block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300',
          router.pathname === link.href
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        )}
      >
        {link.label}
      </a>
    </Link>
  ))}
</nav> */}

    </header>
  );
};

export default Header;
