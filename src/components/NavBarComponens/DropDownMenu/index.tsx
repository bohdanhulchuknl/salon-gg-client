import { Menu, Transition } from "@headlessui/react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { ImMenu3, ImMenu4 } from "react-icons/im";

interface IDropDownMenuProps {
  logout: () => void;
}

const DropDownMenu = ({ logout }: IDropDownMenuProps) => {
  return (
    <div className="relative z-10">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="group/dropMenuButton">
              <div className="flex items-center justify-center gap-1 py-2 pl-3 pr-2 ">
                {!open ? (
                  <ImMenu3 className="w-8 h-8 fill-firstColor" />
                ) : (
                  <ImMenu4 className="w-8 h-8 fill-firstColor" />
                )}
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
              <Menu.Items className="divide-y divide-secondColor text-white absolute top-0 right-0 flex flex-col bg-firstColor min-w-[200px] border-2 border-thirdColor p-2  cursor-pointer text-xs">
                <Menu.Item disabled>
                  <span className="flex items-center gap-1 p-1 opacity-75">
                    <AiFillSetting /> <span>Account settings</span>
                  </span>
                </Menu.Item>
                <div className="z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={logout}
                        className={` cursor-pointer transition-all flex items-center gap-1 p-1 hover:bg-hoverColor hover:text-firstColor ${
                          active ? "bg-thirdColor" : ""
                        }`}
                      >
                        <RiLogoutBoxRLine className="rotate-180" />{" "}
                        <span>Logout</span>
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
