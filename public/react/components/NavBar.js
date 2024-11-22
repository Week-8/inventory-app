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
    navigate("/auth/login");
  };

  return (
    <div className="flex w-full justify-between items-center">
      <Link to={"/home"}></Link>
      {option === "home" && (
        <div className="flex">
          <Link
            to={"/items/add"}
            className="bg-[#729FCF] hover:bg-[#5a7fb7] text-[#2C2C2C] font-semibold rounded-lg flex w-44 ml-auto mr-6 mt-5 py-2 px-6 transition-colors items-center"
          >
            <LuPlus />
            <span className="">Add New Item</span>
          </Link>
          <Link
            to={"/items/cart"}
            className="bg-[#729FCF] hover:bg-[#5a7fb7] text-[#2C2C2C] font-semibold rounded-lg flex w-30 ml-auto mr-6 mt-5 py-2 px-6 transition-colors items-center"
          >
            <IoCartOutline size={25} />
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-[#729FCF] hover:bg-[#5a7fb7] text-[#2C2C2C] font-semibold rounded-lg flex w-28 gap-4 ml-auto mr-6 mt-5 py-2 px-6 transition-colors items-center"
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
