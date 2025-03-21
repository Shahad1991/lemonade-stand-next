"use client";

import { useEffect, useState } from "react";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const ProductList = ({ addToCart }: { addToCart: (item: { id: string; name: string; price: number }) => void }) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch cocktails data from TheCocktailDB
  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched cocktails data:", data);
        if (Array.isArray(data.drinks)) {
          setCocktails(data.drinks);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []); // Denne effekt køres kun én gang ved første render

  

  return (
    <div className="mt-6 flex items-center flex-col">
      <h2 className="text-xl font-semibold">Available Cocktails</h2>
      <div className=" mt-4 ">
        {cocktails.map((cocktail: Cocktail) => (
          <div key={cocktail.idDrink} className="flex justify-between items-center border p-4 rounded-lg">
            <div className="flex items-center">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <span className="font-semibold">{cocktail.strDrink}</span>
            </div>
            <button
              onClick={() =>
                addToCart({ id: cocktail.idDrink, name: cocktail.strDrink, price: 5 })
              }
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;