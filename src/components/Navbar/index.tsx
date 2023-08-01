import userIcon from "../../assets/user-avatar.png";
import Logo from "../../assets/logo.svg";
import IconButton from "../../assets/menu-button_icon.svg";
import { Link } from "react-router-dom";
import { IUser } from "../../types/users.type";

import { serverUri } from "../../config/config";

type Props = {
  user: IUser | null;
};

const Navbar = ({ user }: Props) => {
  const logout = () => {
    window.open(`${serverUri}/auth/logout`, "_self");
    // const res = await fetch("http://localhost:5000/auth/logout")
    // console.log(res)
  };
  return (
    <div className="flex">
      {user ? (
        <ul className="flex gap-6">
          <li>
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
          </li>
          <li>{user.username}</li>
          <li onClick={logout}>LOGOUT</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/client">Client</Link>
          </li>
          <li>
            <Link to="/editor">editor</Link>
          </li>
          <li>
            <Link to="/Admin">admin</Link>
          </li>
        </ul>
      ) : (
        <div className="w-full">
          <nav className="bg-white  border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl p-4">
              <span>
                <a href="/" className="flex items-center h-[50px] ">
                  <img src={Logo} alt="DM logo" />
                </a>
              </span>
              <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="hidden sm:flex items-center">
                  <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                    <li>
                      <a
                        href="/"
                        className="text-gray-900 dark:text-white hover:underline"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#About"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Our services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Our works
                      </a>
                    </li>
                    <li>
                      <a
                        href="#footer "
                        className="text-gray-900 dark:text-white hover:underline"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <a href="#_" className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3  bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">
                      {" "}
                      <a href="/login" className=" ">
                        login
                      </a>
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
                    data-rounded=""
                  ></span>
                </a>
              </div>
              <button className="inline-block md:hidden w-14 h-14">
                <img src={IconButton} alt="mobile-icon" />
              </button>
            </div>
          </nav>
          <nav className="bg-gray-50 dark:bg-gray-700"></nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
