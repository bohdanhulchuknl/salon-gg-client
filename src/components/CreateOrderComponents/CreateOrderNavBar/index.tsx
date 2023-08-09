// import { Link, NavLink } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";
// import { GrNext } from "react-icons/gr";

import { LinkButtonCustom } from "../../Custom";

const CreateOrderNavBar = () => {
  return (
    <div className="sticky top-0 bg-firstColor p-4 z-50 flex justify-between items-center">
      <div className="container mx-auto">
        <div>
          <LinkButtonCustom to="/" title="Back" icon={<ImUndo2 className="group-hover:-rotate-12 duration-150 fill-hoverColor group-hover/backButton:fill-black " />}/>
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
    </div>
  );
};

export default CreateOrderNavBar;
