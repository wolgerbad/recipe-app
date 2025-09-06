import { getMealsByCategory } from '@/app/_lib/helpers';
import Meals from '@/app/components/Meals';

export default async function CategoryPage(params) {
  const categoryName = params.params.categoryName;
  const upperCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  const meals = await getMealsByCategory(upperCategoryName);
  console.log(meals);
  return (
    <div>
      <Meals meals={meals} categoryName={upperCategoryName} />
    </div>
  );
}
