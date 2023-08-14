import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps {
  type: 'red' | 'learnMore' | 'readMore';
  children: React.ReactNode;
  href?: string;
}

const typeToClassMap = {
  red: 'bg-original-red border-original-red text-white hover:bg-black hover:border-black py-3 px-10 rounded-full border',
  learnMore: 'bg-transparent border-black text-black hover:border-original-red py-3 px-10 rounded-full border',
  readMore: 'text-black pb-8 md:pb-0 mx-auto md:mx-0 md:px-6'
};

const variants = {
  hidden: { maxWidth: 'fit-content', width: 'auto', maxHeigth: 48, heigth: 'auto' },
  visible: { maxWidth: 'auto', width: 'auto', maxHeigth: 48, heigth: 'auto' },
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0.1, display: 'none' },
  visible: { opacity: 1, scale: 1, display: 'block'},
};

const initialVariant = 'hidden';

const Button: React.FC<ButtonProps> = ({ type, children, href }) => {
  const buttonClassName = `button ${typeToClassMap[type]} cursor-pointer font-normal inline-flex items-center justify-between max-h-12 max-w-32`;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const motionProps: MotionProps = {
    transition: { property: 'width', duration: 0.3, ease: 'easeInOut', delay: 200 },
  };

  return (
    <Link href={href} passHref>
      <motion.div
        className={buttonClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={initialVariant}
        animate={isHovered ? 'visible' : 'hidden'}
        variants={variants}
        {...motionProps}
      >
        <a className="flex items-center">
          
          {type === 'learnMore' && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className={`inline-block mr-3`}
              viewBox="0 0 17 18"
              fill="currentColor"
              aria-hidden="true"
              width={17}
              height={18}
              animate={isHovered ? 'visible' : 'hidden'}
              variants={arrowVariants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}

            >
              <path d="M10.1053 1.82841L15.5304 8.99992L10.1053 16.1714C9.93555 16.3957 9.97577 16.7185 10.1945 16.8923C10.4138 17.0661 10.7288 17.0252 10.8985 16.8009L16.5616 9.31453C16.6317 9.22179 16.6667 9.11099 16.6667 8.99992C16.6667 8.88885 16.6317 8.77778 16.5616 8.68531L10.8985 1.19919C10.7288 0.974924 10.4138 0.933739 10.1945 1.10778C9.97551 1.28157 9.93529 1.60441 10.1053 1.82868L10.1053 1.82841Z" fill="#F72717" stroke="#F72717" stroke-width="0.5" />
              <rect x="0.333333" y="8.66668" width="15.3334" height="0.666667" rx="0.333333" fill="#F72717" stroke="#F72717" strokeWidth="0.666667" />
            </motion.svg>
          )}
          {type === 'readMore' && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className={`inline-block mr-3`}
              viewBox="0 0 17 18"
              fill="currentColor"
              aria-hidden="true"
              width={17}
              height={18}
            >
              <path d="M10.1053 1.82841L15.5304 8.99992L10.1053 16.1714C9.93555 16.3957 9.97577 16.7185 10.1945 16.8923C10.4138 17.0661 10.7288 17.0252 10.8985 16.8009L16.5616 9.31453C16.6317 9.22179 16.6667 9.11099 16.6667 8.99992C16.6667 8.88885 16.6317 8.77778 16.5616 8.68531L10.8985 1.19919C10.7288 0.974924 10.4138 0.933739 10.1945 1.10778C9.97551 1.28157 9.93529 1.60441 10.1053 1.82868L10.1053 1.82841Z" fill="#F72717" stroke="#F72717" strokeWidth="0.5" />
              <rect x="0.333333" y="8.66668" width="15.3334" height="0.666667" rx="0.333333" fill="#F72717" stroke="#F72717" strokeWidth="0.666667" />
            </motion.svg>
          )}
          {children}
        </a>
      </motion.div>
    </Link>
  );
};

export default Button;
