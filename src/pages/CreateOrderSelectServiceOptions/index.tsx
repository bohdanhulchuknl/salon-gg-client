import { useMemo, useState } from "react";
import {
  CreateOrderServiceOptionCard,
  CreateOrderServiceOptionSelectedCard,
} from "../../components/CreateOrderComponents";
import { motion, AnimatePresence } from "framer-motion";
import { serviceOptions } from "../../utils/mockDate";
import { LinkButtonCustom } from "../../components/Custom";
import { ImUndo2 } from "react-icons/im";

interface IServiceItem {
  text: string;
  price: string;
}

const CreateOrderSelectServiceOptions = () => {
  const [selectedOp, setSelectedOp] = useState<IServiceItem[]>([]);

  const selectedOpSum = useMemo(() => {
    let sum = 0;
    selectedOp.map((el) => {
      if (el.price !== "free") {
        sum += +el.price.split(" ")[0];
      }
      return el;
    });
    return sum;
  }, [selectedOp]);

  return (
    <div className="">
      <div className="container h-full mx-auto">
        <h1 className="flex items-center justify-between p-5 ">
          <p className="text-3xl "> Select:</p>
          <div className="">
            <LinkButtonCustom
              disabled={selectedOpSum > 0 ? false : true}
              title="Next"
              to="/"
              icon={
                <ImUndo2 className="duration-150 rotate-180 fill-hoverColor group-hover/backButton:fill-black " />
              }
              className={`${selectedOpSum > 0 ? "animate-pulse" : ""}`}
            />
          </div>
        </h1>
        <div className="flex justify-center gap-[2%] px-[2.5%] ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="max-h-[calc(100vh-200px)] overflow-y-auto shadow-sm shadow-secondColor flex-[40%]"
          >
            {serviceOptions.map((opt) => (
              <div className="divide-y-2 divide-firstColor " key={opt.title}>
                <h5 className="px-2 py-4 bg-fourColor">{opt.title}</h5>
                <div className="p-2 ">
                  {opt.items.map((item, index) => (
                    <CreateOrderServiceOptionCard
                      item={item}
                      selectedOp={selectedOp}
                      setSelectedOp={setSelectedOp}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div className="transition-all shadow-sm shadow-secondColor max-h-[calc(100vh-200px)] overflow-y-auto flex-[40%]">
            <h5 className="sticky top-0 flex justify-between px-2 py-4 bg-fourColor">
              <p>Order</p>
              <div className="text-lg border-b-2">
                Total: {selectedOpSum} zł
              </div>
            </h5>
            <AnimatePresence>
              {selectedOp.map((selectedItem) => (
                <CreateOrderServiceOptionSelectedCard
                  selectedItem={selectedItem}
                  key={selectedItem.text}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderSelectServiceOptions;
