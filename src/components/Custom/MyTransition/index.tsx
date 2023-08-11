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
        className="fixed top-0 left-0 w-full h-screen bg-fourColor origin-right z-[1000] flex items-center justify-center"
        initial={{
          scaleX: 0,
        }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo scaleOption="scale-150"/>
      </motion.div>

      <motion.div
        className=" fixed top-0 left-0 w-full h-screen bg-fourColor origin-left z-[1000] flex items-center justify-center"
        initial={{
          scaleX: 1,
        }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo scaleOption="scale-150"/>
        
      </motion.div>
    </>
  );
};

export default MyTransition;
