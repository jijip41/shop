import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import AddNewProduct from './pages/AddNewProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/my-cart', element: <MyCart /> },
      { path: '/products/new', element: <AddNewProduct /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
