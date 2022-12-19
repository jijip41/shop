import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PlusCircle, MinusCircle, Trash, Equals, Plus } from 'phosphor-react';

import {
  addOrUpdateProductToCart,
  getCartById,
  removeProductFromCart,
} from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { Button } from '../components/Button';

const HOVER = 'hover:scale-105 cursor-pointer';
const CALCLASSNAME =
  'flex flex-col bg-rose-50 rounded-md p-4 items-center gap-y-2 w-40';
const SHIPPING = 4.5;

export default function MyCart() {
  const { uid } = useAuthContext();

  const { data: products } = useQuery(['carts'], () => getCartById(uid));

  const handleRemove = (productId) => {
    removeProductFromCart(uid, productId);
  };

  const handleIncrease = (product) => {
    console.log('increase', products);
    addOrUpdateProductToCart(uid, {
      ...product,
      quantity: product.quantity + 1,
    });
  };

  const handleDecrease = (product) => {
    console.log('decrease', products);
    addOrUpdateProductToCart(uid, {
      ...product,
      quantity: product.quantity - 1,
    });
  };

  const isCartEmpty = products && products.length === 0;

  return (
    <div className="m-8 md:mx-20">
      {isCartEmpty && <p className="text-center">Your cart is empty</p>}

      {!isCartEmpty && (
        <>
          <ul className="flex flex-col gap-y-4">
            {products.map((product) => (
              <li key={product.productId} className="flex justify-between">
                <div className="flex flex-row gap-x-8 items-center">
                  <img
                    alt={product.name}
                    src={product.imageUrl}
                    className="w-20 h-auto md:w-40 rounded-md"
                  ></img>
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-rose-500 font-semibold">
                      {product.option}
                    </p>
                    <p className="font-semibold">£ {product.price}</p>
                  </div>
                </div>
                <div className="flex justify-between gap-x-2 items-center">
                  <PlusCircle
                    size={24}
                    className={HOVER}
                    onClick={() => handleIncrease(product)}
                  />
                  {product.quantity}
                  <MinusCircle
                    size={24}
                    className={HOVER}
                    onClick={() => handleDecrease(product)}
                  />
                  <Trash
                    size={24}
                    className={`${HOVER} text-rose-700`}
                    onClick={() => handleRemove(product.productId)}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-around m-8 items-center">
            <p className={CALCLASSNAME}>
              <span className="font-bold">Itmes</span>
              <span> £ {products.reduce((a, c) => a + c.price, 0)}</span>
            </p>
            <Plus size={28} />
            <p className={CALCLASSNAME}>
              <span className="font-bold">Shipping</span>{' '}
              <span>£ {SHIPPING.toFixed(2)}</span>
            </p>
            <Equals size={32} />
            <p className={CALCLASSNAME}>
              <span className="font-bold">Total</span>
              <span>
                {' '}
                £{' '}
                {(products.reduce((a, c) => a + c.price, 0) + SHIPPING).toFixed(
                  2
                )}
              </span>
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <Button content="Proceed to checkout" />
          </div>
        </>
      )}
    </div>
  );
}
