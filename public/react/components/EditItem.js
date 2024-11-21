import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditItem({ item, onCancel }) {
  const [editedItem, setEditedItem] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
    category: item.category,
    image: item.image,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  // Update Item (PATCH)
  const updateItem = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedItem),
    });
    if (res.ok) {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={updateItem} className="space-y-4 border-2 p-4 rounded-md bg-white">
        <h2 className="text-3xl font-bold mb-4">Edit Item</h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            className="w-full border-2 focus:ring focus:ring-offset-1 focus:ring-slate-800	 rounded-md focus:ring-2 outline-none py-2 px-1"
            type="text"
            id="name"
            name="name"
            value={editedItem.name}
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
            value={editedItem.description}
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
            value={editedItem.price}
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
            value={editedItem.category}
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
            value={editedItem.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-x-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update Item
          </button>
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
