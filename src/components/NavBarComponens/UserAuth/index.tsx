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
        <nav className="">
          <ul className="flex gap-6 font-bree">
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
          {/* <div className="flex items-center">
            <p>{user.name}</p>
          </div>

          <div>
            <LinkButtonCustom
              title="LOGOUT"
              to="/"
              icon={<RiLogoutBoxRLine className="rotate-180" />}
              onClick={logout}
              px="px-5"
            />
          </div> */}
          <DropDownMenu logout={logout} user={user}/>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
