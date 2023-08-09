const Logo = () => {
  return (
    <div className="bg-firstColor h-20 w-20 relative flex items-center justify-center text-5xl overflow-hidden  cursor-pointer font-bree group/logo ">
      <span className="text-fourColor">DM</span>
      <span className="absolute top-[47%] pl-2 w-20 text-[9px] py-[1px] text-secondColor bg-firstColor transition-all duration-300 group-hover/logo:text-thirdColor group-hover/logo:scale-110 ">
        STUDIO LUXURY
      </span>
    </div>
  );
};

export default Logo;
