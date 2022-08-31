import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModal } from 'images/close.svg';
import s from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from 'redux/authorization/authApi';
import { logOut } from 'redux/feature/authSlice';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClick, text }) => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

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

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  const handleLogOut = async () => {
    try {
      const result = await logout();
      console.log(result);
      dispatch(logOut());
    } catch (err) {
      console.log(err);
    }
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
