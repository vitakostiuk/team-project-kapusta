import React from 'react';
import Header from '../Header';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useLoginMutation,
  useRegisterMutation,
} from 'redux/authorization/authApi';
import { logIn, registerUser } from '../../redux/feature/authSlice';

import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [registration] = useRegisterMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const onSubmiteRegistration = async e => {
    e.preventDefault();
    try {
      const newUser = await registration({ email, password });
      dispatch(registerUser(newUser));
    } catch (err) {
      console.log(err);
    }
    setEmail('');
    setPassword('');
  };
  const onSubmitLogin = async e => {
    e.preventDefault();

    try {
      const user = await login({ email, password });
      dispatch(logIn(user));
    } catch (err) {
      console.log(err);
      alert('check your password or email or register in the application');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Form onSubmit={onSubmitLogin}>
        <p>You can log in with your Google Account:</p>
        <span>Google</span>
        <p>Or log in using an email and password, after registering:</p>
        <div>
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input
            className="form-control"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <Button type="submit" variant="success">
          Log in
        </Button>
        <Button type="button" variant="success" onClick={onSubmiteRegistration}>
          Registration
        </Button>
      </Form>
    </div>
  );
};

export default Login;
