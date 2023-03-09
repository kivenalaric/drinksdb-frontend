/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

import React from 'react';
import RegisterCss from './Register.module.css';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirmation: target.passwordConfirmation.value,
    };
    console.log(data);
  };
  return (
    <div className={RegisterCss.main}>
      <form action="" onSubmit={handleSubmit} className={RegisterCss.form_main}>
        <h1>Please Create An Account</h1>
        <div className={RegisterCss.form}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <input type="text" placeholder="Last Name" name="lastName" required />
          <input
            type="email"
            placeholder="Email Address"
            name="emailAddress"
            required
          />
          <input type="phone" placeholder="Name" name="phone" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            required
          />
          <button type="submit" className={RegisterCss.create}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
