interface ILogoProps {
  scaleOption?: string;
}

const Logo = ({ scaleOption }: ILogoProps) => {
  return (
    <div
      className={`font-apocBold bg-transparent h-20 w-20 relative flex items-center justify-center text-5xl overflow-hidden  cursor-pointer  group/logo ${
        scaleOption ? scaleOption : ""
      }`}
    >
      <span className="transition-colors text-secondColor group-hover/logo:text-firstColor">
        DM
      </span>
      <span className="absolute top-[38%] p-[2px] pl-[5px] w-20 text-[9px]  text-firstColor bg-thirdColor transition-all duration-300  group-hover/logo:scale-110 ">
        STUDIO LUXURY
      </span>
    </div>
  );
};

export default Logo;
