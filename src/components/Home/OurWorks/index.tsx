import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from 'react'

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
import { useDispatch } from "react-redux";
import { setWorksIsInView, setWorksRef } from "../../../app/slices/scrollRefs.slice";

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

const OurWorks = () => {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (ref) {
      dispatch(setWorksRef(ref));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setWorksIsInView(isInView));
  }, [isInView, dispatch]);
  return (
    <div ref={ref} className="container flex flex-col min-h-screen mx-auto ">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        viewport={{ once: true }}
        className="flex items-center justify-center py-16 text-3xl font-apocBold "
      >
        <div className="flex flex-col ">
          <span>Our works</span>
          <span className="text-2xl text-fifth ">DM studio luxury</span>
        </div>
      </motion.h2>
      <div className="grid grid-cols-4 grid-rows-3 gap-2 p-2 overflow-hidden">
        {worksArr.map((work, index) => (
          <motion.img
            initial={{ opacity: 0, [index % 2 ? "x" : "y"]: -100 }}
            whileInView={{ opacity: 1, [index % 2 ? "x" : "y"]: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                       
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            src={work}
            alt=""
            className="max-h-[200px] object-cover object-top w-full h-full transition-all duration-1000 rounded-sm drop-shadow-md hover:object-bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
