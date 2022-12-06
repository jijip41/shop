import React from 'react';
import { Navigate } from 'react-router-dom';

function AddNewProduct() {
  const isAdmin = false;
  return <>{isAdmin ? <div>Add a new product</div> : <Navigate to="/" />}</>;
}

export default AddNewProduct;
