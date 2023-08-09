import Logo from "../Logo";
import { LiaTelegramPlane, LiaInstagram } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1823]">
      <div className="w-full mx-auto px-16  md:flex md:items-center justify-between font-poppinsBold text-white">
        <span className="items-center flex">
          <Logo />
        </span>
        <div className="md:flex items-center gap-5">
          <p className="">Contact us:</p>
          <a href="tel:380684439426" className="block">
            +38012345678
          </a>
          <a href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</a>
        </div>
        <div className="flex flex-col items-start text-sm">
          <div className=" flex gap-3">
            <div className="pt-3 flex flex-col  items-center">
              <LiaTelegramPlane className="h-7 w-7" />
              <p>Telegram</p>
            </div>
            <div className="pt-3 flex flex-col items-center">
              <LiaInstagram className="h-7 w-7" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
