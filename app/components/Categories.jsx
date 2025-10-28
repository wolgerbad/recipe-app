import { getCategories } from '../_lib/helpers';
import Category from './Category';

export default async function Categories() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3">
          Recipe Categories
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our delicious collection
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Category category={category} key={category.idCategory} />
        ))}
      </div>
    </div>
  );
}
