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

        <div
          className="p-2 flex gap-3 items-center justify-between"
          key={selectedItem.text}
        >
          <div>{selectedItem.text}</div>
          <div className="flex items-center gap-2">
            <span>{selectedItem.price}</span>
          </div>
        </div>

  );
};

export default CreateOrderServiceOptionSelectedCard;
