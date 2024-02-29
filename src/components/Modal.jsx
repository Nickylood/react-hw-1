const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <span onClick={onClose}>
        <button>Close</button>
      </span>
      <p>This is a modal!</p>
    </div>
  );
};

export default Modal;
