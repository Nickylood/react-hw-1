export default function Contact({ id, name, number, onDelete }) {
  return (
    <div>
      <ul id={id}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
