import { IUser } from "../../../types/users.type";
import { Logo } from "../..";
import { DropDownMenu } from "..";
import { NavLinkCustom } from "../../Custom";
import { AiFillPhone } from "react-icons/ai";

interface IUserAuthProps {
  logout: () => void;
  user: IUser;
}

const authNavLinks = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/client",
    title: "Client",
  },
  {
    to: "/editor",
    title: "Editor",
  },
  {
    to: "/admin",
    title: "Admin",
  },
];

const UserAuth = ({ logout, user }: IUserAuthProps) => {
  return (
    <div className="container text-secondColor">
      <div className="flex items-center justify-between px-5 m-auto ">
        <span className="flex items-center ">
          <Logo />
        </span>
        <nav className="min-[320px]:hidden md:block">
          <ul className="flex gap-6 ">
            {authNavLinks.map((navLink) => (
              <li>
                <NavLinkCustom
                  to={navLink.to}
                  title={navLink.title}
                  key={navLink.to}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-1 text-xs">
          <div className="flex items-center justify-center gap-1 pr-5 font-ttInterfacesBold text-firstColor">
            <AiFillPhone className="w-4 h-4"/>
            <address>+380989571902</address>
          </div>
          <div className="font-ttInterfacesRegular">{user.name}</div>
          <DropDownMenu user={user} logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
