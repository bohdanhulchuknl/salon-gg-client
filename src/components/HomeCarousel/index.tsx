import { Carousel } from "react-responsive-carousel";
import { IUser } from "../../types/users.type";
import { LinkButtonCustom } from "../Custom";
import { motion } from "framer-motion";

interface ICaruosel {
  slides: string[];
  user: IUser | null;
}

const HomeCarousel = ({ slides, user }: ICaruosel) => {
  // const prev = () =>
  //   setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  // const next = () =>
  //   setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  return (
    <div className=" relative w-full max-h-[940px]  h-[calc(100vh-80px)] font-poppinsBold">
      <div className="w-full self-end h-full ">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          className="h-full "
          showThumbs={false}
        >
          {slides.map((i) => (
            <div className="h-full">
              <img
                src={i}
                height={940}
                className="w-full  h-[calc(100vh-80px)] object-cover object-top"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute container mx-auto flex flex-col justify-between   inset-0 p-5">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex font-poppinsBold text-white md:pl-10 "
          id="Home"
        >
          <h1 className="text-[74px] sm:text-[100px] ">DM</h1>
          <div className="pt-[10px]  md:flex md:flex-col sm:pt-[37px] sm:pl-2 ">
            <h2 className="text-[28px] sm:text-[38px] sm:leading-none  md:-mt-2 md:">
              studio
            </h2>
            <h2 className="text-[28px] sm:text-[38px] ">luxury</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-between pb-5 md:items-center  md:flex-row whitespace-nowrap md:px-10 lg:pb-16 gap-6 lg:px-10"
        >
          <div>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className=" text-white text-[30px] bg-fourColor py-2 px-2 whitespace-nowrap "
            >
              beauty salon
            </motion.span>
          </div>

          <div>
            <LinkButtonCustom
              title="Create order"
              to={`${!user ? "/login" : "/create-order-select-master"}`}
              textSize="text-lg"
              px="px-8"
              py="py-3"
              bgHeight="h-12"
            />
          </div>
        </motion.div>
      </div>

      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div> */}

      {/* <div className="absolute bottom-4 right-0 left-0">
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
