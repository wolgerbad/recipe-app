import { getCategories } from '../_lib/helpers';
import Category from './Category';

export default async function Categories() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto">
      <h1 className="text-lg ml-4 uppercase tracking-wide">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {categories.map((category) => (
          <Category category={category} key={category.idCategory} />
        ))}
      </div>
    </div>
  );
}
