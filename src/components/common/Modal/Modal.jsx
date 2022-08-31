import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModal } from 'images/close.svg';
import s from './Modal.module.css';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { useLogoutMutation } from 'redux/authorization/authApi';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClick, text }) => {
  const [logout] = useLogoutMutation();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  // const dispatch = useDispatch();

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  // const [isShowModal, setIsShowModal] = useState(false);

  // const toggleModal = () => {
  //   setIsShowModal(prevIsShowModal => !prevIsShowModal);
  // };

  const handleLogOut = () => {
    logout();
    // toggleModal();
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button type="button" className={s.closeModalBtn} onClick={onClick}>
          <CloseModal />
        </button>
        <p className={s.text}>{text}</p>
        <div className={s.btnContainer}>
          <button className={s.btn} type="button" onClick={handleLogOut}>
            yes
          </button>
          <button className={s.btn} type="button" onClick={onClick}>
            no
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
