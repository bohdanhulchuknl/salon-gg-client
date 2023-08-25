import work_1 from "../../../assets/works/1.jpg";
import work_2 from "../../../assets/works/2.jpg";
import work_3 from "../../../assets/works/3.jpg";
import work_4 from "../../../assets/works/4.jpg";
import work_5 from "../../../assets/works/5.jpg";
import work_6 from "../../../assets/works/6.jpg";
import work_7 from "../../../assets/works/7.jpg";
import work_8 from "../../../assets/works/8.jpg";
import work_9 from "../../../assets/works/9.jpg";
import work_10 from "../../../assets/works/10.jpg";
import work_11 from "../../../assets/works/11.jpg";
import work_12 from "../../../assets/works/12.jpg";

const worksArr = [
  work_1,
  work_2,
  work_3,
  work_4,
  work_5,
  work_6,
  work_7,
  work_8,
  work_9,
  work_10,
  work_11,
  work_12,
];

console.log(Math.floor(worksArr.length / 4));

const OurWorks = () => {
  return (
    <div className="container flex flex-col h-screen mx-auto">
      <h1 className="flex items-center justify-center py-16 text-3xl font-ttInterfacesBold ">
        <div className="flex flex-col">
          <span>Our works</span>
          <span className=" text-thirdColor text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            DM studio luxury
          </span>
        </div>
      </h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-2 p-2 overflow-hidden">
        {worksArr.map((work) => (
          <img
            src={work}
            alt=""
            className="object-cover object-top w-full h-full transition-all duration-1000 rounded-sm drop-shadow-md hover:object-bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
