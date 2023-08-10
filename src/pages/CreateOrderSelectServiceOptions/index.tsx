import { useState } from "react";
import {
  CreateOrderServiceOptionCard,
  CreateOrderServiceOptionSelectedCard,
} from "../../components/CreateOrderComponents";

import { serviceOptions } from "../../utils/mockDate";

interface IServiceItem {
  text: string;
  price: string;
}

interface IServiceOptions {
  title: string;
  items: IServiceItem[];
}

const CreateOrderSelectServiceOptions = () => {
  const [selectedOp, setSelectedOp] = useState<IServiceItem[]>([]);

  return (
    <div className="">
      <div className="container mx-auto h-full">
        <h1 className="text-center p-3">Prices</h1>
        <div className="flex justify-center gap-5 ">
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto shadow-sm shadow-secondColor">
            {serviceOptions.map((opt) => (
              <div className="divide-y-2 divide-firstColor ">
                <h5 className="bg-fourColor px-2 py-4">{opt.title}</h5>
                <div className="p-2 divide-y-2 divide-secondColor   ">
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
          </div>
          <div className="shadow-sm shadow-secondColor p-5">
            {selectedOp.map((selectedItem) => (
              <CreateOrderServiceOptionSelectedCard
                selectedItem={selectedItem}
                key={selectedItem.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderSelectServiceOptions;
