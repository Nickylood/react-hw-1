export default function Options({ PropUpdateFeedback, propTotalFeedback, propResetFeedback }) {
  return (
    <div>
      <button onClick={() => PropUpdateFeedback("good")}>Good</button>
      <button onClick={() => PropUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => PropUpdateFeedback("bad")}>Bad</button>
      {propTotalFeedback > 0 && (
        <button onClick={() => propResetFeedback()}>Reset</button>
      )}
    </div>
  );
}
