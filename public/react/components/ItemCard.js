import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <>
      <Link
        to={`/items/${item.id}`}
        key={item.id}
        className="border p-4 rounded-lg hover:shadow-lg transition-shadow flex flex-col gap-4 bg-[#FFFFFF]"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-contain"
        />
        <div className="w-full bg-inherit border-t-2 border-black pt-2 flex flex-col gap-2">
          <h3 className="font-bold txt-xl">{item.name}</h3>
          <p className="text-gray-600">{item.category}</p>
          <p className="font-semibold text-blue-800">
            £{item.price.toFixed(2)}
          </p>
          <p className="font-semibold text-gray-600 ml-auto">Stock:{item.stock}</p>
        </div>
      </Link>
    </>
  );
}
