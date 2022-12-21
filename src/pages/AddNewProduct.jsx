import React, { useState } from 'react';
import { uploadImg } from '../api/uploader';
import { addNewProduct } from '../api/firebase';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddNewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const queryClient = useQueryClient();
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImg(file)
      .then((url) => addProduct.mutate({ product, url }), {
        onSuccess: () => {
          setSuccess('Product is successfully added.');
          setTimeout(() => {
            setSuccess(null);
          }, 5000);
        },
      })
      .then(setProduct({}))
      .then(setFile())
      .then(e.target.reset())
      .finally(() => setIsUploading(false));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  return (
    <main className="flex flex-col items-center pt-4 space-y-2">
      <h2 className="font-bold text-lg text-zinc-800 bg-rose-200 rounded-md p-2">
        Add new products
      </h2>
      {success && <p className="text-zinc-700 font-semibold ">{success} </p>}
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Local file"
          className="w-72"
        ></img>
      )}
      <form
        action=""
        method="POST"
        className="flex flex-col space-y-4 w-full p-4"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={product.name ?? ''}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Price"
          value={product.price ?? ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          required
          placeholder="Category"
          value={product.category ?? ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          required
          placeholder="Description"
          value={product.description ?? ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          required
          placeholder="Options: please put ',' after each"
          value={product.options ?? ''}
          onChange={handleChange}
        />

        <button
          className="rounded-full border-2 border-rose-200 text-gray-600 p-2 hover:bg-rose-50 hover:text-gray-800"
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Add product'}
        </button>
      </form>
    </main>
  );
}

export default AddNewProduct;
