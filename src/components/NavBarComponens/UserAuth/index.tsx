import { Link } from "react-router-dom";
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
      <div className="text-white flex items-center justify-between m-auto px-5 ">
        <span className="items-center flex ">
          <Logo />
        </span>
        <nav className="">
          <ul className="flex gap-6 font-bree">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
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
          <div className="hidden md:flex items-center pr-4 font-bree">
            <Link
              onClick={logout}
              to="/"
              className="relative inline-block text-lg font-bree group"
            >
              <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                <span className="relative text-sm">LOGOUT</span>
              </span>
              <span
                className="absolute bottom-1 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-0 group-hover:mr-0"
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
