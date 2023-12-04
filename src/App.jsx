import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Loader } from './components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { refreshThunk } from 'redux/auth/auth.reducer';
import * as ROUTES from 'constants/routes';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const appRoutes = [
  { path: ROUTES.HOME_ROUTE, element: <HomePage /> },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
};
