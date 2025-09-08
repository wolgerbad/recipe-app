'use client';

import { FaHeart } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export default function AddToFavorites({ mealName, id, image }) {
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
      JSON.stringify([...existingFavorites, { mealName, id, image }])
    );
    toast.success('Meal is successfully added to favorites!');
  }
  return (
    <span>
      <span
        onClick={handleAddToFavorites}
        className="flex items-center gap-1 cursor-pointer absolute top-2 right-2 bg-white p-1 rounded-md text-red-700 font-semibold"
      >
        <FaHeart className="text-white bg-red-500 p-1 text-2xl rounded-full inline" />
        <span>Add to favorites</span>
      </span>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
