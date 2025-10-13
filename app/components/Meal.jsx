import Link from 'next/link';
import AddToFavorites from './AddToFavorites';
import Image from 'next/image';

export default function Meal({ meal, categoryName }) {
  const { strMeal: mealName, idMeal: id, strMealThumb: image } = meal;

  return (
    <div className="relative">
      <Link
        href={`/categories/${categoryName.toLowerCase()}/${id}`}
        key={id}
        className="bg-white rounded-lg shadow-md  w-full h-48 overflow-hidden"
      >
        <Image src={image} alt={mealName} width={400} height={200} />
        {/* <img src={image} alt={mealName} className="w-full h-48 object-cover" /> */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{mealName}</h2>
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
