import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";

export default function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/inventory");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-screen mx-auto px-4 py-8">
      <Link
        to={"/"}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 w-1/3"
      >
        <FaArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
      </Link>
      <div className="border-2 py-8 px-6 rounded-md w-1/3 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold">Login</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                className="border-2 w-full rounded-md p-1"
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                className="border-2 w-full rounded-md p-1"
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 flex gap-4 justify-center items-center"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Logging in..." : "Login"}
            <IoIosLogIn size={20} />
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          to={"/auth/register"}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Register here
        </Link>
      </p>
    </div>
  );
}
