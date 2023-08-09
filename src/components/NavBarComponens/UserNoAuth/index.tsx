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
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="md:flex justify-between items-center mx-auto">
          <span className=" items-center flex ">
            <Logo />
          </span>
          <div className="px-4 py-3 mx-auto">
            <div className="hidden sm:flex items-center">
              <ul className="flex text-lg flex-row font-bree mt-0 mr-6 space-x-8 md:text-sm">
                {noAuthNavLinks.map((el) => (
                  <li>
                    <NavLinkCustom title={el.title} to={el.to} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <LinkButtonCustom title="Login" to="/login"/> 
          </div>
          <button className="md:hidden w-14 h-14">
            <img src={IconButton} alt="mobile-icon" />
          </button>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700"></nav>
    </div>
  );
};

export default UserNoAuth;
