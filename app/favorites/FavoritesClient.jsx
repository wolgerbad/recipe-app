'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getLocalStorageItem } from '../_lib/helpers';

export default function FavoritesClient() {
  const [favorites, setFavorites] = useState([]);

  const [mounted, setMounted] = useState(false);

  function handleRemove(id) {
    setFavorites((favs) => favs.filter((fav) => fav.id !== id));
  }

  useEffect(function () {
    const items = JSON.parse(localStorage.getItem('favorites')) || [];
    setMounted(true);
    if (items) setFavorites(items);
  }, []);

  useEffect(
    function () {
      if (!mounted) return;
      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    [favorites, mounted]
  );
  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-7xl py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-orange-600 bg-clip-text text-transparent mb-3">
          Your Favorite Meals
        </h1>
        <p className="text-gray-600 text-lg">
          All your saved recipes in one place
        </p>
      </div>
      {favorites?.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col hover:scale-105 transition-all duration-300 border border-orange-100 group"
            >
              <Link
                href={`/categories/${meal.categoryName}/${meal.id}`}
                className="relative overflow-hidden"
              >
                <Image
                  src={meal.image}
                  alt={meal.mealName}
                  width={500}
                  height={200}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="font-bold text-lg mb-4 text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {meal.mealName}
                </h2>
                <button
                  className="mt-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  onClick={() => handleRemove(meal.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-orange-100 rounded-full p-6 mb-4">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            No favorites yet. Start adding delicious meals!
          </p>
          <p className="text-gray-500 mt-2">
            Browse recipes and click the heart icon to save your favorites
          </p>
        </div>
      )}
    </div>
  );
}
