export default function Feedback({ propClick, total, positive }) {
  return (
    <ul>
      <li>good: {propClick.good}</li>
      <li>neutral: {propClick.neutral}</li>
      <li>bad: {propClick.bad}</li>
      <li>total: {total}</li>
      <li>positive: {positive}%</li>
    </ul>
  );
}
