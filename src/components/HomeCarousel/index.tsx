import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

import { Carousel } from "react-responsive-carousel";
import { IUser } from "../../types/users.type";
import { LinkButtonCustom } from "../Custom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setHomeRef, setHomeIsInView } from "../../app/slices/scrollRefs.slice";

interface ICaruosel {
  slides: string[];
  user: IUser | null;
}

const HomeCarousel = ({ slides, user }: ICaruosel) => {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (ref) {
      dispatch(setHomeRef(ref));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setHomeIsInView(isInView));
  }, [isInView, dispatch]);

  return (
    <div ref={ref} className="relative w-full h-screen">
      <div className="self-end w-full h-full ">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          className="relative h-full cursor-auto -z-10"
          showThumbs={false}
        >
          {slides.map((i) => (
            <div className="h-full">
              <img
                src={i}
                height={940}
                className="object-cover object-center w-full h-screen"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container px-24 absolute inset-0 flex flex-col justify-between p-5 pt-[100px] mx-auto font-apocBold">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex text-white "
          id="Home"
        >
          <div className="flex items-center justify-center gap-2 px-5 rounded-sm bg-thirdColor/50">
            <h1 className=" text-[74px] text-firstColor ">DM</h1>
            <div className=" md:flex md:flex-col text-fifth">
              <h2 className="text-[30px]  sm:leading-none">studio</h2>
              <h2 className="text-[30px]  sm:-mt-3 ">luxury</h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col justify-between gap-6 pb-5 md:items-center md:flex-row whitespace-nowrap md:px-10 lg:pb-16 lg:px-10"
        >
          <div>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="px-2 py-2 text-3xl text-white rounded-sm bg-firstColor whitespace-nowrap"
            >
              beauty salon
            </motion.span>
          </div>

          <div>
            <LinkButtonCustom
              title="Create order"
              to={`${!user ? "/login" : "/create-order-select-master"}`}
              className="px-6 py-3 text-xl bg-fifth !text-thirdColor hover:bg-firstColor border-2 border-fifth hover:border-thirdColor hover:scale-95
              "
            />
          </div>
        </motion.div>
      </div>

      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 text-gray-800 rounded-full shadow bg-white/80 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 text-gray-800 rounded-full shadow bg-white/80 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div> */}

      {/* <div className="absolute left-0 right-0 bottom-4">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default HomeCarousel;
