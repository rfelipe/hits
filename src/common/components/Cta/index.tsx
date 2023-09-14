type Props = {
  children: React.ReactNode;
  filled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: () => void;
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
};

const Cta = ({
  children,
  className,
  type,
  loading,
  onClick,
  href,
  target,
  rel,
}: Props) => {
  return (
    <button
      type={type ?? "button"}
      disabled={loading}
      className={`
      border-solid border border-original-red bg-original-red text-white hover:bg-black hover:border-black
    rounded-full
    pl-6
    pr-6
    pt-3
    pb-3
    ${loading && "cursor-not-allowed"}
    ${className ?? ""}`}
      onClick={onClick}
    >
      {loading ? "Processando..." : children}
    </button>
  );
};

Cta.defaultProps = {
  filled: true,
};

export default Cta;
