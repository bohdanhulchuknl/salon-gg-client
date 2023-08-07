import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { IUser } from "../../types/users.type";

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
        className="absolute inset-0 flex  font-poppinsBold text-white pl-20 pt-10"
        id="Home"
      >
        <h1 className="text-[100px]">DM</h1>
        <div className=" flex flex-col pt-[34px] pl-2 ">
          <h2 className="text-[36px] leading-none">studio</h2>
          <h2 className="text-[36px]">luxury</h2>
        </div>
      </div>

      <div className="absolute inset-0 flex items-end justify-between pb-20 px-20 font-poppinsBold">
        <h2 className="text-white text-[40px]">beauty salon</h2>
        <div className=" md:flex items-center pr-4 ">
          <Link
            to={`${!user ? "/login" : "/create-order-select-master"}`}
            className="relative inline-block text-lg group "
          >
            <span className="relative z-10 block px-7 py-4 overflow-hidden font-poppinsBold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3  bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Create order</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
              data-rounded=""
            ></span>
          </Link>
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
