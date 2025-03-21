"use client";

import { useEffect, useState } from "react";

export default function ShoppingCart() {
  // State for kurv, produkter og profit
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const [profit, setProfit] = useState(0);
  const [cocktails, setCocktails] = useState<any[]>([]); // Håndter cocktails data

  // Fetch cocktails data fra TheCocktailDB
  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon");
        const data = await response.json();
        setCocktails(Array.isArray(data.drinks) ? data.drinks : []);
      } catch (error) {
        console.error("Failed to fetch cocktails:", error);
        setCocktails([]);
      }
    };

    fetchCocktails();
  }, []); // Denne effekt køres kun én gang ved første render

  // Tilføj varer til kurv
  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Hvis varen allerede er i kurven, opdater mængden
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Hvis varen ikke er i kurven, tilføj den
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    // Opdater profit
    setProfit((prevProfit) => prevProfit + item.price);
  };

  // Fjern varer fra kurv
  const handleRemoveFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((i) => i.id === id);
      if (item) {
        // Opdater profit ved at fjerne varen
        setProfit((prevProfit) => prevProfit - item.price * item.quantity);
        // Fjern varen fra kurven
        return prevItems.filter((i) => i.id !== id);
      }
      return prevItems;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {/* Kurv Indhold */}
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul className="list-none">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between border-b pb-4">
                  <span>{item.name} - ${item.price} x {item.quantity}</span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Total Profit: ${profit.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>

      {/* Produktliste: Cocktails hentet fra API */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Available Cocktails</h2>
        <div className="space-y-4 mt-4">
          {cocktails.map((cocktail: any) => (
            <div key={cocktail.idDrink} className="flex justify-between items-center border p-4 rounded-lg">
              <div className="flex items-center">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <span className="font-semibold">{cocktail.strDrink}</span>
              </div>
              <button
                onClick={() => handleAddToCart({ id: cocktail.idDrink, name: cocktail.strDrink, price: 5 })}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}