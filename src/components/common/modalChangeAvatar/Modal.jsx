import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModal } from 'images/close.svg';
import s from './Modal.module.css';
import { useForgotPasswordMutation } from '../../../redux/authorization/authApi';
import { useDispatch } from 'react-redux';
import { useAvatarChangeMutation } from 'redux/authorization/authApi';
import { logOut } from 'redux/feature/authSlice';
import { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { authSlice } from 'redux/feature';
import { updateAvatarUser } from '../../../redux/feature/authSlice';

const ModalAvatar = ({ onClick, text, isShowModal }) => {
  const [email, setEmail] = useState('');
  const [awtorzation] = useForgotPasswordMutation();
  const dispatch = useDispatch();
  //const fileReader = new FileReader();
  const [image, setImg] = useState(null);
  const [imageUrl, setImgUrl] = useState(null);
  const [changeAvatar] = useAvatarChangeMutation();
  // fileReader.onloadend = async() => {
  //   console.log("url",fileReader.result)
  //   setImgUrl(fileReader.result);
  //   const ava = await changeAvatar(fileReader.result);
  //   console.log(ava);

  // }

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
  const handleChangeAvatar = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'Avatars');
      try {
        const cloudinariAnsver = await axios.post(
          'https://api.cloudinary.com/v1_1/dd-com/image/upload',
          formData,
        );
        const ava = await changeAvatar({
          avatarURL: cloudinariAnsver.data.url,
        });
        dispatch(updateAvatarUser({ AvatarUrl: cloudinariAnsver.data.url }));
      } catch (error) {
        console.log(error);
      }
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
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleChangeAvatar}
              accept="image/*,.png,.jpg,.gif,.web,"
              className={s.inputFile}
            ></input>
            <label className={s.inputLable} for="file">
              Update avatar
            </label>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default ModalAvatar;
