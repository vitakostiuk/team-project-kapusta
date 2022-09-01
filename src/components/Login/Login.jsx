import React from 'react';
import kapustaSvg from '../../images/loginPageKAPUSTA.svg';
import styles from './Login.module.css';
// import Header from '../Header';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useLoginMutation,
  useRegisterMutation,
  useGoogleLoginMutation,
} from 'redux/authorization/authApi';
import { logIn, registerUser } from '../../redux/feature/authSlice';

//import { Button, Form } from 'react-bootstrap';

import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Label } from 'recharts';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .min(8, 'Error')
    .required('Required'),
});

export const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [registration] = useRegisterMutation();
  const [google] = useGoogleLoginMutation();

  return (
    <div>
      <div className={styles.logoDiv}>
        <img src={kapustaSvg}></img>
        <p className={styles.textunderLogo}>Smart Finance</p>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {
          try {
            const user = await login({
              email: values.email,
              password: values.password,
            });
            dispatch(logIn(user));
          } catch (err) {
            console.log(err);
            alert(
              'check your password or email or register in the application',
            );
          }
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className={styles.forma}>
            <p className={styles.topGoogleRegText}>
              You can log in with your Google Account:
            </p>
            <button
              type="button"
              onClick={async () => {
                try {
                  const user = await google();
                  // dispatch(registerUser(user));
                } catch (err) {
                  console.log(err);
                }
              }}
              className={styles.GoogleBtn}
            >
              Google
            </button>
            <p className={styles.buttonGoogleRegText}>
              Or log in using an email and password, after registering:
            </p>
            <label className={styles.emailLabel}>Email:</label>
            <Field
              name="email"
              type="email"
              placeholder="your@email.com"
              className={styles.input}
            />
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
            <label className={styles.passwordLabel}>Password:</label>
            <Field name="password" type="password" className={styles.input} />
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
            <div className={styles.divButton}>
              <button
                type="submit"
                disabled={errors.email && errors.password}
                className={styles.Btn}
              >
                Log in
              </button>
              <button
                type="button"
                disabled={errors.email && errors.password}
                className={styles.Btn}
                onClick={async values => {
                  try {
                    const user = await registration({
                      email: values.email,
                      password: values.password,
                    });
                    dispatch(registerUser(user));
                  } catch (err) {
                    console.log(err);
                    alert('check the fields');
                  }
                }}
              >
                Registration
              </button>
            </div>
          </Form>
        )}
      </Formik>
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
