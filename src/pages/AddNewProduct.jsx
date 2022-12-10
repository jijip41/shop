import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import { writeProductData } from '../api/firebase';

function AddNewProduct() {
  const [product, setProduct] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = {
      name: 'aaa',
      price: 'aaa',
      category: 'aaa',
      description: 'aaa',
      options: 'aaa',
      imageUrl: 'www.aaa.aaa',
    };
    writeProductData(value);
  };

  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  return (
    <main className="flex flex-col items-center">
      <h2> Add new products</h2>
      {file && <img src={URL.createObjectURL(file)} alt="Local file"></img>}
      <form
        action=""
        method="POST"
        className="flex flex-col space-y-4 w-full p-10"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          required
          name="file"
          onChange={handleChange}
        ></input>
        <TextInput
          type="text"
          namd=""
          placeholder="Name"
          value={product.name ?? ''}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Price"
          value={product.price ?? ''}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Category"
          value={product.category ?? ''}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Description"
          value={product.dscription ?? ''}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Options"
          value={product.options ?? ''}
          onChange={handleChange}
        />

        <button className="rounded-full border-2 border-rose-200 text-gray-600 p-2 hover:bg-rose-50 hover:text-gray-800">
          Add product
        </button>
      </form>
    </main>
  );
}

export default AddNewProduct;
