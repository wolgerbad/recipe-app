import Image from 'next/image';
import Link from 'next/link';

export default function Category({ category }) {
  return (
    <Link
      href={`/categories/${category.strCategory.toLowerCase()}`}
      className="group bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-orange-100"
    >
      <div className="relative overflow-hidden">
        <Image
          src={category.strCategoryThumb}
          alt={category.strCategory}
          width={500}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-200">
          {category.strCategory}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {category.strCategoryDescription.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
}
