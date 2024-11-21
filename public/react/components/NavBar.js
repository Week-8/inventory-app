import React, { useEffect, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout, CiLogin } from "react-icons/ci";

export default function NavBar({ option }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex w-full justify-between items-center">
      <Link to={"/"}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Inventory App
        </h1>
      </Link>
      {option === "home" && (
        <div className="flex gap-4">
          <Link
            to={"/items/add"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex w-44 transition-colors items-center justify-between py-2 px-4"
          >
            <LuPlus />
            <span>Add New Item</span>
          </Link>
          <Link
            to={"/items/cart"}
            className="border-2 font-semibold rounded-lg flex w-30 gap-2 transition-colors items-center py-2 px-4"
          >
            <IoCartOutline size={25} />
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="border-2 font-semibold rounded-lg flex w-30 gap-2 transition-colors items-center py-2 px-4"
            >
              <CiLogin size={25} />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="border-2 font-semibold rounded-lg flex w-30 gap-2 transition-colors items-center py-2 px-4"
            >
              <CiLogin size={20} />
              <span>Login</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
