import { CreateOrderServiceCard } from "../../components/CreateOrderComponents";

import neil from "../../assets/masters/services/nail.jpg";
import legs from "../../assets/masters/services/leg.jpg";
import eyebrows from "../../assets/masters/services/eyebrows.jpg";

const CreateOrderSelectService = () => {
  const services = [
    {
      title: "Педикюр",
      variants: [
        "Педикюр комбінований / біологічний",
        "Педикюр комбінований + покриття",
        "Педикюр комбінований + пʼята + покриття",
      ],
      img: legs,
    },
    {
      title: "Манікюр",
      variants: [
        "Манікюр комбінований/біологічний",
        "Манікюр комбінований + гель лак",
        "Укріплення нігтів",
        "Дизайн нігтів",
        "Дизайн «French»",
        "Зняття матеріалу, гель лаку",
        "Нарощування",
        "Корекція",
      ],
      img: neil,
    },
    {
      title: "Брови",
      variants: ["Корекція брів", "Фарбування брів", "Ламінування"],
      img: eyebrows,
    },
  ];

  return (
    <div className="font-bree container mx-auto  flex flex-col  items-center justify-center pt-5">
      <div className="flex items-center justify-center pb-5">
        <div>
          <div className="text-4xl">Select a <span className="underline">service</span></div>
          <div className="text-gray-500">DM studio luxury</div>
        </div>
      </div>
      <div className="flex gap-10 pt-10">
        {services.map((service) => (
          <CreateOrderServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default CreateOrderSelectService;
