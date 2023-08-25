import { Parallax } from "react-parallax";
import imgParallax_2 from "../../../assets/parallax/parallax_2.jpg";

const WhyUs = () => {
  return (
    <Parallax
      strength={300}
      bgImage={imgParallax_2}
      bgImageStyle={{ ["object-fit"]: "cover", ["object-position"]: "center" }}
      className="shadow-2xl shadow-thirdColor"
    >
      <div className="container flex flex-col h-screen p-5 mx-auto ">
        <h1 className="flex items-center justify-center py-5 text-3xl font-ttInterfacesBold">
          <div className="flex flex-col">
            <span>Why we are?</span>
            <span className=" text-thirdColor text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              DM studio luxury
            </span>
          </div>
        </h1>
        <div className="flex items-center flex-1 text-firstColor">
          <div className="p-3 rounded-lg md:p-10 md:w-1/2">

          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default WhyUs;
