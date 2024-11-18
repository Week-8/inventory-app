import React from "react";

import ItemCard from "./ItemCard";

export default function GridItemView({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {items.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
}
