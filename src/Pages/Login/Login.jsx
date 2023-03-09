/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

function Login() {
  return (
    <form action="">
      <input type="text" name="userName" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
      <p>Don't have an account yet</p>
    </form>
  );
}

export default Login;
