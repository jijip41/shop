import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import useCarts from '../hooks/useCarts';

function ProductDetail() {
  const {
    state: {
      product: { id, imageUrl, name, description, category, price, options },
    },
  } = useLocation();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const { addToCart } = useCarts();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      productId: id,
      category,
      imageUrl,
      name,
      price,
      option: selectedOption,
      quantity: 1,
    };
    addToCart.mutate(product);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <p>Category {`> ${category}`}</p>
      <section className="flex flex-col md:flex-row p-4 gap-2">
        <div className="content-center w-full basis-7/12">
          <img src={imageUrl} alt={name} className="w-full"></img>
        </div>
        <div className="w-full basis-5/12 flex flex-col pl-4">
          <p className="text-2xl font-bold text-zinc-800">{name}</p>
          <p className="text-xl font-bold text-zinc-600">£ {price}</p>
          <p className="text-zinc-500">{description}</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-40 space-y-2"
          >
            <label htmlFor="options" className="text-rose-500">
              Select an option:
            </label>
            <select
              name="options"
              id="options"
              defaultValue={selectedOption}
              className="outline-none border-2 border-dashed border-rose-400"
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <Button content="Add to Cart" />
          </form>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
