import React from "react";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function NavBar({ option }) {
  return (
    <div className="flex w-full justify-between items-center">
      <Link to={"/"}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Inventory App
        </h1>
      </Link>
      {option === "home" && (
        <Link
          to={"/items/add"}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex w-44 transition-colors items-center justify-between py-2 px-4"
        >
          <LuPlus />
          <span>Add New Item</span>
        </Link>
      )}
    </div>
  );
}
