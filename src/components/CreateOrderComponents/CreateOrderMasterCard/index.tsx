import { ImUndo2 } from "react-icons/im";
import { AiFillStar, AiOutlineCloseSquare } from "react-icons/ai";
import { BsCheckSquare } from "react-icons/bs";

import { MdInsertComment } from "react-icons/md";

import { Carousel } from "react-responsive-carousel";
import { IMasterOrder } from "../../../types/master.type";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { LinkButtonCustom } from "../../Custom";

interface ICreateOrderMasterCardProps {
  master: IMasterOrder;
}

const CreateOrderMasterCard = ({ master }: ICreateOrderMasterCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[350px] h-full max-h-[600px] cursor-pointer group pb-6 ">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden  w-full h-full shadow-md shadow-black">
          <div className="w-full h-full relative flex items-end justify-center ">
            <img
              src={master.photo}
              className=" absolute object-cover w-full h-full object-top -z-10"
            />
            <h1 className="text-thirdColor  bg-firstColor/50 w-full text-center py-2">
              {master.name}
            </h1>
          </div>
        </div>

        <div className="shadow-2xl text-xs bg-fourColor  shadow-black absolute my-rotate-y-180 backface-hidden w-full h-full border-2 overflow-hidden">
          <div className="text-center divide-y-2 divide-white flex flex-col items-center justify-between  h-full text-firstColor pb-2 ">
            <div className="w-full p-3 ">
              <div className=" pb-2 flex  gap-1  justify-between items-center">
                <div className="flex items-center ">
                  <AiFillStar />
                  <h1 className="">{master.rang}</h1>
                </div>
                <div className="">
                  <div
                    className="flex items-center gap-1 group/comments transition-all"
                    onClick={() => setIsOpen(true)}
                  >
                    <p className=" text-secondColor group-hover/comments:text-firstColor ">
                      Comments
                    </p>
                    <MdInsertComment className="fill-secondColor group-hover/comments:fill-gray-900" />
                  </div>

                  <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="backdrop-blur-sm fixed top-0 h-screen w-full bg-transparent/50 flex items-center justify-center font-poppinsBold"
                  >
                    <Dialog.Panel className="bg-white drop-shadow-2xl shadow-white p-10 relative">
                      <Dialog.Title className="flex justify-between pb-5">
                        <div className="flex items-start flex-col gap-2">
                          <img
                            src={master.photo}
                            alt=""
                            height={50}
                            width={50}
                            className="object-cover object-top"
                          />
                          <p>{master.name}</p>
                        </div>
                        <div className="flex flex-col items-end text-gray-500">
                          <p className="flex items-center gap-1">
                            {" "}
                            <AiFillStar /> {master.rang}
                          </p>
                          <p className="flex flex-col items-end text-xs">
                            {master.regals.map((reg) => (
                              <span>{reg}</span>
                            ))}
                          </p>
                        </div>
                      </Dialog.Title>
                      <Dialog.Description className="pb-2 text-gray-500">
                        Comments
                      </Dialog.Description>
                      <div className="">
                        <Carousel
                          autoPlay
                          infiniteLoop
                          interval={2000}
                          className=""
                          showThumbs={false}
                        >
                          {master.comments.map((comment) => (
                            <div className="bg-gray-100 py-10">
                              <h5>{comment.from}</h5>
                              <p>{comment.text}</p>
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <AiOutlineCloseSquare
                        className=" transition cursor-pointer h-7 w-7 absolute -top-[10%] right-0 fill-white hover:fill-hoverColor "
                        onClick={() => setIsOpen(false)}
                      />
                    </Dialog.Panel>
                  </Dialog>
                </div>
              </div>

              <ul className="flex gap-1 text-secondColor flex-col items-start">
                <li className="flex gap-1"><BsCheckSquare/> <span>{master.regals[0]}</span></li>
                <li className="flex gap-1"><BsCheckSquare/> <span>{master.regals[1]}</span></li>
              </ul>
            </div>

            <div className="w-full self-end h-full">
              <Carousel
                autoPlay
                infiniteLoop
                interval={2000}
                className="h-full"
                showThumbs={false}
              >
                {master.works.map((work) => (
                  <div className="h-full">
                    <img src={work} className="object-cover object-top w-auto max-h-[300px]"  />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="absolute bottom-0 z-20 bg-thirdColor w-full p-2">
              <LinkButtonCustom title="Select" to="/"  icon={<ImUndo2 className=" duration-150 fill-hoverColor group-hover/backButton:fill-black rotate-180" />}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderMasterCard;
