interface ILogoProps {
  scaleOption?: string;
  onClick?: () => void
}

const Logo = ({ scaleOption, onClick }: ILogoProps) => {
  return (
    <div
      className={`font-apocBold bg-transparent h-17 w-17 relative flex items-center justify-center text-4xl overflow-hidden  cursor-pointer  group/logo ${
        scaleOption ? scaleOption : ""
      }`}
      onClick={onClick}
    >
      <span className="transition-colors text-firstColor group-hover/logo:text-firstColor">
        DM
      </span>
      <span className="absolute top-[25%] leading-3 px-1 text-[7px] text-thirdColor bg-fifth transition-all duration-300  group-hover/logo:scale-110 ">
        STUDIO LUXURY
      </span>
    </div>
  );
};

export default Logo;
