import React from "react";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function NavBar({ option }) {
  return (
    <div className="flex w-full justify-between items-center">
      {option === "home" && (
        <Link
          to={"/items/add"}
          className="bg-[#729FCF] hover:bg-[#5a7fb7] text-[#2C2C2C] font-semibold rounded-lg flex w-44 ml-auto mr-6 mt-5 py-2 px-6 transition-colors items-center"
        >
          <LuPlus />
          <span>Add New Item</span>
        </Link>
      )}
    </div>
  );
}