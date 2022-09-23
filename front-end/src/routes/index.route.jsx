import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Login, Register } from '../pages';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="login" />,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <div>Erro</div>,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: '/customer/*',
    element: <div>Customer</div>,
  },
  {
    path: 'seller/*',
    element: <div>Seller</div>,
  },
  {
    path: 'admin/manage',
    element: <div>Manage</div>,
  },
  {
    path: '*',
    element: <Navigate to="login" />,
  },
]);

export default AppRoutes;
