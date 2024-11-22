import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/items/cart/1");
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const data = await response.json();
        setCartItems(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = async (id, newQuantity) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/items/cart/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update cart item quantity");
      }

      const updatedItem = await response.json();

      setCartItems((prevCartItems) =>
        prevCartItems
          .map((item) =>
            item.id === id ? { ...item, quantity: updatedItem.quantity } : item
          )
          .filter((item) => item.quantity > 0)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCheckout = async () => {
    try {
      console.log("Proceeding to checkout");
      navigate("/inventory");
    } catch (error) {
      console.error("Checkout failed", error);
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-xl">Loading your cart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-red-600">{error}</p>
        <Link to="/inventory" className="text-blue-600 hover:underline">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link to="/inventory" className="text-blue-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      <Link
        to="/inventory"
        className="block mt-8 text-blue-600 hover:underline"
      >
        ← Continue Shopping
      </Link>
    </div>
  );
}
