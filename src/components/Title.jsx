function Title({ count }) {
  return (
    <h1 className="title">
      {count === 5 ? "Limit Hit! Purchase Pro Plan" : "Fancy Counter"}
    </h1>
  );
}

export default Title;
