import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CountButtonsContainer({ setCount }) {
  const handlePlus = () => setCount((c) => c + 1);
  const handleMinus = () => setCount((c) => (c > 0 ? c - 1 : 0));
  return (
    <div className="button-container">
      <CountButton setCount={handleMinus}>
        <MinusIcon className="count-btn-icon" />
      </CountButton>
      <CountButton setCount={handlePlus}>
        <PlusIcon className="count-btn-icon" />
      </CountButton>
    </div>
  );
}

function CountButton({ setCount, children }) {
  return (
    <>
      <button className="count-btn" onClick={setCount}>
        {children}
      </button>
    </>
  );
}

export default CountButtonsContainer;
