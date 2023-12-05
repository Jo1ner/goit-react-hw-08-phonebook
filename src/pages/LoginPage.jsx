import { FormStyle } from 'components/Form/Form.styled';
import Notiflix from 'notiflix';
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
    Notiflix.Notify.success(`Authentication was successful`);
  };
  return (
    <div>
      <FormStyle onSubmit={onSubmit}>
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
            minLength={6}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </FormStyle>
    </div>
  );
};

export default LoginPage;
