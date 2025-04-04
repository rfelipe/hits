import Link from 'next/link';
import Button from '../../../Buttons';
import Image from "next/image";
import cart from "../../images/shopping-cart.png"

type Props = {
  links: { href: string; label: string, color?: string }[];
  setIsMenuOpen: (open: boolean) => void;
  isMenuOpen: boolean
  setIsModalOpen: (open: boolean) => void;
  isModalOpen: boolean
};
const Menu = ({ links, setIsMenuOpen, isMenuOpen, setIsModalOpen, isModalOpen  }: Props) => {
  return (
    <div>
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
          <div onClick={() => { setIsModalOpen(true); }} className="button bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border cursor-pointer font-normal inline-flex items-center lg:justify-between justify-center max-h-12 max-w-32">
              <a className="flex items-center gap-3"><Image src={cart} height={25} width={25} alt=''/>Contrate agora</a>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <a className={`absolute flex items-center gap-2 px-4 py-2 rounded-full bg-cold-white right-[24px] top-[10px]
              ${isMenuOpen ? 'hidden' : ''}
            `} onClick={() => { setIsMenuOpen(true); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
            <path d="M1 1.5H17" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 7.5H17" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className='text-sm'>Menu</span>
        </a>
        <div className={`
                fixed w-full h-screen top-0 left-0 z-10  bg-cold-white          
                ${!isMenuOpen ? 'hidden' : ''}
            `}
        >
          <a className='absolute right-[24px] top-[30px]' onClick={() => { setIsMenuOpen(false); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
              <path d="M12 23.3137L23.3137 12" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23.3137 23.3137L12 12" stroke="black" stroke-width="1.74545" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <div className='mt-[130px] flex flex-col items-center'>
            {links.map((link, index) => (
              <>
                <Link key={index} href={link.href}>
                  <a className='text-2xl flex items-center gap-5 mb-8	'>
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                      <path d="M10.1053 1.82841L15.5304 8.99992L10.1053 16.1714C9.93555 16.3957 9.97577 16.7185 10.1945 16.8923C10.4138 17.0661 10.7288 17.0252 10.8985 16.8009L16.5616 9.31453C16.6317 9.22179 16.6667 9.11099 16.6667 8.99992C16.6667 8.88885 16.6317 8.77778 16.5616 8.68531L10.8985 1.19919C10.7288 0.974924 10.4138 0.933739 10.1945 1.10778C9.97551 1.28157 9.93529 1.60441 10.1053 1.82868L10.1053 1.82841Z" fill="#F72717" stroke="#F72717" stroke-width="0.5" />
                      <rect x="0.333333" y="8.66659" width="15.3334" height="0.666667" rx="0.333333" fill="#F72717" stroke="#F72717" stroke-width="0.666667" />
                    </svg>
                  </a>
                </Link>
              </>
            ))}
            <div className='bg-white bottom-0 rounded-t-full absolute w-full h-2/5 px-10 flex justify-center items-center flex-col'>
              <p className='mb-8'>Login</p>
              <Button type='readMore' href='/'><p className='max-[375px]:text-xs'>Acesso a plataforma Hit Despesas</p></Button>
              <Button type='readMore' href='/'><p className='max-[375px]:text-xs'>Acesso a plataforma Hit Combustível</p></Button>
              <div onClick={() => { setIsModalOpen(true); }} className="button bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border cursor-pointer font-normal inline-flex items-center lg:justify-between justify-center max-h-12 max-w-32">
                <a className="flex items-center gap-3"><Image src={cart} height={25} width={25} alt=''/>Contrate agora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Menu