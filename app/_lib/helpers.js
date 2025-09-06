export async function getCategories() {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return data.categories;
}

export async function searchMeals(query) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to search meals');
  }
  return data.meals;
}
export async function getMealsByCategory(categoryName) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch meals by category');
  }
  return data.meals;
}

export async function getMealById(id) {
  const res = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  if (!res.ok) throw new Error('Failed to get meal by id');

  return data.meals;
}
