import { useEffect } from 'react';
import { ReactComponent as CloseModal } from 'images/close.svg';
import { useDeleteTransactionMutation } from 'redux/report/transactionsApi';
import s from './ModalDelete.module.css';

const ModalDelete = ({ onClick, text, id }) => {
  const [deleteTransaction] = useDeleteTransactionMutation();
  console.log('props id ModalDelete', id);

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

  const handleDelete = () => {
    deleteTransaction(id);
    onClick();
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button type="button" className={s.closeModalBtn} onClick={onClick}>
          <CloseModal />
        </button>
        <p className={s.text}>{text}</p>
        <div className={s.btnContainer}>
          <button className={s.btn} type="button" onClick={handleDelete}>
            yes
          </button>
          <button className={s.btn} type="button" onClick={onClick}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
