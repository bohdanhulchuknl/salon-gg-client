import { Link } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";

import mas1img from "../../assets/masters/mas1.png";
import mas2img from "../../assets/masters/mas2.png";


const masters = [
  {
    name: "name 1",
    photo: mas1img,
    rang: "Top",
    regals: ["good", "very good"],
    works: [""],
  },
  {
    name: "name 2",
    photo: mas2img,
    rang: "Top",
    regals: ["good", "very good"],
    works: [""],
  },

];

const CreateOrder = () => {
  return (
    <div className="font-bree p-5 h-screen">
      <div>
        <Link to="/" className="relative inline-block text-lg font-bree group">
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
            <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
            <span className="relative text-sm flex items-center gap-1">
              <ImUndo2 className="fill-hoverColor group-hover/backButton:fill-black" />
              <span>Back</span>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor"
            data-rounded=""
          ></span>
        </Link>
      </div>
      <div className="flex items-center justify-center pb-5">
        <div>
          <div className="text-6xl">Select a master</div>
          <div className="text-gray-500">DM studio luxury</div>
        </div>
      </div>

      <div className="flex gap-10 justify-center items-center text-gray-500">
        {masters.map((mastr) => (
          <div className="flex flex-col group/item justify-between h-[450px]">
            <div>
              <div>
                <img
                  src={mastr.photo}
                  alt=""
                  className="object-cover h-[400px] transition-height w-96 object-top group-hover/item:h-[250px]"
                />
              </div>
              <div className="flex flex-col items-center">
                <span>{mastr.name}</span>
                <span>{mastr.rang}</span>
              </div>
            </div>

            <span className="hidden group-hover/item:visible group-hover/item:block">
              {mastr.regals.map((reg) => (
                <span>{reg}</span>
              ))}
            </span>
            <div className="hidden group-hover/item:flex group-hover/item:justify-center">
              <Link
                to="/"
                className="relative inline-block text-lg font-bree group"
              >
                <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                  <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                  <span className="relative text-sm flex items-center gap-1">
                    <ImUndo2 className="fill-hoverColor group-hover/backButton:fill-black" />
                    <span>Back</span>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor"
                  data-rounded=""
                ></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateOrder;
