import { IService } from "../../../types/services.types";
import { BsCheckSquare } from "react-icons/bs";
import { LinkButtonCustom } from "../../Custom";

interface ICreateOrderServiceCardProps {
  service: IService;
}

const CreateOrderServiceCard = ({ service }: ICreateOrderServiceCardProps) => {
  return (
    <div className="w-[350px] h-[400px] cursor-pointer group pb-6">
      <div className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
        <div className="absolute w-full h-full shadow-md backface-hidden shadow-black">
          <div className="relative flex items-end justify-center w-full h-full ">
            <img
              src={service.img}
              className="absolute object-cover object-top w-full h-full -z-10"
            />
            <h1 className="w-full py-2 text-center text-thirdColor bg-firstColor/50">
              {service.title}
            </h1>
          </div>
        </div>

        <div className="absolute w-full h-full overflow-hidden border-2 shadow-2xl shadow-black my-rotate-y-180 backface-hidden ">
          <div className="flex flex-col items-center justify-between h-full p-2 text-center text-firstColor">
            <div className="w-full ">
              <div className="py-2 text-lg bg-fourColor">
                {service.title}
              </div>
              <div className="flex flex-col items-start w-full gap-2 p-3 text-firstColor">
                {service.variants.map((el) => (
                  <div className="flex items-center justify-start gap-1">
                    {" "}
                    <BsCheckSquare />{" "}
                    <span className="flex-auto flex-grow flex-shrink-0">
                      {el}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 z-20">
              <LinkButtonCustom title="Select" to="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderServiceCard;
