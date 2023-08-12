import { Link } from "react-router-dom";

interface ILinkButtonCustomProps {
  onClick?: () => void;
  to: string;
  title: string;
  icon?: React.ReactNode;
  textSize?: string;
  px?: string;
  py?: string;
  bgHeight?: string;
  className?: string,
  disabled?: boolean
}

const LinkButtonCustom = ({
  onClick,
  title,
  to,
  textSize,
  icon,
  px,
  py,
  bgHeight,
  className,
  disabled
}: ILinkButtonCustomProps) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className={`relative inline-block font-poppinsBold group text-firstColor ${
        textSize ?? "text-xs"
      } ${className? className : ""} ${disabled ? "pointer-events-none opacity-50" : "pointer-events-auto opacity-100"}`}
    >
      <span className={`${px ?? "px-4"} ${py ?? "py-2"} shadow-sm shadow-black relative z-10 block  overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white`}>
        <span className={`absolute inset-0 w-full h-full px-2 py-2  bg-thirdColor`}></span>
        <span className={`absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 ${disabled ? "bg-secondColor" : "bg-fourColor"} group-hover:-rotate-180 ease`}></span>
        <span className="relative flex items-center gap-1">
          {icon}
          <span>{title}</span>
        </span>
      </span>
      <span
        className={`${bgHeight ?? "h-8"} absolute bottom-0 right-0 w-full -mb-1 -mr-1 transition-all duration-200 ease-linear ${disabled ? "bg-secondColor" : "bg-fourColor"}  group-hover:mb-0 group-hover:mr-0`}
        data-rounded=""
      ></span>
    </Link>
  );
};

export default LinkButtonCustom;
