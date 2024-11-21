import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import NavBar from "./NavBar";
import GridItemView from "./GridItemView";
import Title from "./Title";

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
    <div className="w-screen">
      <Title buttonTitle="Home" buttonLink="/" titleName="Inventory" />
      <NavBar option={"home"} />
      {/* Render the items */}
      <GridItemView items={allItems} />
    </div>
  );
}

export default App;
