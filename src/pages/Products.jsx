import React from 'react';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

export function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

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
