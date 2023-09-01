import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "@headlessui/react";
import { AiOutlineCloseSquare } from "react-icons/ai";

import {
  setTeamIsInView,
  setTeamRef,
} from "../../../app/slices/scrollRefs.slice";
import { motion } from "framer-motion";

import teamImg_1 from "../../../assets/team/1.jpg";
import teamImg_2 from "../../../assets/team/2.jpg";
import teamImg_3 from "../../../assets/team/3.jpg";
import { LinkButtonCustom } from "../../Custom";

const titleVariants = {
  center: {
    top: "35%",
  },
  top: {
    top: 0,
  },
};

const teamBlockVariants = {
  show: {
    opacity: 1,
    y: 0,
  },
  hide: {
    opacity: 0,
    y: "-100%",
  },
};

const team = [
  {
    name: "Max",
    position: "admin",
    desc: "Super cool admin",
    img: teamImg_2,
  },
  {
    name: "Dasha",
    position: "master",
    desc: "Super cool master",
    img: teamImg_1,
  },
  {
    name: "Fiona",
    position: "master",
    desc: "Super cool master",
    img: teamImg_3,
  },
];

const OurTeam = () => {
  const [isOpenDialogMoreInfo, setIsOpenDialogMoreInfo] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (ref) {
      dispatch(setTeamRef(ref.current!));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setTeamIsInView(isInView));
  }, [isInView, dispatch]);
  return (
    <div
      className="container flex w-full min-h-screen p-5 mx-auto md:pl-28"
      ref={ref}
    >
      <div className="relative flex flex-col items-center justify-center w-full ">
        <motion.h2
          viewport={{ once: true }}
          animate={isInView ? "top" : "center"}
          variants={titleVariants}
          initial={"center"}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute top-0 flex items-center justify-center w-full text-xl md:text-3xl font-apocBold"
        >
          <div className="flex flex-col ">
            <span>Our team</span>
            <span className="text-base md:text-xl text-fifth ">
              DM studio luxury
            </span>
          </div>
        </motion.h2>
        <motion.div
          animate={isInView ? "show" : "hide"}
          initial={"hide"}
          variants={teamBlockVariants}
          transition={{
            duration: 0.5,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-full h-full gap-5 pt-28"
        >
          <div className="flex flex-wrap items-center justify-around w-full h-full gap-2">
            {team.map((element, index) => (
              <div
                key={index}
                className=" max-h-[600px] cursor-pointer group pb-6 rounded-full "
              >
                <div className="relative w-48 h-48 duration-1000 preserve-3d group-hover:my-rotate-y-180">
                  <div className="absolute w-full h-full backface-hidden ">
                    <div className="relative flex items-end justify-center w-full h-full ">
                      <img
                        src={element.img}
                        className="absolute object-cover object-top w-full h-full rounded-full shadow-sm -z-10 shadow-black "
                      />
                      <h1 className="w-full py-2 text-center text-thirdColor ">
                        <span className="relative">
                          {element.name}
                          <div className="absolute top-0 -right-4">
                            <span className="relative flex w-2 h-2 ">
                              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-thirdColor"></span>
                              <span className="relative inline-flex w-2 h-2 rounded-full bg-fifth"></span>
                            </span>
                          </div>
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div className="absolute w-full h-full overflow-hidden text-xs border-2 rounded-full shadow-md shadow-black/50 my-rotate-y-180 backface-hidden">
                    <div className="flex flex-col items-center justify-center h-full gap-5 text-center text-firstColor ">
                      <p className="text-fifth">
                        {element.position.toUpperCase()}
                      </p>
                      <LinkButtonCustom
                        title="more"
                        to="#"
                        className="!px-4 !py-2"
                        onClick={() => setIsOpenDialogMoreInfo(true)}
                      />
                    </div>
                  </div>
                </div>
                <Dialog
                  open={isOpenDialogMoreInfo}
                  onClose={() => setIsOpenDialogMoreInfo(false)}
                  className="fixed top-0 z-50 flex items-center justify-center w-full h-screen backdrop-blur-sm bg-thirdColor/10"
                >
                  <Dialog.Panel className="relative p-10 bg-white rounded-lg drop-shadow-2xl shadow-white">
                    <Dialog.Title className="flex justify-between pb-5">
                      {element.desc}
                    </Dialog.Title>
                    <Dialog.Description className="pb-2 text-gray-500"></Dialog.Description>

                    <AiOutlineCloseSquare
                      className=" transition cursor-pointer h-7 w-7 absolute -top-[25%] right-0 fill-firstColor hover:fill-fifth  "
                      onClick={() => setIsOpenDialogMoreInfo(false)}
                    />
                  </Dialog.Panel>
                </Dialog>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
