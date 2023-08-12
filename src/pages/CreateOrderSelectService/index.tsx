import { CreateOrderServiceCard } from "../../components/CreateOrderComponents";
import { motion } from "framer-motion";
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
    <div className="font-poppinsBold container mx-auto  flex flex-col  items-center justify-center pt-5">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center pb-5"
      >
        <div>
          <div className="text-6xl text-firstColor">
            Select a <span className="underline text-fourColor">service</span>
          </div>
          <div className="text-secondColor">DM studio luxury</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true, margin:"0px" }}
        transition={{ delay: 0.5 }}
        className="flex gap-10 pt-10"
      >
        {services.map((service) => (
          <CreateOrderServiceCard service={service} />
        ))}
      </motion.div>
    </div>
  );
};

export default CreateOrderSelectService;
