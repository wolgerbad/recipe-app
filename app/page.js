import Image from 'next/image';
import Search from './components/Search';
import Categories from './components/Categories';
import { getMealsByCategory, getSearchedMeals } from './_lib/helpers';
import Meal from './components/Meal';
import Meals from './components/Meals';
import SearchedMeals from './components/SearchedMeals';

export default async function Home({ searchParams }) {
  const query = searchParams.search;
  const meals = await getMealsByCategory('side');

  const searchedMeals = await getSearchedMeals(query);
  console.log(searchedMeals);
  return (
    <div>
      <Search />
      {query?.length > 2 ? (
        <SearchedMeals meals={searchedMeals} />
      ) : (
        <Meals meals={meals} categoryName={'side'} main={true} />
      )}
    </div>
  );
}
