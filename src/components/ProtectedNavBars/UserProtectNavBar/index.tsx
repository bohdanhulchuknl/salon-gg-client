import { Logo } from "../..";
import { Link } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
import { BsCaretDownSquare } from "react-icons/bs";
import { MdBorderColor } from "react-icons/md";


import { IUser } from "../../../types/users.type";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
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
                      <ImUndo2 className="fill-hoverColor group-hover/backButton:fill-black" />
                      <span>Back</span>
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor"
                    data-rounded=""
                  ></span>
                </Link>
              </div>
              <div className="group/backButton -mb-4">
                <Link
                  to="/create-order"
                  className="relative inline-block text-lg font-bree group"
                >
                  <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                    <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                    <span className="relative text-sm flex items-center gap-1">
                      <MdBorderColor className="fill-hoverColor group-hover/backButton:fill-black" />
                      <span>Create</span>
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor"
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

            <div className="font-bree">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="text-white">
                      <div className="flex items-center gap-1">
                        <img
                          className=""
                          src={user.picture}
                          alt="User"
                          height={30}
                          width={30}
                        />
                        <BsCaretDownSquare
                          className={`h-[10px] w-[10px] ease-in-out transition-all ${
                            open
                              ? "rotate-180 translate-y-4 fill-hoverColor"
                              : ""
                          }`}
                        />
                      </div>
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items className="text-white absolute top-0 right-0 flex flex-col bg-gray-900 min-w-[300px] border-2 border-hoverColor p-2  cursor-pointer text-xs">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={`transition-all flex items-center gap-1 p-1 hover:bg-hoverColor hover:text-gray-900 ${
                                active ? "bg-blue-500" : ""
                              }`}
                            >
                              <AiFillSetting /> Account settings
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item disabled>
                          <span className="opacity-75">
                            Invite a friend (coming soon!)
                          </span>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserProtectNavBar;
