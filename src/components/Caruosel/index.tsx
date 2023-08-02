import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ICaruosel {
  children: string[];
  autoSlide: boolean;
  autoSlideInterval: number;
}

// import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children,
  autoSlide = true,
  autoSlideInterval = 3000,
}: ICaruosel) {
  const [curr, setCurr] = useState(0);

  // const prev = () =>
  //   setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative h-full w-full">
      <div
        className="flex transition-transform ease-out duration-500 max-h-[820px] max-w-[1440px] "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children.map((i) => (
          <img src={i} key={i} />
        ))}
      </div>

      <div className="md:absolute inset-0 flex  font-bree text-white pt-[100px] pl-[100px]">
        <h1 className="text-[80px]">DM</h1>
        <div className=" flex flex-col pt-2 pl-1">
          <h2 className="text-[32px]">studio</h2>
          <h2 className="text-[32px]">luxury</h2>
        </div>
      </div>
      <div className="md:absolute inset-0 flex items-center justify-between px-[100px] py-[100px ]">
        <h2 className="text-white text-[40px]">beauty salon</h2>
        <div className="hidden md:flex items-center pr-4 ">
          <Link to="/login" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-7 py-4 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3  bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Sing-in</span>
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

      <div className="absolute bottom-4 right-0 left-0">
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
      </div>
    </div>
  );
}
