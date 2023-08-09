import { Menu, Transition } from "@headlessui/react";
import { IUser } from "../../../types/users.type";

import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsCaretDownSquare } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

interface IDropDownMenuProps {
  user: IUser;
  logout: () => void;
}

const DropDownMenu = ({ user, logout }: IDropDownMenuProps) => {
  return (
    <div className="font-bree">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="text-white">
              <div className="flex items-center justify-center gap-1 pl-3 pr-2 py-2">
                <img
                  className=""
                  src={user.picture}
                  alt="User"
                  height={25}
                  width={25}
                />
                <BsCaretDownSquare
                  className={`h-[10px] w-[10px] ease-in-out transition-all  ${
                    open
                      ? "rotate-180 translate-y-5 fill-fourColor"
                      : "fill-secondColor"
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
              <Menu.Items className="divide-y divide-secondColor text-white absolute top-1 right-0 flex flex-col bg-firstColor min-w-[300px] border-2 border-fourColor p-2  cursor-pointer text-xs">
                <Menu.Item disabled>
                  <span className="opacity-75 flex items-center gap-1 p-1">
                    <AiFillSetting /> Account settings
                  </span>
                </Menu.Item>
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={logout}
                        className={`transition-all flex items-center gap-1 p-1 hover:bg-hoverColor hover:text-firstColor ${
                          active ? "bg-fourColor" : ""
                        }`}
                      >
                        <RiLogoutBoxRLine className="rotate-180" /> Logout
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DropDownMenu;
