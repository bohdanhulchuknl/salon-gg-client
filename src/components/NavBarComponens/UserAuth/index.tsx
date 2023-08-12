import { IUser } from "../../../types/users.type";
import { Logo } from "../..";
import { DropDownMenu } from "..";
import { NavLinkCustom } from "../../Custom";

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
      <div className=" flex items-center justify-between  m-auto px-5 ">
        <span className="items-center flex ">
          <Logo />
        </span>
        <nav className="min-[320px]:hidden md:block">
          <ul className="flex gap-6 font-poppinsBold">
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
        <div className="flex gap-5 items-center justify-center">
          <DropDownMenu user={user} logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
