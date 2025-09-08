import { getMealById } from '@/app/_lib/helpers';
import MealDetails from '@/app/components/MealDetails';

export default async function mealPage({ params }) {
  const { mealId } = params;
  const mealDetails = await getMealById(mealId);
  console.log(mealDetails);
  return (
    <div>
      <MealDetails meal={mealDetails} />
    </div>
  );
}
