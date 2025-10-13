'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FavoritesPage(x) {
  console.log(x);
  const [favorites, setFavorites] = useState(() => {
    const items = JSON.parse(localStorage.getItem('favorites')) || [];
    return items;
  });

  function handleRemove(id) {
    setFavorites((favs) => favs.filter((fav) => fav.id !== id));
  }

  useEffect(
    function () {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    [favorites]
  );

  return (
    <div className="mx-auto max-w-7xl p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-purple-700 tracking-tight drop-shadow">
        Your Favorite Meals
      </h1>
      {favorites.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
            >
              <Link href={`/categories/${meal.categoryName}/${meal.id}`}>
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="font-bold text-lg mb-2 text-gray-800">
                  {meal.mealName}
                </h2>
                <button
                  className="mt-auto bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition"
                  onClick={() => handleRemove(meal.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <p className="text-gray-600 text-lg">
            No favorites found. Go add some delicious meals!
          </p>
        </div>
      )}
    </div>
  );
}
