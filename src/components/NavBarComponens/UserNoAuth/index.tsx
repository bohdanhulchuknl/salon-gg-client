import Logo from "../../../assets/logo.svg";
import IconButton from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const UserNoAuth = () => {
  return (
    <div className="w-full">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="md:flex justify-between items-center max-w-screen-xl p-2">
          <span className=" items-center flex ">
            <a href="/" className="flex items-center ">
              <img src={Logo} alt="DM logo" width={70} height={70} />
            </a>
          </span>
          <div className="px-4 py-3 mx-auto">
            <div className="hidden sm:flex items-center">
              <ul className="flex text-lg flex-row font-bree mt-0 mr-6 space-x-8 md:text-sm">
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
          <div className="hidden md:flex items-center pr-4 font-bree">
            <Link
              to="/login"
              className="relative inline-block text-lg font-bree group"
            >
              <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative text-sm">login</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
                data-rounded=""
              ></span>
            </Link>
          </div>
          <button className="md:hidden w-14 h-14">
            <img src={IconButton} alt="mobile-icon" />
          </button>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700"></nav>
    </div>
  );
};

export default UserNoAuth;