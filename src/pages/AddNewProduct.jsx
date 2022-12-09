import React from 'react';
import TextInput from '../components/TextInput';

function AddNewProduct() {
  return (
    <main className="flex flex-col items-center min-w-min-70">
      <h2> Add new products</h2>
      <form action="" method="get" className="flex flex-col">
        <input type="file" alt=""></input>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Price" />
        <TextInput placeholder="Category" />
        <TextInput placeholder="Description" />
        <TextInput placeholder="Options" />

        <button>Add product</button>
      </form>
    </main>
  );
}

export default AddNewProduct;
