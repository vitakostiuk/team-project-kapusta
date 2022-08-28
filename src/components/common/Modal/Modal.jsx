import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModal } from 'images/close.svg';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button type="button" className={s.closeModal} onClick={onClose}>
          <CloseModal />
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
