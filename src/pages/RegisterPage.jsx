import React from 'react';

const RegisterPage = () => {
  const onSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    console.log('name: ', name);
    console.log('email: ', email);
    console.log('password: ', password);
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
