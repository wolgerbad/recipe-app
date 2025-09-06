import Image from 'next/image';
import Search from './components/Search';
import Categories from './components/Categories';
import { getMealsByCategory } from './_lib/helpers';
import Meal from './components/Meal';
import Meals from './components/Meals';

export default async function Home() {
  const meals = await getMealsByCategory('side');
  return (
    <div>
      <Search />
      <Meals meals={meals} categoryName={'side'} main={true} />
    </div>
  );
}
