import React, { useState } from "react";
import NavBar from "./NavBar";

export default function AddItem() {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <NavBar />
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={item.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={item.image}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
