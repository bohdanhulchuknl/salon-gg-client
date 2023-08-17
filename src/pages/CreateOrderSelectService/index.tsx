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
import { LinkButtonCustom } from "../../components/Custom";

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
      className={`text-2xl py-8 sm:py-16 pl-5 sm:pl-20 font-ttInterfacesBold sm:text-5xl transition-colors ${
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
  img,
}: {
  id: string;
  variants: string[];
  img: string;
}) => {
  return (
    <ServiceCard id={id} gradient="from-[#fff] to-[#fff]">
      <div className="relative z-10 flex flex-col w-full h-full sm:px-4 sm:py-6 font-ttInterfacesRegular group/serviceCard">
        <div className="flex items-center justify-center h-full ">
          <div className="relative z-10 px-4 py-6 sm:py-12 sm:px-8 bg-thirdColor rounded-2xl drop-shadow-md">
            <h5 className="items-center justify-center hidden w-full h-20 gap-2 pb-4 text-xl sm:flex font-ttInterfacesBold rounded-2xl group-hover/serviceCard:justify-start">
              <img
                src={img}
                alt="nails"
                className="absolute object-cover object-right-top w-20 h-20 transition-all left-2 top-2 -z-10 rounded-2xl group-hover/serviceCard:top-0 group-hover/serviceCard:left-0 group-hover/serviceCard:w-full group-hover/serviceCard:h-full "
              />
              <span className="px-4 py-2 text-firstColor group-hover/serviceCard:bg-thirdColor/50 rounded-2xl">
                {id}
              </span>
            </h5>
            <div className="z-10 grid grid-cols-1 gap-1 text-sm transition-all sm:text-base sm:grid-cols-2 font-ttInterfacesRegular">
              {variants.map((variant) => (
                <div className="px-4 py-2 rounded-xl">
                  {variant}
                </div>
              ))}
            </div>
            <div className="z-10 flex items-center justify-end pt-5">
              <LinkButtonCustom to="/" title="Select" className="!px-2 !py-2 text-xs sm:text-base"/>
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
  img,
}: {
  id: string;
  variants: string[];
  img: string;
}) => {
  return (
    <ServiceCard id={id} gradient="from-[#fff] to-[#fff]">
      <div className="relative z-10 flex flex-col w-full h-full sm:px-4 sm:py-6 font-ttInterfacesRegular group/serviceCard">
        <div className="flex items-center justify-center h-full ">
          <div className="relative z-10 px-4 py-6 sm:py-12 sm:px-8 bg-thirdColor rounded-2xl drop-shadow-md">
            <h5 className="items-center justify-center hidden w-full h-20 gap-2 pb-4 text-xl sm:flex font-ttInterfacesBold rounded-2xl group-hover/serviceCard:justify-start">
              <img
                src={img}
                alt="nails"
                className="absolute object-cover object-right-top w-20 h-20 transition-all left-2 top-2 -z-10 rounded-2xl group-hover/serviceCard:top-0 group-hover/serviceCard:left-0 group-hover/serviceCard:w-full group-hover/serviceCard:h-full "
              />
              <span className="px-4 py-2 text-firstColor group-hover/serviceCard:bg-thirdColor/50 rounded-2xl">
                {id}
              </span>
            </h5>
            <div className="z-10 grid grid-cols-1 gap-1 text-sm transition-all sm:text-base sm:grid-cols-2 font-ttInterfacesRegular">
              {variants.map((variant) => (
                <div className="px-4 py-2 rounded-xl">
                  {variant}
                </div>
              ))}
            </div>
            <div className="z-10 flex items-center justify-end pt-5">
              <LinkButtonCustom to="/" title="Select" className="!px-2 !py-2 text-xs sm:text-base"/>
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
  img,
}: {
  id: string;
  variants: string[];
  img: string;
}) => {
  return (
    <ServiceCard id={id} gradient="from-[#fff] to-[#fff]">
      <div className="relative z-10 flex flex-col w-full h-full sm:px-4 sm:py-6 font-ttInterfacesRegular group/serviceCard">
        <div className="flex items-center justify-center h-full ">
          <div className="relative z-10 px-4 py-6 sm:py-12 sm:px-8 bg-thirdColor rounded-2xl drop-shadow-md">
            <h5 className="items-center justify-center hidden w-full h-20 gap-2 pb-4 text-xl sm:flex font-ttInterfacesBold rounded-2xl group-hover/serviceCard:justify-start">
              <img
                src={img}
                alt="nails"
                className="absolute object-cover object-right-top w-20 h-20 transition-all left-2 top-2 -z-10 rounded-2xl group-hover/serviceCard:top-0 group-hover/serviceCard:left-0 group-hover/serviceCard:w-full group-hover/serviceCard:h-full "
              />
              <span className="px-4 py-2 text-firstColor group-hover/serviceCard:bg-thirdColor/50 rounded-2xl">
                {id}
              </span>
            </h5>
            <div className="z-10 grid grid-cols-1 gap-1 text-sm transition-all sm:text-base sm:grid-cols-2 font-ttInterfacesRegular">
              {variants.map((variant) => (
                <div className="px-4 py-2 rounded-xl">
                  {variant}
                </div>
              ))}
            </div>
            <div className="z-10 flex items-center justify-end pt-5">
              <LinkButtonCustom to="/" title="Select" className="!px-2 !py-2 text-xs sm:text-base"/>
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
      <h5 className="sticky z-10 flex items-center justify-center text-3xl sm:text-6xl top-2 font-ttInterfacesBold">
        <div className="flex flex-col">
          <span>Select a</span>{" "}
          <span className="text-secondColor">Service</span>
        </div>
      </h5>
      <div className="flex items-start w-full sm:gap-20">
        <div className="flex w-full py-[30vh] sm:py-[50vh]">
          <ul>
            {services.map((service) => (
              <li key={service.title} className="">
                <ServiceTitle id={service.title}>{service.title}</ServiceTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 left-0 flex items-center w-full h-screen bg-gray-100 sm:px-10">
          <div className="relative flex flex-col justify-between w-full rounded-2xl">
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
