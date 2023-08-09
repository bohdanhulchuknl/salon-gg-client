import { Carousel } from "react-responsive-carousel";
import { IUser } from "../../types/users.type";
import { LinkButtonCustom } from "../Custom";

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
    <div className=" relative w-full max-h-[940px]  h-[calc(100vh-80px)]">
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

      <div
        className="absolute inset-0 flex  font-poppinsBold text-white pl-20 pt-10 "
        id="Home"
      >
        <h1 className="text-[100px] ">DM</h1>
        <div className=" flex flex-col pt-[34px] pl-2 ">
          <h2 className="text-[36px] leading-none">studio</h2>
          <h2 className="text-[36px]">luxury</h2>
        </div>
      </div>

      <div className="absolute inset-0 flex items-end justify-between pb-20 px-20 font-poppinsBold">
        <h2 className="text-white text-[40px] bg-fourColor py-1 px-2">beauty salon</h2>
        <div className=" md:flex items-center pr-4 ">

          <LinkButtonCustom
            title="Create order"
            to={`${!user ? "/login" : "/create-order-select-master"}`}
            textSize="text-lg"
            px="px-8"
            py="py-3"
            bgHeight="h-12"
          />

        </div>
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
