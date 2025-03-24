import { useState } from "react";

export function ProfitDisplay() {
  const [profit, setProfit] = useState(0);

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    setProfit((prevProfit) => prevProfit + item.price);
  };

  const handleRemoveFromCart = (item: { id: string; name: string; price: number }) => {
    setProfit((prevProfit) => prevProfit - item.price);
  };

  return (
    <div>
      <p>Beløb til betaling: {profit}</p>
      {/* Example buttons to demonstrate adding/removing items */}
      <button onClick={() => handleAddToCart({ id: "1", name: "Lemonade", price: 5 })}>
        Add Lemonade
      </button>
      <button onClick={() => handleRemoveFromCart({ id: "1", name: "Lemonade", price: 5 })}>
        Remove Lemonade
      </button>
    </div>
  );
}

export default ProfitDisplay;