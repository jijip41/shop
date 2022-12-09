import React from 'react';

function AddNewProduct() {
  return (
    <main className="flex flex-col">
      <h2> Add new products</h2>
      <form action="" method="get" className="flex flex-col w-md">
        <input type="file" alt=""></input>
        <input
          type="text"
          className="border-2 border-black"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="border-2 border-black"
          placeholder="Price"
        ></input>
        <input
          type="text"
          className="border-2 border-black"
          placeholder="Category"
        ></input>
        <input
          type="text"
          className="border-2 border-black"
          placeholder="Desctiption"
        ></input>
        <input
          type="text"
          className="border-2 border-black"
          placeholder="Options"
        ></input>
        <button>Add product</button>
      </form>
    </main>
  );
}

export default AddNewProduct;
