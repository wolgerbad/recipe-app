import Meal from './Meal';

export default async function SearchedMeals({ meals }) {
  return (
    <div className="container mx-auto p-4">
      {meals && meals.length > 2 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <Meal
              key={meal.idMeal}
              meal={meal}
              categoryName={meal.strCategory}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No meals found.</p>
      )}
    </div>
  );
}
