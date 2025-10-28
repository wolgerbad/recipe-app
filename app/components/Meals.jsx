import Meal from './Meal';

function Meals({ meals, categoryName, main = false }) {
  return (
    <div className="container mx-auto py-8">
      {!main && (
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3 capitalize">
            {categoryName} Meals
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing {categoryName.toLowerCase()} recipes
          </p>
        </div>
      )}
      {meals && meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} categoryName={categoryName} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No meals found. Try another category!
          </p>
        </div>
      )}
    </div>
  );
}

export default Meals;
