import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CountControlButtons({ setCount }) {
  const handlePlus = () => setCount((c) => c + 1);

  const handleMinus = () => setCount((c) => (c > 0 ? c - 1 : 0));

  return (
    <div className="button-container">
      <button className="count-btn" onClick={handleMinus}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={handlePlus}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}

export default CountControlButtons;
