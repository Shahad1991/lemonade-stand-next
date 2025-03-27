import Drinks from "./drinks";

export default async function ShopPage() {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon");
  const data = await response.json();

  // Check if the API returned valid data
  const cocktails = data.drinks || [];

  return (
    <div>
      <Drinks cocktails={cocktails} />
    </div>
  );
}