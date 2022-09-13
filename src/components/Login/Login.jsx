import React, { useEffect, useRef } from 'react';
import kapustaSvg from '../../images/loginPageKAPUSTA.svg';
import GoogleEmbl from '../../images/GoogleEmlem.svg';
import styles from './Login.module.css';
import { useLocation } from 'react-router-dom';
import Modal from '../common/ModalForgetPasswodr';

import { toast } from 'react-toastify';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useLoginMutation,
  useRegisterMutation,
  useFetchCurrentUserQuery,
} from 'redux/authorization/authApi';
import {
  logIn,
  registerUser,
  loginGoogle,
} from '../../redux/feature/authSlice';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { serializeStyles } from '@emotion/serialize';
import { enableMapSet } from 'immer';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'Invalid email')
    .max(60, 'Too long')
    .required('Required'),
  password: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .min(8, 'Minimum password length is 8 characters')
    .max(60, 'Too long')
    .required('Required'),
});

export const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [registration] = useRegisterMutation();
  const toastId = useRef(null);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowForgotPassword, setForgotPassword] = useState(false);

  const handleClick = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  let location = useLocation();
  useEffect(() => {
    if (location.search.length > 0) {
      const url = location.search;
      const [tokenText, emailText] = url.split('&');
      const token = tokenText.slice(7);
      const email = emailText.slice(6);
      dispatch(loginGoogle({ token: token, email: email }));
    }
  }, [dispatch, location.search]);

  let submitAction = undefined;

  const notifyWarn = message => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.warn(message, { icon: '🙁' });
    }
  };

  const notifySuccess = message => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success(message, { icon: '😎' });
    }
  };

  return (
    <div className={styles.loginDiv}>
      <div className={styles.logoDiv}>
        <img className={styles.logo} src={kapustaSvg} alt="kapusta"></img>
        <p className={styles.textunderLogo}>Smart Finance</p>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {
          if (submitAction === 'registration') {
            try {
              const user = await registration({
                email: values.email,
                password: values.password,
              });
              if (user.data.code === 201) {
                const message = `${user.data.message}`;
                notifySuccess(message);
              }
            } catch (err) {
              const message = 'Check the fields!';
              notifyWarn(message);
            }
          } else {
            try {
              const user = await login({
                email: values.email,
                password: values.password,
              });
              dispatch(logIn(user));
            } catch (err) {
              setForgotPassword(true);
              const message =
                'Check your password or email or register in the application';
              notifyWarn(message);
            }
          }
        }}
      >
        {({ errors, touched, isValid, dirty, handleSubmit }) => (
          <Form className={styles.forma}>
            <div className={styles.topTextDiv}>
              <p className={styles.topGoogleRegText}>
                You can log in with your Google
              </p>
              <span className={styles.topGoogleRegTextspan}> Account:</span>
            </div>
            <a
              href="https://team-project-kapusta.herokuapp.com/api/auth/google"
              className={styles.GoogleBtn}
            >
              <img
                src={GoogleEmbl}
                className={serializeStyles.GoogleEmblem}
                alt="google"
              />
              Google
            </a>
            <p className={styles.buttonGoogleRegText}>
              Or log in using an email and password, after registering:
            </p>
            <div className={styles.ErrorDiv}>
              {errors.email && touched.email ? (
                <p className={styles.star}>&#9733;</p>
              ) : null}
              <label className={styles.emailLabel}>Email:</label>
            </div>
            <Field
              name="email"
              type="email"
              placeholder="your@email.com"
              className={styles.input}
            />
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
            <div className={styles.ErrorDiv}>
              {errors.password && touched.password ? (
                <p className={styles.star}>&#9733;</p>
              ) : null}
              <label className={styles.passwordLabel}>Password:</label>
            </div>
            <Field name="password" type="password" className={styles.input} />
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
            <div className={styles.divButton}>
              <button
                type="button"
                disabled={errors.email && errors.password}
                className={styles.Btn}
                onClick={() => {
                  submitAction = 'login';
                  handleSubmit();
                }}
              >
                Log in
              </button>

              <button
                type="button"
                disabled={errors.email && errors.password}
                className={styles.Btn}
                onClick={() => {
                  submitAction = 'registration';
                  handleSubmit();
                }}
              >
                Registration
              </button>
            </div>
            {isShowForgotPassword && (
              <p className={styles.ForgotPass} onClick={handleClick}>
                forgot password
              </p>
            )}
          </Form>
        )}
      </Formik>

      <Modal
        onClick={handleClick}
        text="Enter your email "
        isShowModal={isShowModal}
      />
    </div>
  );
};

// import React from 'react';
// // import Header from '../Header';

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   useLoginMutation,
//   useRegisterMutation,
// } from 'redux/authorization/authApi';
// import { logIn, registerUser } from '../../redux/feature/authSlice';

// import { Button, Form } from 'react-bootstrap';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const [login] = useLoginMutation();
//   const [registration] = useRegisterMutation();

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };
//   const onSubmiteRegistration = async e => {
//     e.preventDefault();
//     try {
//       const newUser = await registration({ email, password });
//       dispatch(registerUser(newUser));
//     } catch (err) {
//       console.log(err);
//     }
//     setEmail('');
//     setPassword('');
//   };
//   const onSubmitLogin = async e => {
//     e.preventDefault();

//     try {
//       const user = await login({ email, password });
//       dispatch(logIn(user));
//     } catch (err) {
//       console.log(err);
//       alert('check your password or email or register in the application');
//     }
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <Form onSubmit={onSubmitLogin}>
//         <p>You can log in with your Google Account:</p>
//         <span>Google</span>
//         <p>Or log in using an email and password, after registering:</p>
//         <div>
//           <label className="form-label">Email address</label>
//           <input
//             className="form-control"
//             value={email}
//             name="email"
//             onChange={handleChange}
//             placeholder="name@example.com"
//           />
//         </div>
//         <div>
//           <label className="form-label">Password</label>
//           <input
//             className="form-control"
//             value={password}
//             onChange={handleChange}
//             name="password"
//           />
//         </div>
//         <Button type="submit" variant="success">
//           Log in
//         </Button>
//         <Button type="button" variant="success" onClick={onSubmiteRegistration}>
//           Registration
//         </Button>
//       </Form>
//     </div>
//   );
// };

export default Login;
