import React, { useState } from "react";
import EditItem from "./EditItem";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const deleteItem = async (id) => {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex justify-center w-full flex-col gap-4">
        <NavBar />
        <Link
          to={"/"}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-semibold"
        >
          <FaArrowLeft className="mr-2 h-4 w-4 font-semibold" /> Back to
          Inventory
        </Link>
      </div>
      {!isEditing ? (
        <div className="border-2 rounded-md w-[40rem] font-semibold">
          <div className="w-full justify-center flex">
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-w-md h-64 object-contain mb-4"
            />
          </div>
          <div className="border-t-2 p-4">
            <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
            <p className="mb-4 text-gray-600">
              <span className="font-bold text-gray-700 txt-4xl">Category:</span>{" "}
              {item.category}
            </p>
            <p className="mb-2 w-3/4 text-gray-600">
              <span className="font-bold text-gray-700">Description:</span>{" "}
              {item.description}
            </p>
            <p className="mb-2 text-2xl font-bold text-blue-600">
              ${item.price.toFixed(2)}
            </p>
            <div className="space-x-2 flex mt-8">
              <button
                type="button"
                className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 flex justify-between w-24 txt-2xl items-center"
                onClick={() => setIsEditing(true)}
              >
                <FaEdit size={15} />
                Edit
              </button>
              <button
                className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-red-600 hover:bg-red-700 flex justify-between w-28 txt-2xl items-center"
                variant="destructive"
                onClick={() => deleteItem(item.id)}
              >
                <MdDeleteForever size={20} />
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EditItem item={item} onCancel={() => setIsEditing(false)} />
      )}
    </div>
  );
}
