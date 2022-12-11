import React from 'react';
import Products from './Products';

function Home() {
  return (
    <>
      <section className="h-40 relative bg-zinc-900">
        <div className="w-full h-full bg-cover bg-banner absolute opacity-75"></div>
        <div className="absolute w-full top-12 text-center text-white">
          <h2 className="font-bold text-2xl ">Shop with us</h2>
          <p className="font-semibold">We help you dress better</p>
        </div>
      </section>
      <Products />
    </>
  );
}

export default Home;
