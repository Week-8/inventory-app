import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import NavBar from "./NavBar";
import GridItemView from "./GridItemView";

import { Outlet, Link, useLoaderData } from "react-router-dom";


export async function loader() {
  // const items = await fetchItems();
  const items = sampleData;
  return { items };
}

function App() {
  const { items } = useLoaderData();
  // const [items, setItems] = useState([]);

  // Fetches items from the backend (for adding and deleting)
  const fetchItems = async () => {
    const res = await fetch("http://localhost:3000/api/items");
    const fetchedItems = await res.json();
    setAllItems(fetchedItems);
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
      fetchItems(); // This refetches the items after a new one has been added
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
      fetchItems(); // Re-fetch items after updating
    }
  };

  // Delete item (DELETE)
  const deleteItem = async (id) => {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchItems(); // Re-fetch items after deletion
    }
  };

  useEffect(() => {
    fetchItems(); // Fetch items when the component loads
  }, []);

  return (
    <div className="w-screen px-12 pt-4">
      <NavBar option={"home"} />
      {/* Render the items */}
      <GridItemView items={items} />
    </div>
  );
}

export default App;
