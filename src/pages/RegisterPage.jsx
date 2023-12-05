import { FormStyle } from 'components/Form/Form.styled';
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
      <FormStyle onSubmit={onSubmit}>
        <label>
          <p className="text">Name:</p>
          <input
            className="input"
            type="text"
            placeholder="Petrov Petro Petrovich"
            required
            name="userName"
          />
        </label>
        <label>
          <p className="text">Email:</p>
          <input
            className="input"
            type="email"
            placeholder="testmail@tmail.com"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p className="text">Password:</p>
          <input
            className="input"
            type="password"
            placeholder="********"
            required
            name="userPassword"
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </FormStyle>
    </div>
  );
};

export default RegisterPage;
