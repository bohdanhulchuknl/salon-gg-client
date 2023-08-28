import { useSelector } from "react-redux";
import { Logo } from "..";
import {
  selectHomeRef,
  selectHomeIsInView,
  selectServiceIsInView,
  selectServiceRef,
  selectWhyWeIsInView,
  selectWhyWeRef,
  selectWorksRef,
  selectWorksIsInView,
  selectTeamRef,
  selectTeamIsInView,
} from "../../app/slices/scrollRefs.slice";
import { motion } from "framer-motion";
import { LinkButtonCustom } from "../Custom";
interface INavBarVertical {
  isShow: boolean;
}

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: "-100%",
    with: 0,
  },
};

const NavBarVertical = ({ isShow = false }: INavBarVertical) => {
  const homeRef = useSelector(selectHomeRef);
  const isHomeInView = useSelector(selectHomeIsInView);
  const serviceRef = useSelector(selectServiceRef);
  const isServiceInView = useSelector(selectServiceIsInView);
  const whyWeRef = useSelector(selectWhyWeRef);
  const isWhyWeInView = useSelector(selectWhyWeIsInView);
  const worksRef = useSelector(selectWorksRef);
  const isWorksInView = useSelector(selectWorksIsInView);
  const teamRef = useSelector(selectTeamRef);
  const isTeamInView = useSelector(selectTeamIsInView);
  return (
    <motion.div
      variants={menuVariants}
      animate={isShow ? "open" : "closed"}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="fixed top-0 left-0 z-50 flex flex-col justify-between h-screen gap-2 px-2 py-4 overflow-hidden transition-all shadow-sm opacity-0 shadow-secondColor w-25 bg-thirdColor"
    >
      <div className="flex flex-col w-full h-full ">
        <div>
          <Logo />
        </div>

        <div className="flex flex-col justify-center flex-1 gap-5 text-sm">
          <button
            onClick={() => {
              homeRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`transition-all  ${
              isHomeInView
                ? "text-fifth"
                : " text-firstColor/50 hover:underline"
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => {
              serviceRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isServiceInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            SERVICES
          </button>
          <button
            onClick={() => {
              whyWeRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isWhyWeInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            WHY WE ARE?
          </button>
          <button
            onClick={() => {
              worksRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isWorksInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            WORKS
          </button>
          <button
            onClick={() => {
              teamRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isTeamInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            TEAM
          </button>
        </div>
      </div>

      <LinkButtonCustom
        title="Login"
        to="/login"
        className="!px-[10px] py-[5px] text-xs"
      />
      <LinkButtonCustom
        title="Create order"
        to="/login"
        className="!px-[10px] py-[5px] text-xs "
      />
    </motion.div>
  );
};

export default NavBarVertical;
