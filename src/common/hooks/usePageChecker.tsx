import { useRouter } from "next/router";

const usePageChecker = () => {
  const router = useRouter();
  const isPedagio = router.pathname === "/pedagio";
  const isAbastecimento = router.pathname === "/abastecimento";
  const isManutencao = router.pathname.includes('/manutencao');

  return {
    isPedagio,
    isAbastecimento,
    isManutencao  
  };
};

export default usePageChecker;
