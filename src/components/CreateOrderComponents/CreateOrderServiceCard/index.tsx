import { IService } from "../../../types/services.types";
import { Link } from "react-router-dom";

interface ICreateOrderServiceCardProps {
  service: IService;
}

const CreateOrderServiceCard = ({ service }: ICreateOrderServiceCardProps) => {
  console.log(service);
  return (
    <div className="w-[350px] h-[400px] cursor-pointer group pb-6 font-bree">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden  w-full h-full shadow-md shadow-black">
          <div className="w-full h-full relative flex items-end justify-center ">
            <img
              src={service.img}
              className=" absolute object-cover w-full h-full object-top -z-10"
            />
            <h1 className="text-white  bg-transparent/50 w-full text-center py-2">
              {service.title}
            </h1>
          </div>
        </div>

        <div className="font-bree shadow-2xl  shadow-black absolute my-rotate-y-180 backface-hidden w-full h-full border-2 overflow-hidden ">
          <div className=" text-center flex flex-col items-center justify-between text-gray-900 p-2 h-full ">
            <div className="w-full">
              <div className="text-lg font-bree">{service.title}</div>
              <div className="w-full p-3 flex flex-col items-start gap-2  text-gray-500">
                {service.variants.map((el) => (
                  <div className="border-l-2 border-gray-900 pl-2">{el}</div>
                ))}
              </div>
            </div>

            <div className="">
              <Link
                to="/"
                className="animate-pulse shadow-sm shadow-black relative inline-block text-lg font-bree group"
              >
                <span className="shadow-sm shadow-black relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                  <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                  <span className="relative text-sm flex items-center gap-1 ">
                    <span>Select</span>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0  "
                  data-rounded=""
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderServiceCard;
