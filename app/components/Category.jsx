import Link from 'next/link';

export default function Category({ category }) {
  return (
    <Link
      href={`/categories/${category.strCategory.toLowerCase()}`}
      className="border rounded-lg overflow-hidden"
    >
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{category.strCategory}</h2>
        <p className="text-gray-600">
          {category.strCategoryDescription.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
}
