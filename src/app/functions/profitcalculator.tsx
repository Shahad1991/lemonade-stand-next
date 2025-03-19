"use client";
 
import { useState } from 'react'
 
export default function Counter() {
  const [profit, setCount] = useState(0)
 
  return (
    <div>
      <p>your profit: {profit}</p>
      <button
        className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setCount(profit + 2)}
      >
        Sell lemonade
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => setCount(profit - 2)}
      >
        Buy Lemonade
      </button>
    </div>
  )
}