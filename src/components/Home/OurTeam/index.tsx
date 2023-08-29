import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setTeamIsInView,
  setTeamRef,
} from "../../../app/slices/scrollRefs.slice";
import { motion } from "framer-motion";

import teamImg_1 from "../../../assets/team/1.jpg";
import teamImg_2 from "../../../assets/team/2.jpg";
import teamImg_3 from "../../../assets/team/3.jpg";

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
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (ref) {
      dispatch(setTeamRef(ref));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setTeamIsInView(isInView));
  }, [isInView, dispatch]);
  return (
    <div className="w-full h-screen p-5 pl-28" ref={ref}>
      <div className="container relative flex flex-col items-center justify-center w-full h-full mx-auto">
        <motion.h2
          viewport={{ once: true }}
          animate={isInView ? "top" : "center"}
          variants={titleVariants}
          initial={"center"}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute flex items-center justify-center text-3xl font-apocBold top-[35%] left-[45%]"
        >
          <div className="flex flex-col ">
            <span>Our Team</span>
            <span className="text-xl text-fifth ">DM studio luxury</span>
          </div>
        </motion.h2>
        <motion.div
          animate={isInView ? "show" : "hide"}
          initial={"hide"}
          variants={teamBlockVariants}
          transition={{
            duration: 0.5,
            delay: 2.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-full gap-5 "
        >
          <div className="flex items-center justify-around w-full gap-2">
            {team.map((i, index) => (
              <div
                key={index}
                className=" max-h-[600px] cursor-pointer group pb-6 rounded-full "
              >
                <div className="relative w-48 h-48 duration-1000 preserve-3d group-hover:my-rotate-y-180">
                  <div className="absolute w-full h-full backface-hidden ">
                    <div className="relative flex items-end justify-center w-full h-full ">
                      <img
                        src={i.img}
                        className="absolute object-cover object-top w-full h-full rounded-full shadow-sm -z-10 shadow-black "
                      />
                      <h1 className="w-full py-2 text-center text-thirdColor ">
                        {i.name}
                      </h1>
                    </div>
                  </div>

                  <div className="absolute w-full h-full overflow-hidden text-xs border-2 rounded-full shadow-md shadow-black/50 my-rotate-y-180 backface-hidden">
                    <div className="flex flex-col items-center justify-center h-full pb-2 text-center divide-y-2 divide-white text-firstColor ">
                      <p className="text-fifth">{i.position.toUpperCase()}</p>

                      <p className="max-w-[150px]">
                      {i.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
