function MealDetails({ meal }) {
  const arr = Array.from({ length: 20 }, (_, i) => String(i + 1));
  console.log(meal.strIngredient + arr[0]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-gray-800 font-bold text-3xl tracking-wide mb-8">
            {meal.strMeal}
          </h1>
          <div>
            <h3 className="mb-2 text-xl font-medium">ingredients:</h3>
            <div className="flex flex-wrap gap-2">
              {arr.map((n) => {
                if (meal['strIngredient' + n])
                  return (
                    <span
                      className="text-white bg-purple-500 px-1 py-0.5 rounded-md"
                      key={n}
                    >
                      {meal['strIngredient' + n]} - {meal['strMeasure' + n]}
                    </span>
                  );
              })}
            </div>
          </div>
          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              className="text-blue-600 underline mt-4 inline-block"
            >
              View Source
            </a>
          )}
        </div>
        <div className="w-1/2 rounded-md overflow-hidden">
          <img src={meal.strMealThumb} className="object-cover aspect-square" />
        </div>
      </div>
      <div className="mt-8">{meal.strInstructions}</div>
    </div>
  );
}

export default MealDetails;
