import React from 'react';

function ProductCard({ product: { id, name, imageUrl, price } }) {
  return (
    <li className="border rounded-md border-rose-200 flex flex-col items-center space-y-2 p-4 cursor-pointer">
      <img src={imageUrl} className="w-full h-auto" alt=""></img>
      <p>{name}</p>
      <p>£{price}</p>
    </li>
  );
}

export default ProductCard;
