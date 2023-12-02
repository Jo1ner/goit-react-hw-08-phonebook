import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = { name, email, password };
    dispatch(registerThunk(formData));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <p>Name:</p>
          <input
            type="text"
            placeholder="Petrov Petro Petrovich"
            required
            name="userName"
          />
        </label>
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
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
