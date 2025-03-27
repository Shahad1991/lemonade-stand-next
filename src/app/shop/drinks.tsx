"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface DrinksProps {
  cocktails: Cocktail[];
}

export default function Drinks({ cocktails }: DrinksProps) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({});

  return (
    <div className="container m-auto p-4">
      <div className="space-y-4 mt-4">
        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="flex justify-between items-center border p-4 rounded-lg">
            <div className="flex items-center">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <span className="font-semibold">{cocktail.strDrink}</span>
            </div>
            <span>Price: $10</span>
            <button
              onClick={() => {
                addToCart({ id: cocktail.idDrink, name: cocktail.strDrink, price: 10 });
                setClicked((prevState) => ({ ...prevState, [cocktail.idDrink]: true }));
              }}
              className={`py-2 px-4 rounded text-white ${
                clicked[cocktail.idDrink] ? "bg-green-500" : "bg-green-800"
              }`}
            >
              {clicked[cocktail.idDrink] ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}