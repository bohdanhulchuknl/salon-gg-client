import { Logo } from "../..";
import { ImUndo2 } from "react-icons/im";
import { IoMdOptions } from "react-icons/io";
import { MdFeaturedPlayList } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";



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
  console.log(user)
  return (
    <div className="shadow-sm bg-thirdColor">
      <div className="container w-full px-5 mx-auto">
        <div className="items-center justify-between md:flex">
          <span className="flex items-center justify-center gap-8 ">
            <Logo />
            <div className="flex items-center justify-center">
              <div className="group/backButton">
                <LinkButtonCustom
                  title="Back"
                  to="/"
                  icon={
                    <ImUndo2 className="duration-150 group-hover:-rotate-12 fill-hoverColor group-hover/backButton:fill-black " />
                  }
                />
              </div>
              <div className=" group/backButton">
                <LinkButtonCustom
                  title="Create"
                  to="/create-order-select-master"
                  icon={
                    <AiFillPlusSquare className="duration-150 fill-hoverColor group-hover/backButton:fill-black group-hover/backButton:scale-100" />
                  }
                />
              </div>
              <div className=" group/backButton">
                <LinkButtonCustom
                  title="Service"
                  to="/create-order-select-service"
                  icon={
                    <MdFeaturedPlayList className="duration-150 fill-hoverColor group-hover/backButton:fill-black group-hover/backButton:scale-100" />
                  }
                />
              </div>
              <div className="group/backButton">
                <LinkButtonCustom
                  title="Options"
                  to="/create-order-select-service-options"
                  icon={
                    <IoMdOptions className="duration-150 fill-hoverColor group-hover/backButton:fill-black group-hover/backButton:scale-100" />
                  }
                />
              </div>
              
            </div>
          </span>
          <nav>
            <ul className="flex flex-row items-center gap-5 text-base ">
              {userNavBarItems.map((el) => (
                <li>
                  <NavLinkCustom title={el.title} to={el.to} />
                </li>
              ))}
            </ul>
          </nav>

          <DropDownMenu logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default UserProtectNavBar;
