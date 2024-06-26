import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setCount }) {
  const handleReset = () => setCount(0);

  return (
    <button className="reset-btn" onClick={handleReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
