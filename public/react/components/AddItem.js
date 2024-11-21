import React, { useState } from "react";
import NavBar from "./NavBar";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
export default function AddItem() {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // Add Item (POST)
  const addItem = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    navigate("/inventory");
  };

  return (
    <div className="px-8 py-2">
      <div className="justify-center w-60 flex-col gap-4">
        <NavBar />
        <Link
          to={"/inventory"}
          className="inline-flex items-center mb-6 font-semibold bg-[#729FCF] hover:bg-[#5a7fb7] text-[#2C2C2C]  rounded-lg transition-colors px-4 py-2 min-w-[100px]"
        >
          <FaArrowLeft className="mr-2 h-4 w-4 font-semibold" /> Back to
          Inventory
        </Link>
      </div>
      <form
        onSubmit={addItem}
        className="space-y-4 border-2 p-4 bg-white rounded-md"
      >
        <h2 className="text-3xl font-bold mb-4">Add New Item</h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            className="w-full border-2 focus:ring focus:ring-offset-1 focus:ring-slate-80  rounded-md focus:ring-2 outline-none py-2 px-1"
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            className="w-full border-2 focus:ring focus:ring-offset-1 focus:ring-slate-800	 rounded-md focus:ring-2 outline-none py-2 px-1"
            id="description"
            name="description"
            value={item.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price
          </label>
          <input
            className="w-full border-2 focus:ring focus:ring-offset-1 focus:ring-slate-800	 rounded-md focus:ring-2 outline-none py-2 px-1"
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
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <input
            className="w-full border-2 focus:ring focus:ring-offset-1 focus:ring-slate-800	 rounded-md focus:ring-2 outline-none py-2 px-1"
            type="text"
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            className="w-full border-2 focus:ring focus:ring-offset-1 focus:ring-slate-800	 rounded-md focus:ring-2 outline-none py-2 px-1"
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
          className="bg-[#729FCF] hover:bg-[#5a7fb7] text-[#2C2C2C]  font-semibold py-2 px-4 rounded-md"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
