import { DropDownMenu } from "..";

import { NavLinkCustom, LinkButtonCustom } from "../../Custom";
import { logout } from "../../../Api/userApi";

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
    <div className="flex w-full">
      <nav className="w-full ">
        <div className="flex items-center justify-between w-full mx-auto ">
          {/* <span className="">
            <Logo />
          </span> */}
          <div className="px-4 py-3 mx-auto">
            <div className="items-center hidden md:block">
              <ul className="flex flex-row mt-0 mr-5 space-x-8 text-lg md:text-sm">
                {noAuthNavLinks.map((el) => (
                  <li>
                    <NavLinkCustom title={el.title} to={el.to} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-3 md:hidden">
            <DropDownMenu logout={logout} />
          </div>
          <div>
            <LinkButtonCustom
              title="Login"
              to="/login"
              className="px-[15px] py-[10px] text-xs"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNoAuth;
