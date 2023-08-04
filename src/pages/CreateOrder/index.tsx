import { Link } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mas1img from "../../assets/masters/mas1.png";
import mas2img from "../../assets/masters/mas2.png";
import work1 from "../../assets/masters/masworks/work_1.jpeg";
import work2 from "../../assets/masters/masworks/work_2.jpg";
import work3 from "../../assets/masters/masworks/work_3.jpg";

const masters = [
  {
    name: "name 1",
    photo: mas1img,
    rang: "Middle",
    regals: ["good", "1 year of experience"],
    works: [work1, work2, work3],
  },
  {
    name: "name 2",
    photo: mas2img,
    rang: "Top",
    regals: ["very good", "2 years of experience"],
    works: [work1, work2, work3],
  },
];

const CreateOrder = () => {
  return (
    <div className="font-bree p-5 h-screen">
      <div className="">
        <Link
          to="/"
          className="shadow-sm shadow-black relative inline-block text-lg font-bree group "
        >
          <span className="shadow-sm shadow-black group-hover:shadow-lg group-hover:shadow-black relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
            <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
            <span className="relative text-sm flex items-center gap-1 ">
              <ImUndo2 className="group-hover:-rotate-12 duration-150 fill-hoverColor group-hover/backButton:fill-black " />
              <span>Back</span>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor "
            data-rounded=""
          ></span>
        </Link>
      </div>
      <div className="flex items-center justify-center pb-5">
        <div>
          <div className="text-6xl">Select a master</div>
          <div className="text-gray-500">DM studio luxury</div>
        </div>
      </div>

      <div className="flex gap-10 justify-center items-center">
        <section className="flex justify-center items-center gap-16 text-white h-[calc(100vh-200px)] flex-wrap">
          {masters.map((master) => (
            <div className="w-[350px] h-full cursor-pointer group pb-6">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden  w-full h-full shadow-md shadow-black">
                  <div className="w-full h-full relative flex items-end justify-center ">
                    <img
                      src={master.photo}
                      className=" absolute object-cover w-full h-full object-top"
                    />
                    <h1 className="text-white z-10 bg-transparent/50 w-full text-center py-2">
                      {master.name}
                    </h1>
                  </div>
                </div>

                <div className="shadow-2xl bg-gray-100  shadow-black absolute my-rotate-y-180 backface-hidden w-full h-full border-2 overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-between  h-full text-gray-900 pb-2 ">
                    <div className="w-full p-3">
                      <div className="text-base font-semibold pb-2 flex  gap-1  justify-between items-center">
                        <div className="flex items-center">
                          <AiFillStar />
                          <h1 className="">{master.rang}</h1>
                        </div>
                        <div>
                          <FaComments/>
                        </div>
                      </div>

                      <div className="flex gap-2 text-gray-400">
                        <p className=" text-sm">{master.regals[0]}</p>
                        <p className=" text-sm">{master.regals[1]}</p>
                      </div>
                    </div>

                    <div className="w-full self-end">
                      <Carousel
                        autoPlay
                        infiniteLoop
                        interval={2000}
                        className=""
                        showThumbs={false}
                        
                      >
                        {master.works.map((work) => (
                          <div>
                            <img src={work} />
                          </div>
                        ))}
                      </Carousel>
                    </div>

                    <div className="">
                      <Link
                        to="/"
                        className="shadow-sm shadow-black relative inline-block text-lg font-bree group "
                      >
                        <span className="shadow-sm shadow-black group-hover:shadow-lg group-hover:shadow-black relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-gray-900">
                          <span className="absolute inset-0 w-full h-full px-3 py-1  bg-gray-900"></span>
                          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                          <span className="relative text-sm flex items-center gap-1 ">
                            <ImUndo2 className=" duration-150 fill-hoverColor group-hover/backButton:fill-black rotate-180" />
                            <span>Select</span>
                          </span>
                        </span>
                        <span
                          className="absolute bottom-0 right-1 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white  group-hover:mb-1 group-hover:mr-0 group-hover:bg-hoverColor "
                          data-rounded=""
                        ></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CreateOrder;
