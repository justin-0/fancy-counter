function CountButton({ setCount, children, locked }) {
  return (
    <>
      <button disabled={locked} className="count-btn" onClick={setCount}>
        {children}
      </button>
    </>
  );
}

export default CountButton;
