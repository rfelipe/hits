type Props = {
  className?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
};

const Ribbon = ({ className, backgroundColor, width, height }: Props) => (
  <span
    className={`inline-block rounded-full 
    ${ backgroundColor ?? "bg-original-red"} 
    ${ width ?? "w-[72px]"}
    ${ height ?? "h-[21px]"}
    ${ className ?? ""}`}
  />
);

export default Ribbon;
