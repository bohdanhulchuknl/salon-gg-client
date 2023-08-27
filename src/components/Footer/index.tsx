import Logo from "../Logo";
import { HiOutlineMail, HiOutlineHome } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { LiaTelegramPlane, LiaInstagram } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1823] font-apocBold pt-5">
      <div className="justify-between w-full px-16 mx-auto text-white md:flex md:items-center">
        <span className="flex items-center ">
          <Logo />
        </span>
        <div className="pt-1 ">
          <p className="text-center">Work time: </p>
          <p>
            Пн - Пт <br /> з 9:00 до 18:00 (GMT +2)
          </p>
          <p>
            Сб - Вс, <br />
            свято - вихідні
          </p>
        </div>
        <div className="flex-col gap-3 items-left md:flex">
          <p className="text-center ">Contact us:</p>
          <span className="flex items-center gap-3">
            <HiOutlineHome />
            <p>m.Krakow, Pushkina 30</p>
          </span>
          <span className="flex items-center gap-3">
            <BsTelephone />
            <a href="tel:380684439426" className="">
              +38012345678
            </a>
          </span>
          <span className="flex items-center gap-3">
            <HiOutlineMail />
            <a href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</a>
          </span>
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="text-center">We are in:</span>
          <div className="flex gap-3 text-sm">
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
