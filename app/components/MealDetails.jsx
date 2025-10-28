import Image from 'next/image';

function MealDetails({ meal }) {
  const arr = Array.from({ length: 20 }, (_, i) => String(i + 1));
  console.log(meal.strIngredient + arr[0]);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
            {meal.strMeal}
          </h1>

          <div className="mb-6">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {arr.map((n) => {
                if (meal['strIngredient' + n])
                  return (
                    <span
                      className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium"
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
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors underline underline-offset-4"
            >
              View Source Recipe ↗
            </a>
          )}
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white/60 rounded-2xl p-8 border border-orange-100">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Instructions
        </h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
}

export default MealDetails;
