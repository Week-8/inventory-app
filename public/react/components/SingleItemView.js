import React, { useState } from "react";
import EditItem from "./EditItem";
import { useLoaderData } from "react-router-dom";
import NavBar from "./NavBar";

const sampleData = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
];

export async function singleItemLoader({ params }) {
  const { itemId } = params;

  try {
    const res = await fetch(`http://localhost:3000/api/items/${itemId}`);
    const item = await res.json();
    return { item };
  } catch (error) {
    console.error(error);
  }
}

export default function SingleItemView() {
  const { item } = useLoaderData();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {};

  return (
    <div>
      <NavBar />
      {!isEditing ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
          <img
            src={item.image}
            alt={item.name}
            className="w-full max-w-md h-64 object-contain mb-4"
          />
          <p className="mb-2">
            <strong>Description:</strong> {item.description}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> ${item.price.toFixed(2)}
          </p>
          <p className="mb-4">
            <strong>Category:</strong> {item.category}
          </p>
          <div className="space-x-2">
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <EditItem item={item} onCancel={() => setIsEditing(false)} />
      )}
    </div>
  );
}
