import { useToggle } from "../../hooks/useToggle.js";
import Modal from "../Modal.jsx";

export default function App() {
  const { isOpen, open, close } = useToggle(true);
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
}
