import Link from 'next/link';
import Meal from './Meal';

function Meals({ meals, categoryName, main = false }) {
  return (
    <div className="container mx-auto p-4">
      {!main && (
        <h1 className="text-2xl font-bold mb-6 text-center">
          Meals in {categoryName}
        </h1>
      )}
      {meals && meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} categoryName={categoryName} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No meals found.</p>
      )}
    </div>
  );
}

export default Meals;
