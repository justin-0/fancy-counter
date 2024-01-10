import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CountButtonsContainer({ setCount, locked }) {
  const handlePlus = () => setCount((c) => c + 1);
  const handleMinus = () => setCount((c) => (c > 0 ? c - 1 : 0));
  return (
    <div className="button-container">
      <CountButton setCount={handleMinus} locked={locked}>
        <MinusIcon className="count-btn-icon" />
      </CountButton>
      <CountButton setCount={handlePlus} locked={locked}>
        <PlusIcon className="count-btn-icon" />
      </CountButton>
    </div>
  );
}

function CountButton({ setCount, children, locked }) {
  console.log(locked);
  return (
    <>
      <button disabled={locked} className="count-btn" onClick={setCount}>
        {children}
      </button>
    </>
  );
}

export default CountButtonsContainer;
