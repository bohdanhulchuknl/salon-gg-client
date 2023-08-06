import { Link, NavLink } from "react-router-dom";
import userIcon from "../../../assets/user-avatar.png";
import { IUser } from "../../../types/users.type";
import { Logo } from "../..";

interface IUserAuthProps {
  logout: () => void;
  user: IUser;
}

const UserAuth = ({ logout, user }: IUserAuthProps) => {
  return (
    <div className="container">
      <div className="text-white flex items-center justify-between  m-auto px-5 ">
        <span className="items-center flex ">
          <Logo />
        </span>
        <nav className="">
          <ul className="flex gap-6 font-bree">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` p-1 ease-in-out transition-all duration-200 ${
                    isActive
                      ? "text-hoverColor border-b-4 border-white"
                      : "text-white hover:underline"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
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
              >
                Client
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/editor"
                className={({ isActive }) =>
                  ` p-1 ease-in-out transition-all duration-200 ${
                    isActive
                      ? "text-hoverColor border-b-4 border-white"
                      : "text-white hover:underline"
                  }`
                }
              >
                Editor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  ` p-1 ease-in-out transition-all duration-200 ${
                    isActive
                      ? "text-hoverColor border-b-4 border-white"
                      : "text-white hover:underline"
                  }`
                }
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <div className="flex items-center">
            <p>{user.name}</p>
            <img
              src={userIcon}
              alt="user icon"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            <Link
              onClick={logout}
              to="/"
              className="shadow-sm shadow-black relative inline-block text-lg font-bree group "
            >
              <span className="shadow-sm shadow-black group-hover:shadow-lg group-hover:shadow-black relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                <span className="relative text-sm flex items-center gap-1 ">
                  <span>LOGOUT</span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor "
                data-rounded=""
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
