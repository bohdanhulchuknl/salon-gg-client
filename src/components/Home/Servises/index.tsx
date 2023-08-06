import { Link } from "react-router-dom";
import nails from "../../../assets/servisnail.png";
import pedic from "../../../assets/servispedic.png";
import Vii from "../../../assets/servisvii.png";

const Servises = () => {
  return (
    <div
      className="container relative h-[calc(100vh-80px)] max-h-[940px] pl-20 pr-20 bg-white"
      id="Servises"
    >
      <div className=" flex flex-col items-center pt-20 font-bree">
        <div className="flex items-center">
          <div className="relative text-[50px]">
            Select a service
            <p className="absolute  top-8 -right-5 text-gray-500 text-sm">U</p>
            <p className="absolute  top-5 -right-5 text-gray-500 text-sm">O</p>
            <p className="absolute bottom-3 -right-5 text-gray-500 text-sm">
              R
            </p>
          </div>
          {/* <div className=" flex items-center flex-col text-base pt-3 pl-2   text-gray-500"></div> */}
        </div>
        <p className=" text-lg text-gray-500 -m-3 -ml-[210px]">
          DM studio luxury
        </p>
      </div>
      <div className="flex justify-between items-center font-bree pt-20 gap-10">
        <Link to="">
          <div className="md:relative hover:shadow-xl ">
            <img src={nails} alt="" width={300} height={100} className="" />
            <p className="absolute flex top-72 right-32 text-3xl">Nails</p>
          </div>
        </Link>
        <Link to="">
          <div className=" relative hover:shadow-xl">
            <img src={pedic} alt="" width={300} height={100} />
            <p className="absolute flex top-72 right-24 text-3xl">Pedicure</p>
          </div>
        </Link>
        <Link to="">
          <div className=" relative hover:shadow-xl">
            <img src={Vii} alt="" width={300} height={100} />
            <p className="absolute top-72 right-14 text-2xl">
              Eyelash extensions
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Servises;
