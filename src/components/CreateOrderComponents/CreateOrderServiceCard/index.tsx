import { IService } from "../../../types/services.types";
import { BsCheckSquare } from "react-icons/bs";
import { LinkButtonCustom } from "../../Custom";


interface ICreateOrderServiceCardProps {
  service: IService;
}

const CreateOrderServiceCard = ({ service }: ICreateOrderServiceCardProps) => {
  return (
    <div className="w-[350px] h-[400px] cursor-pointer group pb-6 font-poppinsBold">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden  w-full h-full shadow-md shadow-black">
          <div className="w-full h-full relative flex items-end justify-center ">
            <img
              src={service.img}
              className=" absolute object-cover w-full h-full object-top -z-10"
            />
            <h1 className="text-thirdColor bg-fourColor w-full text-center py-2">
              {service.title}
            </h1>
          </div>
        </div>

        <div className="font-poppinsBold shadow-2xl  shadow-black absolute my-rotate-y-180 backface-hidden w-full h-full border-2 overflow-hidden ">
          <div className=" text-center flex flex-col items-center justify-between text-firstColor p-2 h-full ">
            <div className="w-full  ">
              <div className="text-lg font-poppinsBold bg-fourColor py-2">{service.title}</div>
              <div className=" w-full items-start flex  flex-col gap-2 p-3 text-firstColor">
                {service.variants.map((el) => (
                  <div className="flex items-center  justify-start gap-1"> <BsCheckSquare/> <span className="flex-shrink-0 flex-grow flex-auto">{el}</span></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 z-20">
              <LinkButtonCustom title="Select" to="/"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderServiceCard;
