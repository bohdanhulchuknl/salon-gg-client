// import { Link, NavLink } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";
// import { GrNext } from "react-icons/gr";

import { LinkButtonCustom } from "../../Custom";

const CreateOrderNavBar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-thirdColor">
      <div className="container mx-auto">
        <div>
          <LinkButtonCustom
            to="/"
            title="Back"
            icon={
              <ImUndo2 className="duration-150 group-hover:-rotate-12 fill-hoverColor group-hover/backButton:fill-black " />
            }
          />
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
          <div className="pt-2 text-xs text-center text-gray-100">
            not selected
          </div>
        </li>

        <li className="fill-white">
          <GrNext className="" />
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
          <div className="pt-2 text-xs text-center text-gray-100">
            not selected
          </div>
        </li>
      </ul> */}
      </div>
    </div>
  );
};

export default CreateOrderNavBar;
