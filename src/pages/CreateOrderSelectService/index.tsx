import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

import neil from "../../assets/masters/services/nail.jpg";
import legs from "../../assets/masters/services/leg.jpg";
import eyebrows from "../../assets/masters/services/eyebrows.jpg";

import {
  selectInViewService,
  setInViewService,
} from "../../app/slices/service.slice";
import { useDispatch, useSelector } from "react-redux";

const ServiceTitle = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const dispatch = useDispatch();
  const inViewService = useSelector(selectInViewService);

  useEffect(() => {
    if (isInView) dispatch(setInViewService(id));
    if (!isInView && inViewService === id) dispatch(setInViewService(null));
  }, [isInView, dispatch, id, inViewService]);
  return (
    <p
      ref={ref}
      className={`py-16 pl-20 font-mono text-5xl transition-colors ${
        isInView ? "text-black" : "text-gray-300"
      }`}
    >
      {children}
    </p>
  );
};

const ServiceCard = ({
  gradient,
  children,
  id,
}: {
  gradient: string;
  children: React.ReactNode;
  id: string;
}) => {
  const inViewService = useSelector(selectInViewService);
  return (
    <div
      className={`w-full h-full absolute inset-0 rounded-2xl bg-gradient-to-br transition-opacity ${gradient} ${
        inViewService === id ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const Legs = ({ id }: { id: string }) => {
  return (
    <ServiceCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </ServiceCard>
  );
};

const Neil = ({ id }: { id: string }) => {
  return (
    <ServiceCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </ServiceCard>
  );
};

const Eyebrows = ({ id }: { id: string }) => {
  return (
    <ServiceCard id={id} gradient="from-[#fff7f5] to-[#adffd8]">
      <span />
    </ServiceCard>
  );
};

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
      card: Legs,
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
      card: Neil,
    },
    {
      title: "Брови",
      variants: ["Корекція брів", "Фарбування брів", "Ламінування"],
      img: eyebrows,
      card: Eyebrows,
    },
  ];

  return (
    // <div className="container flex flex-col items-center justify-center pt-5 mx-auto font-poppinsBold">
    //   <motion.div
    //     initial={{ y: -100, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 100 }}
    //     viewport={{ once: true }}
    //     transition={{ delay: 0.3 }}
    //     className="flex items-center justify-center pb-5"
    //   >
    //     <div>
    //       <div className="text-4xl text-firstColor lg:text-6xl">
    //         Select a <span className="underline text-fourColor">service</span>
    //       </div>
    //       <div className="text-secondColor lg:text-2xl">DM studio luxury</div>
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     initial={{ y: -100, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 100 }}
    //     viewport={{ once: true, margin: "0px" }}
    //     transition={{ delay: 0.5 }}
    //     className="flex-wrap gap-10 pt-10 md:flex"
    //   >
    //     {services.map((service) => (
    //       <CreateOrderServiceCard service={service} />
    //     ))}
    //   </motion.div>
    // </div>
    <div className="container mx-auto ">
      <div className="flex items-start w-full gap-20">
        <div className="flex w-full py-[50vh]">
          <ul>
            {services.map((service) => (
              <li key={service.title} className="">
                <ServiceTitle id={service.title}>{service.title}</ServiceTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex items-center w-full h-screen px-10">
          <div className="relative flex flex-col justify-between w-full bg-gray-100 aspect-square rounded-2xl">
            {services.map((service) => (
              <service.card key={service.title} id={service.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderSelectService;
