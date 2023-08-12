import { motion } from "framer-motion";

interface ICreateOrderServiceOptionSelectedCardProps {
  selectedItem: {
    text: string;
    price: string;
  };
}

const CreateOrderServiceOptionSelectedCard = ({
  selectedItem,
}: ICreateOrderServiceOptionSelectedCardProps) => {
  return (
    <motion.div
      initial={{ y: -10,opacity: 0 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ y: -10,opacity: 0 }}
      className="p-2 flex gap-3 items-center justify-between"
      key={selectedItem.text}
    >
      <div>{selectedItem.text}</div>
      <div className="flex items-center gap-2">
        <span>{selectedItem.price}</span>
      </div>
    </motion.div>
  );
};

export default CreateOrderServiceOptionSelectedCard;
