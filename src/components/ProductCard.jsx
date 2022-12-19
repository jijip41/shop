import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, product: { id, name, imageUrl, price } }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, {
      state: { product },
    });
  };
  return (
    <li
      className="border rounded-md border-rose-200 flex flex-col items-center space-y-2 p-4 cursor-pointer"
      onClick={handleClick}
    >
      <img src={imageUrl} className="w-full h-auto" alt=""></img>
      <p>{name}</p>
      <p>£{price}</p>
    </li>
  );
}

export default ProductCard;
