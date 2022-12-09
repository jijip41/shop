import React from 'react';
import TextInput from '../components/TextInput';

function AddNewProduct() {
  return (
    <main className="flex flex-col items-center">
      <h2> Add new products</h2>
      <form
        action=""
        method="get"
        className="flex flex-col space-y-4 w-full p-10"
      >
        <TextInput type="file" placeholder="Name" />
        <TextInput type="text" placeholder="Name" />
        <TextInput type="text" placeholder="Price" />
        <TextInput type="text" placeholder="Category" />
        <TextInput type="text" placeholder="Description" />
        <TextInput type="text" placeholder="Options" />

        <button className="rounded-full border-2 border-rose-200 text-gray-600 p-2 hover:bg-rose-50 hover:text-gray-800">
          Add product
        </button>
      </form>
    </main>
  );
}

export default AddNewProduct;
