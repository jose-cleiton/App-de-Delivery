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
  loaderOderDetails,
  loaderProductsPage,
  loaderSellersPage,
  loaderUserOrdersPage,
  SellerOrders,
  loaderSalesBySeller,
  SellerOrderDetails,
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
        loader: loaderProductsPage,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
        loader: loaderSellersPage,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
        loader: loaderUserOrdersPage,
      },
      {
        path: 'orders/:id',
        element: <OderDetailsPage />,
        loader: loaderOderDetails,
      },
    ],
  },
  {
    path: 'seller/orders',
    element: <SellerOrders />,
    loader: loaderSalesBySeller,
  },
  {
    path: 'seller/orders/:id',
    element: <SellerOrderDetails />,
    loader: loaderSalesBySeller,
  },
  {
    path: 'admin/manage',
    element: <div>Manage</div>,
  },
]);

export const { navigate } = AppRoutes;
export default AppRoutes;
