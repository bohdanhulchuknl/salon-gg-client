import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useMobileOrientation } from "react-device-detect";
import { motion } from "framer-motion";

import neil from "../../assets/services/1.jpg";
import legs from "../../assets/services/2.jpg";
import eyebrows from "../../assets/services/3.jpg";

import {
  selectInViewService,
  setInViewService,
} from "../../app/slices/service.slice";
import { useDispatch, useSelector } from "react-redux";
import { LinkButtonCustom } from "../../components/Custom";

const ServiceTitle = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
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
      className={`text-2xl py-8 sm:py-16 md:pl-5  font-apocBold md:text-5xl transition-colors ${
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
      className={` w-full h-full absolute top-0 right-3 sm:inset-0 rounded-2xl bg-gradient-to-br transition-opacity ${gradient} ${
        inViewService === id ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const Legs = ({
  id,
  variants,
}: {
  id: string;
  variants: string[];
  img: string;
}) => {
  const { isLandscape } = useMobileOrientation();
  return (
    <ServiceCard id={id} gradient="from-[#fff] to-[#fff]">
      <div className="relative z-10 flex flex-col w-full h-full sm:px-4 sm:py-6 group/serviceCard">
        <div className="flex items-center justify-center h-full ">
          <div className="relative z-10 px-4 py-4 md:py-4 md:px-4 bg-thirdColor rounded-2xl drop-shadow-md">
            <h5 className="items-center justify-center hidden w-full h-20 gap-2 pb-4 text-xl font-bold md:flex font-apocBold rounded-2xl">
              <span className="p-2 text-fifth group-hover/serviceCard:bg-thirdColor/50 rounded-2xl">
                {id}
              </span>
            </h5>
            <div className={`z-10 grid grid-cols-1 gap-4 text-sm transition-all sm:${!isLandscape ? "text-base" : ""} sm:grid-cols-2`}>
              {variants.map((variant) => (
                <div className="p-2 border-l-2 border-fifth " key={variant}>
                  {variant}
                </div>
              ))}
            </div>
            <div className="z-10 flex items-center justify-end pt-5">
              <LinkButtonCustom
                to="/"
                title="Select"
                className={`!px-2 !py-2 text-xs sm:${!isLandscape ? "text-base" : ""}`}
              />
            </div>
          </div>
        </div>

        {/* <div className="transition-all absolute top-[10%] right-[10%] skew-y-12 group-hover/serviceCard:skew-y-0">
          <img
            src={img}
            alt={id}
            height={150}
            width={150}
            className="object-cover border-[15px] border-b-[40px]  border-thirdColor rounded-sm"
          />
        </div> */}
      </div>
    </ServiceCard>
  );
};

const Neil = ({
  id,
  variants,
}: {
  id: string;
  variants: string[];
  img: string;
}) => {
  const { isLandscape } = useMobileOrientation();
  return (
    <ServiceCard id={id} gradient="from-[#fff] to-[#fff]">
      <div className="relative z-10 flex flex-col w-full h-full sm:px-4 sm:py-6 group/serviceCard">
        <div className="flex items-center justify-center h-full ">
          <div className="relative z-10 px-4 py-6 md:py-4 md:px-4 bg-thirdColor rounded-2xl drop-shadow-md">
            <h5 className="items-center justify-center hidden w-full h-20 gap-2 pb-4 text-xl md:flex font-apocBold rounded-2xl">
              <span className="p-2 font-bold text-fifth group-hover/serviceCard:bg-thirdColor/50 rounded-2xl">
                {id}
              </span>
            </h5>
            <div className={`z-10 grid grid-cols-1 gap-4 text-sm transition-all o sm:${!isLandscape ? "text-base" : ""} sm:grid-cols-2`}>
              {variants.map((variant) => (
                <div className="p-2 border-l-2 border-fifth" key={variant}>
                  {variant}
                </div>
              ))}
            </div>
            <div className="z-10 flex items-center justify-end pt-5">
              <LinkButtonCustom
                to="/"
                title="Select"
                className={`!px-2 !py-2 text-xs sm:${!isLandscape ? "text-base" : ""}`}
              />
            </div>
          </div>
        </div>

        {/* <div className="transition-all absolute top-[10%] right-[10%] skew-y-12 group-hover/serviceCard:skew-y-0">
          <img
            src={img}
            alt={id}
            height={150}
            width={150}
            className="object-cover border-[15px] border-b-[40px]  border-thirdColor rounded-sm"
          />
        </div> */}
      </div>
    </ServiceCard>
  );
};

const Eyebrows = ({
  id,
  variants,
}: {
  id: string;
  variants: string[];
  img: string;
}) => {
  const { isLandscape } = useMobileOrientation();
  return (
    <ServiceCard id={id} gradient="from-[#fff] to-[#fff]">
      <div className="relative z-10 flex flex-col w-full h-full sm:px-4 sm:py-6 group/serviceCard">
        <div className="flex items-center justify-center h-full ">
          <div className="relative z-10 px-4 py-6 md:py-4 md:px-4 bg-thirdColor rounded-2xl drop-shadow-md">
            <h5 className="items-center justify-center hidden w-full h-20 gap-2 pb-4 text-xl md:flex font-apocBold rounded-2xl ">
              <span className="p-2 font-bold text-fifth group-hover/serviceCard:bg-thirdColor/50 rounded-2xl">
                {id}
              </span>
            </h5>
            <div className={`z-10 grid max-h-screen grid-cols-1 gap-4 text-sm transition-all sm:${!isLandscape ? "text-base" : ""} sm:grid-cols-2`}>
              {variants.map((variant) => (
                <div className="p-2 border-l-2 border-fifth" key={variant}>
                  {variant}
                </div>
              ))}
            </div>
            <div className="z-10 flex items-center justify-end pt-5">
              <LinkButtonCustom
                to="/"
                title="Select"
                className={`!px-2 !py-2 text-xs sm:${!isLandscape ? "text-base" : ""}`}
              />
            </div>
          </div>
        </div>

        {/* <div className="transition-all absolute top-[10%] right-[10%] skew-y-12 group-hover/serviceCard:skew-y-0">
          <img
            src={img}
            alt={id}
            height={150}
            width={150}
            className="object-cover border-[15px] border-b-[40px]  border-thirdColor rounded-sm"
          />
        </div> */}
      </div>
    </ServiceCard>
  );
};

const CreateOrderSelectService = () => {
  const services = [
    {
      title: "Педикюр",
      variants: [
        "комбінований / біологічний",
        "комбінований + покриття",
        "комбінований + пʼята + покриття",
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
    <div className="container mx-auto">
      <motion.h5
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="sticky z-10 flex items-center text-xl md:justify-center md:text-3xl top-2 font-apocBold"
      >
        <div className="pl-[15vw] md:pl-0 flex flex-col">
          <span>Select a</span> <span className=" text-fifth">Service</span>
        </div>
      </motion.h5>
      <div className="flex items-start w-full md:gap-20">
        <div
          className={`flex md:w-full justify-center px-2  py-[30vh] sm:py-[50vh]`}
        >
          <ul>
            {services.map((service) => (
              <li key={service.title} className="">
                <ServiceTitle id={service.title}>{service.title}</ServiceTitle>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`sticky top-0 left-0 flex items-center justify-end w-full h-screen `}
        >
          <div className=" relative flex flex-col justify-between w-full max-w-[90%] rounded-2xl">
            {services.map((service) => (
              <service.card
                key={service.title}
                id={service.title}
                variants={service.variants}
                img={service.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderSelectService;
