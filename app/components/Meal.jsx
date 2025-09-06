import Link from 'next/link';

export default function Meal({ meal, categoryName }) {
  return (
    <Link
      href={`/categories/${categoryName.toLowerCase()}/${meal.idMeal}`}
      key={meal.idMeal}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>
      </div>
    </Link>
  );
}
