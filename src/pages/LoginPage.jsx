import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    console.log('formDataLogin: ', formData);

    dispatch(loginThunk(formData));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <p>Email:</p>
          <input
            type="email"
            placeholder="testmail@tmail.com"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="********"
            required
            name="userPassword"
            minLength={6}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
