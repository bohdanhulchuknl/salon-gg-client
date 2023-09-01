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
import { IUser } from "../../types/users.type";

interface INavBarVertical {
  isShow: boolean;
  user: IUser | null;
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

const NavBarVertical = ({ isShow , user }: INavBarVertical) => {
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
      className="fixed top-0 left-0 z-50 flex-col justify-between hidden h-screen gap-2 px-2 py-4 overflow-hidden transition-all shadow-sm opacity-0 md:flex shadow-secondColor w-25 bg-thirdColor"
    >
      <div className="flex flex-col w-full h-full ">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="w-full">
            <Logo
              onClick={() => {
                homeRef?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

          <address className="text-[10px]">+380989571902</address>
        </div>
        <div className="flex flex-col justify-center flex-1 gap-5 text-sm">
          <button
            onClick={() => {
              homeRef?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`transition-all  ${
              isHomeInView
                ? "text-fifth"
                : " text-firstColor/50 hover:underline"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              serviceRef?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isServiceInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => {
              whyWeRef?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isWhyWeInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            Why we are?
          </button>
          <button
            onClick={() => {
              worksRef?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isWorksInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            Works
          </button>
          <button
            onClick={() => {
              teamRef?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              isTeamInView
                ? "text-fifth "
                : " text-firstColor/50 hover:underline"
            }`}
          >
            Team
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 pb-2 text-[10px] text-firstColor">
        <div className="text-firstColor/50">{user?.name}</div>
      </div>

      {!user && (
        <LinkButtonCustom
          title="Login"
          to="/login"
          className="!px-[10px] py-[5px] text-xs"
        />
      )}
      <LinkButtonCustom
        title="Create order"
        to="/login"
        className="!px-[10px] py-[5px] text-xs "
      />
    </motion.div>
  );
};

export default NavBarVertical;
