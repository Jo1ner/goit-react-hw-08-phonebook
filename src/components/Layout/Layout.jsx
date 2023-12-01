import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';
// import { useSelector } from 'react-redux';
// import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';

const Layout = ({ children }) => {
  //   const authenticated = useSelector(selectAuthenticated);
  //   const userData = useSelector(selectUserData);

  return (
    <div>
      <header className="header">
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/register"
        >
          Register
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
