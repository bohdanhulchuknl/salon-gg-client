import { Link } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";
// import { GrNext } from "react-icons/gr";

const CreateOrderNavBar = () => {
  return (
    <div className="sticky top-0 bg-gray-900 p-4 z-50 flex justify-between items-center">
      <div>
        <Link
          to="/"
          className="shadow-sm shadow-black relative inline-block text-lg font-bree group "
        >
          <span className="shadow-sm shadow-black group-hover:shadow-lg group-hover:shadow-black relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
            <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
            <span className="relative text-sm flex items-center gap-1 ">
              <ImUndo2 className="group-hover:-rotate-12 duration-150 fill-hoverColor group-hover/backButton:fill-black " />
              <span>Back</span>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor "
            data-rounded=""
          ></span>
        </Link>
      </div>

      {/* <ul className="flex items-center gap-5">
        <li>
          <NavLink
            to="/create-order-select-master"
            className={({ isActive }) =>
              ` p-1 ease-in-out transition-all duration-200 ${
                isActive
                  ? "text-hoverColor border-b-4 border-white"
                  : "text-white hover:underline"
              }`
            }
            aria-current="page"
          >
            Selected master
          </NavLink>
          <div className="text-gray-100 pt-2 text-center text-xs">
            not selected
          </div>
        </li>

        <li className="fill-white">
          <GrNext className=" " />
        </li>

        <li>
          <NavLink
            to="/create-order-select-services"
            className={({ isActive }) =>
              ` p-1 ease-in-out transition-all duration-200 ${
                isActive
                  ? "text-hoverColor border-b-4 border-white"
                  : "text-white hover:underline"
              }`
            }
            aria-current="page"
          >
            Selected services
          </NavLink>
          <div className="text-gray-100 pt-2 text-center text-xs">
            not selected
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default CreateOrderNavBar;
