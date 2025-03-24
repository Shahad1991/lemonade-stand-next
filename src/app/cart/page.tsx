"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, totalProfit } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-none">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <span>{item.name} - ${item.price} x {item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Total: ${totalProfit.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}