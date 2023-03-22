/* eslint-disable no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';
import LoginCss from './Login.module.css';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toRegister = () => {
    navigate('/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };
    console.log(user);
    setError('');
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate('/dashboard');
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    }
    // navigate("/dashboard");
  };
  return (
    <div className={LoginCss.main}>
      <form action="" className={LoginCss.form_main} onSubmit={handleSubmit}>
        <h1>Please Login</h1>
        <div className={LoginCss.form}>
          {error && <p className={LoginCss.login_err}>{error}</p>}
          <input type="email" name="emailAddress" placeholder="Email Address" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </div>
        <p className={LoginCss.register}>
          Don't have an account yet
          <button
            type="button"
            className={LoginCss.login_btn}
            onClick={toRegister}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
