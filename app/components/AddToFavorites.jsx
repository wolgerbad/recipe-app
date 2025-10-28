'use client';

import { FaHeart } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export default function AddToFavorites({ mealName, id, image, categoryName }) {
  function handleAddToFavorites() {
    const existingFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = existingFavorites.some((meal) => meal.id === id);
    if (isAlreadyFavorite) {
      toast.error('Meal is already in favorites');
      return;
    }

    localStorage.setItem(
      'favorites',
      JSON.stringify([
        ...existingFavorites,
        { mealName, id, image, categoryName },
      ])
    );
    toast.success('Meal is successfully added to favorites!');
  }

  return (
    <span>
      <button
        onClick={handleAddToFavorites}
        className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-red-600 font-semibold hover:bg-white hover:scale-105 transition-all duration-200 group z-10"
      >
        <FaHeart className="text-xl group-hover:text-red-500 transition-colors" />
        <span className="hidden md:inline">Add to favorites</span>
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </span>
  );
}
