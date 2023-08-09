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
}

const LinkButtonCustom = ({
  onClick,
  title,
  to,
  textSize,
  icon,
  px,
  py,
  bgHeight
}: ILinkButtonCustomProps) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className={`relative inline-block group text-firstColor ${
        textSize ?? "text-xs"
      }  `}
    >
      <span className={`${px ?? "px-4"} ${py ?? "py-2"} shadow-sm shadow-black relative z-10 block  overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white`}>
        <span className={`absolute inset-0 w-full h-full px-2 py-2  bg-secondColor`}></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fourColor group-hover:-rotate-180 ease"></span>
        <span className="relative flex items-center gap-1">
          {icon}
          <span>{title}</span>
        </span>
      </span>
      <span
        className={`${bgHeight ?? "h-8"} absolute bottom-0 right-0 w-full -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fourColor  group-hover:mb-0 group-hover:mr-0`}
        data-rounded=""
      ></span>
    </Link>
  );
};

export default LinkButtonCustom;
