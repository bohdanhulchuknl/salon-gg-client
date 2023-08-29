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
      <div className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
        <div className="absolute w-full h-full shadow-md backface-hidden shadow-black">
          <div className="relative flex items-end justify-center w-full h-full ">
            <img
              src={master.photo}
              className="absolute object-cover object-top w-full h-full -z-10"
            />
            <h1 className="w-full py-2 text-center text-thirdColor bg-firstColor/50">
              {master.name}
            </h1>
          </div>
        </div>

        <div className="absolute w-full h-full overflow-hidden text-xs border-2 shadow-2xl bg-fourColor shadow-black my-rotate-y-180 backface-hidden">
          <div className="flex flex-col items-center justify-between h-full pb-2 text-center divide-y-2 divide-white text-firstColor ">
            <div className="w-full p-3 ">
              <div className="flex items-center justify-between gap-1 pb-2 ">
                <div className="flex items-center ">
                  <AiFillStar />
                  <h1 className="">{master.rang}</h1>
                </div>
                <div className="">
                  <div
                    className="flex items-center gap-1 transition-all group/comments"
                    onClick={() => setIsOpen(true)}
                  >
                    <p className=" text-secondColor group-hover/comments:text-firstColor">
                      Comments
                    </p>
                    <MdInsertComment className="fill-secondColor group-hover/comments:fill-gray-900" />
                  </div>

                  <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="fixed top-0 flex items-center justify-center w-full h-screen backdrop-blur-sm bg-transparent/50"
                  >
                    <Dialog.Panel className="relative p-10 bg-white drop-shadow-2xl shadow-white">
                      <Dialog.Title className="flex justify-between pb-5">
                        <div className="flex flex-col items-start gap-2">
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
                            {master.regals.map((reg, index) => (
                              <span key={index}>{reg}</span>
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
                          {master.comments.map((comment, index) => (
                            <div className="py-10 bg-gray-100" key={index}>
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

              <ul className="flex flex-col items-start gap-1 text-secondColor">
                <li className="flex gap-1"><BsCheckSquare/> <span>{master.regals[0]}</span></li>
                <li className="flex gap-1"><BsCheckSquare/> <span>{master.regals[1]}</span></li>
              </ul>
            </div>

            <div className="self-end w-full h-full">
              <Carousel
                autoPlay
                infiniteLoop
                interval={2000}
                className="h-full"
                showThumbs={false}
              >
                {master.works.map((work, index) => (
                  <div className="h-full" key={index}>
                    <img src={work} className="object-cover object-top w-auto max-h-[300px]"  />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="absolute bottom-0 z-20 w-full p-2 bg-thirdColor">
              <LinkButtonCustom title="Select" to="/"  icon={<ImUndo2 className="duration-150 rotate-180 fill-hoverColor group-hover/backButton:fill-black" />}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderMasterCard;
