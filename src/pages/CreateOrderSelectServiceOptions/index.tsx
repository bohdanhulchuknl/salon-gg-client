import { useMemo, useState } from "react";
import {
  CreateOrderServiceOptionCard,
  CreateOrderServiceOptionSelectedCard,
} from "../../components/CreateOrderComponents";
import { motion } from "framer-motion";
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
      <div className="container mx-auto h-full">
        <h1 className="p-5 flex justify-between items-center ">
          <p className=" text-3xl"> Select:</p>
          <div className="">
            <LinkButtonCustom
              disabled={selectedOpSum > 0 ? false : true}
              title="Next"
              to="/"
              icon={
                <ImUndo2 className="rotate-180 duration-150 fill-hoverColor group-hover/backButton:fill-black " />
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
            transition={{ delay: 0.3 }}
            className="max-h-[calc(100vh-200px)] overflow-y-auto shadow-sm shadow-secondColor flex-[40%]"
          >
            {serviceOptions.map((opt) => (
              <div className="divide-y-2 divide-firstColor ">
                <h5 className="bg-fourColor px-2 py-4">{opt.title}</h5>
                <div className="p-2 ">
                  {opt.items.map((item) => (
                    <CreateOrderServiceOptionCard
                      item={item}
                      selectedOp={selectedOp}
                      setSelectedOp={setSelectedOp}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="transition-all shadow-sm shadow-secondColor max-h-[calc(100vh-200px)] overflow-y-auto flex-[40%]"
          >
            <h5 className="bg-fourColor py-4 px-2 sticky top-0 flex justify-between">
              <p>Order</p>
              <div className="border-b-2 text-lg">
                Total: {selectedOpSum} zł
              </div>
            </h5>
            {selectedOp.map((selectedItem) => (
              <CreateOrderServiceOptionSelectedCard
                selectedItem={selectedItem}
                key={selectedItem.text}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderSelectServiceOptions;
