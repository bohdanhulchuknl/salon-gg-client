import { Link } from "react-router-dom";

import aboutFigure from "../../../assets/about-figure 1.svg";
const About = () => {
  return (
    <div className="container mx-auto relative max-h-[940px]  h-[calc(100vh-80px)] px-20 bg-white ">
      <div className=" flex flex-col items-center pt-20 font-poppinsBold">
        <div className="flex items-center">
          <div className="relative text-[50px] z-10">
            About
            <p className="absolute  top-3 -right-5 text-gray-500 text-2xl">u</p>
            <p className="absolute bottom-3 -right-5 text-gray-500 text-2xl">
              s
            </p>
          </div>
        </div>
        <p className=" text-base text-gray-500 -ml-3 -mt-4	z-10 ">
          DM studio luxury
        </p>
      </div>

      <div className="text-base text-gray-500 max-w-sm font-poppinsBold">
        <p className="pt-20 ">
          Well-groomed hands and a fresh manicure are already an integral part
          of appearance. At DM studio luxury, we offer trimmed and untrimmed
          manicure services, gel polish or eco-coating, as well as alternative
          care: Brazilian manicure and Japanese P. Shine coating.
        </p>

        <button className="pl-32 w-auto pt-20  ">
          <Link to="/login" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3  bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Sing in</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
              data-rounded=""
            ></span>
          </Link>
        </button>
        <img
          className="absolute bottom-0 right-0 "
          src={aboutFigure}
          alt="about-figure"
        />
      </div>
    </div>
  );
};

export default About;
