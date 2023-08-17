import { motion } from "framer-motion";
import { Logo } from "../..";

interface IMyTransitionProps {
  children: React.ReactNode;
}

const MyTransition = ({ children }: IMyTransitionProps) => {
  return (
    <>
      {children}
      <motion.div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen origin-right bg-thirdColor"
        initial={{
          scaleX: 0,
        }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo scaleOption="scale-[2.0]"/>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen origin-left bg-thirdColor"
        initial={{
          scaleX: 1,
        }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo scaleOption="scale-[2.0]"/>
        
      </motion.div>
    </>
  );
};

export default MyTransition;
