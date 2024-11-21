import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import NavBar from "./NavBar";
import GridItemView from "./GridItemView";

export async function loader() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();
  return { items };
}

function App() {
  const { items } = useLoaderData();
  const [allItems, setAllItems] = useState(items);

  useEffect(() => {}, []);

  return (
    <div className="w-screen px-12 pt-4">
      <NavBar option={"home"} />
      {/* Render the items */}
      <GridItemView items={allItems} />
    </div>
  );
}

export default App;
