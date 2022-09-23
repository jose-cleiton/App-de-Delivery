import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import {
  CheckoutPage,
  CustomerPage,
  LoginPage,
  OderDetailsPage,
  OrdersPage,
  ProductsPage,
  RegisterPage,
} from '../pages';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="login" />,
  },
  {
    path: 'login',
    element: <LoginPage />,
    errorElement: <div>Erro</div>,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'customer',
    element: <CustomerPage />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
      {
        path: 'orders/:id',
        element: <OderDetailsPage />,
      },
    ],
  },
  {
    path: 'seller',
    element: <div>Seller</div>,
  },
  {
    path: 'admin/manage',
    element: <div>Manage</div>,
  },
]);

export default AppRoutes;
