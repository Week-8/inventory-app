import React, { useEffect, useState } from "react";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

import NavBar from "./NavBar";
import GridItemView from "./GridItemView";

import { Outlet, Link, useLoaderData } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

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

export async function loader() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();
  // const items = sampleData;
  return { items };
}

function App() {
  const { items } = useLoaderData();
  // const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchItems = async () => {
    const res = await fetch("http://localhost:3000/items");
  };

  useEffect(() => {
    // Fetch the items
  }, []);

  return (
    <div className="w-screen px-12 pt-4">
      <NavBar option={"home"} />
      <div className="relative my-6 rounded-lg overflow-visible">
        <IoSearch
          size={25}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search items or categories..."
          className="pl-10 w-full focus:outline-none focus:ring p-2 rounded-lg focus:ring-offset-2 border-2 focus:ring-2 focus:ring-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Render the items */}
      <GridItemView items={items} />
    </div>
  );
}

export default App;
