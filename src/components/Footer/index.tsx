import Logo from "../Logo";
import { LiaTelegramPlane, LiaInstagram } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="  w-full bg-[#1E1823] ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-bree text-white">
        <span className=" items-center flex ">
          <Logo />
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Our services
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Our works
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-start text-sm">
          <p className="pb-3">Contact us</p>
          <a href="tel:380684439426">+38012345678</a>
          <a href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</a>
          <div className=" flex gap-3">
            <div className="pt-3 flex flex-col  items-center">
              <LiaTelegramPlane className="h-10 w-10" />
              <p>Telegram</p>
            </div>
            <div className="pt-3 flex flex-col items-center">
              <LiaInstagram className="h-10 w-10" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
