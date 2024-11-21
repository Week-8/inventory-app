import React from "react";
import ItemCard from "./ItemCard";

export default function GridItemView({ items }) {
  return (
    <div
      style={{
        width: "98%",
        margin: "auto", 
        marginTop: "1.5%",
        marginBottom: "2%", 
        marginRight: "2",
        marginLeft: "0.5%"
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {items.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
}
