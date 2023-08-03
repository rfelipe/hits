import LogoEdenred from '../Header/images/logo-edenred.png';

const WhoEdenred = () => {
    return (
        <div className="pt-32">
            <div className="flex items-center justify-end">
                <div className='pr-6 lg:w-[480px]'>
                    <h2 className='text-5xl text-black font-light mb-8'>Tá, mas quem é essa <span className='font-bold'>Edenred?</span></h2>
                    <p className='font-ubuntu text-base mb-6 font-light'>Essa parceria é das fortes: a Edenred é líder mundial em serviços e meios de pagamento, e atua como companheira de todas as horas de empresas, trabalhadores e comerciantes.</p>
                </div>
                <svg width="704" height="332" viewBox="0 0 704 332" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="166.16" cy="166.16" rx="166.16" ry="165.84" transform="rotate(-180 166.16 166.16)" fill="#F1F7FF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M425.387 0.000167777C333.619 0.00015977 259.227 74.2493 259.227 165.84C259.227 257.431 333.619 331.68 425.387 331.68C425.446 331.68 425.505 331.68 425.564 331.68L1650.32 331.68L1650.32 0.000183105L425.387 0.000167777Z" fill="#F72717" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M295.783 62.0498C318.655 90.4631 332.34 126.557 332.34 165.84C332.34 205.124 318.655 241.218 295.783 269.631C272.912 241.218 259.227 205.124 259.227 165.84C259.227 126.557 272.912 90.4631 295.783 62.0498Z" fill="#B0EFFF" />
                    <rect x="87.2761" y="115.5" width="150.448" height="96" fill="url(#patternLogo)" />
                    <defs>
                        <pattern id="patternLogo" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#LogoEdenred" transform="matrix(0.000807103 0 0 0.00126486 0 -0.00278237)" />
                        </pattern>
                        <image id="LogoEdenred" width="1239" height="795" xlinkHref={LogoEdenred.src} />
                    </defs>
                </svg>

            </div>
        </div>
    )
}

export default WhoEdenred;