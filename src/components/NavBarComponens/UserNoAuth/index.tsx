import IconButton from "../../../assets/logo.svg";
import { Logo } from "../../index";


import { NavLinkCustom, LinkButtonCustom } from "../../Custom";

const noAuthNavLinks = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/services",
    title: "Our services",
  },
  {
    to: "/works",
    title: "Our works",
  },
  {
    to: "/contacts",
    title: "Contact",
  },
];

const UserNoAuth = () => {
  return (
    <div className="w-full">
      <nav className="">
        <div className="items-center justify-between mx-auto md:flex">
          <span className="flex items-center ">
            <Logo />
          </span>
          <div className="px-4 py-3 mx-auto">
            <div className="items-center hidden sm:flex">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-lg md:text-sm">
                {noAuthNavLinks.map((el) => (
                  <li>
                    <NavLinkCustom title={el.title} to={el.to} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
              <LinkButtonCustom title="Login" to="/login" className="px-[15px] py-[10px] text-xs"/>
          </div>
          <button className="md:hidden w-14 h-14">
            <img src={IconButton} alt="mobile-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserNoAuth;
