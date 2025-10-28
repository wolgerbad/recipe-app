import Search from './components/Search';
import { getMealsByCategory, getSearchedMeals } from './_lib/helpers';
import Meals from './components/Meals';
import SearchedMeals from './components/SearchedMeals';

export default async function Home({ searchParams }) {
  const query = searchParams.search;
  const meals = await getMealsByCategory('side');

  const searchedMeals = await getSearchedMeals(query);
  return (
    <div className="py-8">
      <Search />
      {query?.length > 2 ? (
        <SearchedMeals meals={searchedMeals} />
      ) : (
        <Meals meals={meals} categoryName={'side'} main={true} />
      )}
    </div>
  );
}
