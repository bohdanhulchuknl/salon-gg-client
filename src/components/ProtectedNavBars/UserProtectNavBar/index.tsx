import { Logo } from "../..";
import { Link } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
import { IUser } from "../../../types/users.type";
import { NavLink } from "react-router-dom";

interface IUserProtectNavBarProps {
  user: IUser;
}

const UserProtectNavBar = ({ user }: IUserProtectNavBarProps) => {
  console.log(user);
  return (
    <div className="bg-gray-900">
      <div className="w-full container mx-auto px-5">
        <nav className="border-gray-200 dark:bg-gray-900">
          <div className="md:flex justify-between items-center">
            <span className=" flex items-center justify-center gap-8">
              <Logo />
              <div className="group/backButton -mb-4">
                <Link
                  to="/"
                  className="relative inline-block text-lg font-bree group"
                >
                  <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                    <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                    <span className="relative text-sm flex items-center gap-1">
                      <ImUndo2 className="fill-white group-hover/backButton:fill-black" />
                      <span>Back</span>
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0"
                    data-rounded=""
                  ></span>
                </Link>
              </div>
            </span>

            <ul className="flex items-center text-base flex-row font-bree gap-5 ">
              <li>
                <NavLink
                  to="/client"
                  className={({ isActive }) =>
                    ` p-1 ease-in-out transition-all duration-200 ${
                      isActive
                        ? "text-hoverColor border-b-4 border-white"
                        : "text-white hover:underline"
                    }`
                  }
                  aria-current="page"
                >
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history-client"
                  className={({ isActive }) =>
                    `p-1 ease-in-out transition-all duration-200 ${
                      isActive
                        ? "text-hoverColor border-b-4 border-white"
                        : "text-white hover:underline"
                    }`
                  }
                  aria-current="page"
                >
                  History
                </NavLink>
              </li>
            </ul>

            <div className=" font-bree text-base flex items-center gap-2 bg-white justify-center">
              <img
                className=""
                src={user.picture}
                alt="User"
                height={30}
                width={30}
              />
              <span className="">{user.name}</span>
              <span className="bg-gray-900">
                <AiFillSetting className="h-[20px] w-[20px] fill-white"/>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserProtectNavBar;
