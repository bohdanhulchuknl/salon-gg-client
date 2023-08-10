import { useState, useEffect, Dispatch, SetStateAction } from "react";

import { Switch } from "@headlessui/react";

interface ICreateOrderServiceOptionCardProps {
  item: { text: string; price: string };
  selectedOp: { text: string; price: string }[];
  setSelectedOp: Dispatch<SetStateAction<{ text: string; price: string }[]>>;
}

const CreateOrderServiceOptionCard = ({
  item,
  selectedOp,
  setSelectedOp,
}: ICreateOrderServiceOptionCardProps) => {
  const [isChecked, setIsChecked] = useState(item.price === "free");

  const onClickHandler = () => {
    if (!isChecked) {
      setSelectedOp((prev) => [...prev, item]);
    } else {
      const tempOpts = selectedOp.filter((el) => el.text !== item.text);
      setSelectedOp(tempOpts);
    }
  };

  useEffect(() => {
    if (item.price === "free") {
      setSelectedOp((prev) => [...prev, item]);
    }
  }, []);
  return (
    <div className="p-2 flex gap-3 items-center justify-between">
      <div>{item.text}</div>
      <div className="flex items-center gap-2">
        <span>{item.price}</span>
        <div className="">
          <Switch
            disabled={item.price === "free"}
            onClick={onClickHandler}
            checked={isChecked}
            onChange={setIsChecked}
            className={`${isChecked ? "bg-fourColor" : "bg-firstColor"}
relative inline-flex h-[19px] w-[37px] shrink-0 cursor-pointer  border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${isChecked ? "translate-x-[18px]" : "translate-x-0"}
pointer-events-none inline-block h-[16px] w-[16px] transform  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderServiceOptionCard;
