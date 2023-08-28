import { useRef, useEffect } from 'react'
import { useDispatch, } from 'react-redux';
import { useInView } from 'framer-motion';
import { Parallax } from "react-parallax";
import imgParallax_4 from "../../../assets/parallax/parallax_5.jpg";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import whyImg_1 from "../../../assets/why/1.jpg";
import whyImg_2 from "../../../assets/why/2.jpg";
import whyImg_3 from "../../../assets/why/3.jpg";
import { setWhyWeIsInView, setWhyWeRef} from '../../../app/slices/scrollRefs.slice';

const WhyUs = () => {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const [text] = useTypewriter({
    words: [
      "НАШІ ПРОЄКТИ — ЦЕ ЯКІСТЬ, КОМФОРТ ТА СТАТУС, ВІДЧУТНІ НА ДОТИК.",
      "Будь який текст",
      "Буде змінюватись",
    ],
    delaySpeed: 5000,
    loop: true,
    deleteSpeed: 10,
    typeSpeed: 50,
  });

  useEffect(() => {
    if (ref) {
      dispatch(setWhyWeRef(ref));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setWhyWeIsInView(isInView));
  }, [isInView, dispatch]);

  return (
    <Parallax
      strength={300}
      bgImage={imgParallax_4}
      bgImageStyle={{ ["object-fit"]: "cover", ["object-position"]: "bottom" }}
      className="shadow-2xl shadow-thirdColor"
    >
      <div ref={ref} className="container flex flex-col min-h-screen p-5 mx-auto pl-28">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center py-5 text-3xl font-apocBold"
        >
          <div className="flex flex-col">
            <span>Why we are?</span>
            <span className="text-2xl text-fifth">DM studio luxury</span>
          </div>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center p-3 "
        >
          <h1 className="px-10 py-3 text-2xl text-justify rounded-lg text-firstColor font-apocBoldItalic drop-shadow-md bg-thirdColor">
            <span className="font-bold text-justify">
              {text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
            </span>
            <Cursor cursorColor="rgb(13 148 136)" />
          </h1>
        </motion.div>
        <div className="flex flex-1">
          <div className="flex flex-col w-full gap-5 p-3 text-firstColor">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              viewport={{ once: true }}
              className="flex self-end gap-5 p-5 text-justify rounded-lg drop-shadow-md bg-thirdColor md:max-w-screen-md "
            >
              <p className="w-full">
                <span className="font-bold text-fifth">
                  Нам подобається робити Вас красивими.
                </span>{" "}
                Ми прагнемо оточити Вас турботою і гостинністю з першої секунди
                Вашого візиту. Для нас кожен відвідувач - це почесний гість,
                незалежно від того, чи буде він обслуговуватися, або просто
                прийшов дізнатися, які у нас послуги, хоче він позасмагати у
                солярії або замовити дорогий косметологічний догляд.
              </p>

              <img
                src={whyImg_3}
                alt=""
                className="object-cover object-center max-h-[235px] w-full rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              viewport={{ once: true }}
              className="flex self-start gap-5 p-5 text-justify rounded-lg drop-shadow-md bg-thirdColor md:max-w-screen-md"
            >
              <img
                src={whyImg_1}
                alt=""
                className="object-cover object-center max-h-[235px] w-full rounded-lg"
              />
              <p className="w-full">
                <span className="font-bold text-fifth font-apocBoldItalic">
                  У нас працюють тільки майстри з великим досвідом
                </span>{" "}
                і величезним бажанням зробити Вас красивішою, молодшою і
                подарувати Вам більше хорошого настрою, а наші ціни найкращі у
                співвідношенні рівня комфорту і якості обслуговування.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              className="flex self-end gap-5 p-5 text-justify rounded-lg bg-thirdColor md:max-w-screen-md drop-shadow-md"
            >
              <p className="w-full">
                <span className="font-bold text-fifth">
                  Для нас найкраща оцінка –{" "}
                </span>
                це Ваше щасливе і задоволене обличчя, а також незмінне бажання
                відвідати нас знову і знову. Записуйтесь до нас на процедури,
                приходьте в гості і Ви обов’язково будете задоволені! Ваш «DM
                studio luxury»
              </p>

              <img
                src={whyImg_2}
                alt=""
                className="object-cover object-bottom max-h-[235px] w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default WhyUs;
