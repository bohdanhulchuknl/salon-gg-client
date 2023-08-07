import { Link } from "react-router-dom";
import nails from "../../../assets/servisnail.png";
import pedic from "../../../assets/servispedic.png";
import Vii from "../../../assets/servisvii.png";

const Servises = () => {
  return (
    <div className="container mx-auto flex flex-col items-center  max-h-[940px] px-20 bg-white">
      <div className=" flex flex-col items-center pt-20 font-poppinsBold">
        <div className="flex items-center">
          <div className="md:relative md:text-[50px] text-[32px]">
            Select a service
            <p className="absolute  top-8 -right-5 text-gray-500 text-sm">U</p>
            <p className="absolute  top-5 -right-5 text-gray-500 text-sm">O</p>
            <p className="absolute bottom-3 -right-5 text-gray-500 text-sm">
              R
            </p>
          </div>
          {/* <div className=" flex items-center flex-col text-base pt-3 pl-2   text-gray-500"></div> */}
        </div>
        <p className="md:text-xl text-gray-500 max-md:-m-3 -ml-[160px] ">
          DM studio luxury
        </p>
      </div>
      <div className="md:flex justify-between items-center font-poppins pt-20 gap-10 sm:flex sm:items-center">
        <Link to="">
          <div className="md:flex flex-col items-center hover:shadow-xl">
            <img src={nails} alt="" width={300} height={100} className="" />
            <p className="text-3xl text-center">Nails</p>
          </div>
        </Link>
        <Link to="">
          <div className="md:flex flex-col items-center hover:shadow-xl">
            <img src={pedic} alt="" width={300} height={100} />
            <p className="text-3xl text-center">Pedicure</p>
          </div>
        </Link>
        <Link to="">
          <div className="md:flex flex-col items-center hover:shadow-xl">
            <img src={Vii} alt="" width={300} height={100} />
            <p className="text-2xl text-center">Eyelash extensions</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Servises;
