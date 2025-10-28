import Meal from './Meal';

export default async function SearchedMeals({ meals }) {
  return (
    <div className="container mx-auto py-8">
      {meals && meals.length > 0 ? (
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
        <div className="text-center py-12">
          <div className="bg-orange-100 rounded-full p-6 mb-4 inline-block">
            <svg
              className="w-16 h-16 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-lg">No meals found.</p>
          <p className="text-gray-500 mt-2">
            Try searching for different recipes
          </p>
        </div>
      )}
    </div>
  );
}
