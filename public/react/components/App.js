import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Title from "./Title"
import NavBar from "./NavBar";
import GridItemView from "./GridItemView";




export async function loader() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();
  return { items };
}

function App() {
  const { items } = useLoaderData();
  const [allItems, setAllItems] = useState(items); // Initialize state for items

  const fetchItems = async () => {
    const res = await fetch("http://localhost:3000/api/items");
    const fetchedItems = await res.json();
    setAllItems(fetchedItems); // Update the state with fetched items
  };

  // Add Item (POST)
  const addItem = async (newItem) => {
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    if (res.ok) {
      fetchItems();
    }
  };

  // Update Item (PATCH)
  const updateItem = async (id, updatedItem) => {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    if (res.ok) {
      fetchItems();
    }
  };

  // Delete item (DELETE)
  const deleteItem = async (id) => {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchItems();
    }
  };

  useEffect(() => {
    // fetchItems();
  }, []);

  return (
    <div className="w-screen px-0 pt-0">
      <Title buttonTitle="Home" buttonLink="/" titleName="Inventory"/>
      <NavBar option={"home"} />
      {/* Render the items */}
      <GridItemView items={allItems} />
    </div>
  );
}

export default App;
