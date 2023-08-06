

import { CreateOrderMasterCard } from "../../components/CreateOrderComponents";
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

const CreateOrderSelectMaster = () => {
  return (
    <div className="font-bree">
      <div className="flex items-center justify-center pb-5">
        <div>
          <div className="text-6xl">Select a master</div>
          <div className="text-gray-500">DM studio luxury</div>
        </div>
      </div>

      <div className="flex gap-10 justify-center items-center">
        <section className="flex justify-center items-center gap-16 text-white h-[calc(100vh-200px)] flex-wrap">
          {masters.map((master) => (
            <CreateOrderMasterCard master={master} key={master.name + Math.random().toString().split('.')[1]}/>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CreateOrderSelectMaster;
