"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export default function ShopPage() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched cocktails data:", data);
        if (data && Array.isArray(data.drinks)) {
          setCocktails(data.drinks);
        } else {
          console.error("Unexpected response format:", data);
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        console.error("Failed to fetch cocktails:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  if (loading) {
    return <p>Loading cocktails...</p>;
  }

  if (error) {
    return <p>Error fetching cocktails: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold">Available Cocktails</h2>
      <div className="space-y-4 mt-4">
        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="flex justify-between items-center border p-4 rounded-lg">
            <div className="flex items-center">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-16 h-16 object-cover rounded-lg mr-4" />
              <span className="font-semibold">{cocktail.strDrink}</span>
            </div>
            <button
              onClick={() => addToCart({ id: cocktail.idDrink, name: cocktail.strDrink, price: 5 })}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}