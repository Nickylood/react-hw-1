export default function Btns({ first, last, one, two}) {
  return (
    <div>
      <button disabled={one} onClick={first}>
        prev
      </button>
      <button disabled={two} onClick={last}>
        next
      </button>
    </div>
  );
}