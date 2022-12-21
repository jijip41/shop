import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from '../components/ProductCard';

export function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], getProducts, {
    staleTime: 600 * 1000,
  });

  return (
    <main className="w-full h-screen overflow-scroll">
      {isLoading && <p>Loading products</p>}
      {error && <p>Something went wrong</p>}
      {products && (
        <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 m-8">
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </ul>
      )}
    </main>
  );
}

export default Products;
