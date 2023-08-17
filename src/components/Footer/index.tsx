import Logo from "../Logo";
import { LiaTelegramPlane, LiaInstagram } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1823]">
      <div className="justify-between w-full px-16 mx-auto text-white md:flex md:items-center">
        <span className="flex items-center">
          <Logo />
        </span>
        <div className="items-center gap-5 md:flex">
          <p className="">Contact us:</p>
          <a href="tel:380684439426" className="block">
            +38012345678
          </a>
          <a href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</a>
        </div>
        <div className="flex flex-col items-start text-sm">
          <div className="flex gap-3 ">
            <div className="flex flex-col items-center pt-3">
              <LiaTelegramPlane className="h-7 w-7" />
              <p>Telegram</p>
            </div>
            <div className="flex flex-col items-center pt-3">
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
