import { Logo } from "../..";
import { ImUndo2 } from "react-icons/im";
import { MdBorderColor } from "react-icons/md";

import { IUser } from "../../../types/users.type";
import { LinkButtonCustom, NavLinkCustom } from "../../Custom";
import { DropDownMenu } from "../../NavBarComponens";

import { logout } from "../../../Api/userApi";

interface IUserProtectNavBarProps {
  user: IUser;
}

const userNavBarItems = [
  {
    to: "/client",
    title: "Orders",
  },
  {
    to: "/history-client",
    title: "History",
  },
];

const UserProtectNavBar = ({ user }: IUserProtectNavBarProps) => {
  console.log(user);
  return (
    <div className=" bg-firstColor">
      <div className="w-full container mx-auto px-5">
        <div className="md:flex justify-between items-center">
          <span className=" flex items-center justify-center gap-8">
            <Logo />
            <div className="group/backButton -mb-4">
              <LinkButtonCustom
                title="Back"
                to="/"
                icon={
                  <ImUndo2 className="group-hover:-rotate-12 duration-150 fill-hoverColor group-hover/backButton:fill-black " />
                }
              />
            </div>
            <div className="group/backButton -mb-4">
              <LinkButtonCustom
                title="Create"
                to="/create-order-select-master"
                icon={
                  <MdBorderColor className=" duration-150 fill-hoverColor group-hover/backButton:fill-black group-hover/backButton:scale-100 " />
                }
              />
            </div>
            <div className="group/backButton -mb-4">
              <LinkButtonCustom
                title="Service"
                to="/create-order-select-service"
                icon={
                  <MdBorderColor className=" duration-150 fill-hoverColor group-hover/backButton:fill-black group-hover/backButton:scale-100 " />
                }
              />
            </div>
          </span>
          <nav>
            <ul className="flex items-center text-base flex-row font-bree gap-5 ">
              {userNavBarItems.map((el) => (
                <li>
                  <NavLinkCustom title={el.title} to={el.to} />
                </li>
              ))}
            </ul>
          </nav>

          <DropDownMenu user={user} logout={logout}/>
        </div>
      </div>
    </div>
  );
};

export default UserProtectNavBar;
