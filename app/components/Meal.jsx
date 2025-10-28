import Link from 'next/link';
import AddToFavorites from './AddToFavorites';
import Image from 'next/image';

export default function Meal({ meal, categoryName }) {
  const { strMeal: mealName, idMeal: id, strMealThumb: image } = meal;

  return (
    <div className="relative group hover:scale-105 transition-all duration-300">
      <Link
        href={`/categories/${categoryName.toLowerCase()}/${id}`}
        key={id}
        className="block bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-orange-100"
      >
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={mealName}
            width={400}
            height={200}
            className="w-full h-64 object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
            {mealName}
          </h2>
        </div>
      </Link>
      <AddToFavorites
        mealName={mealName}
        id={id}
        image={image}
        categoryName={categoryName}
      />
    </div>
  );
}
