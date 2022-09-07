import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModal } from 'images/close.svg';
import s from './Modal.module.css';
import { useForgotPasswordMutation } from '../../../redux/authorization/authApi';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from 'redux/authorization/authApi';
import { logOut } from 'redux/feature/authSlice';
import { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});
const Modal = ({ onClick, text, isShowModal }) => {
  const [email, setEmail] = useState('');
  const [awtorzation] = useForgotPasswordMutation();

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

  return (
    isShowModal && (
      <div className={s.backdrop} onClick={handleBackdropClick}>
        <div className={s.modal}>
          <button type="button" className={s.closeModalBtn} onClick={onClick}>
            <CloseModal />
          </button>
          <p className={s.text}>{text}</p>
          <div className={s.btnContainer}>
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={async values => {
                const req = await awtorzation({ email: values.email });

                if (req.data.message) {
                  toast.success(req.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }
                // onClick();
              }}
            >
              {({ errors, touched, isValid, dirty }) => (
                <Form>
                  <label className={s.passwordLabel}>Email:</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className={s.input}
                  />
                  {errors.email && touched.email ? (
                    <div className={s.ErrorText}>{errors.email}</div>
                  ) : null}

                  <button
                    className={s.btn}
                    type="submit"
                    disabled={errors.email && errors.password}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default Modal;
