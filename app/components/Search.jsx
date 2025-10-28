'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Search() {
  const urlParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch(formData) {
    const query = formData.get('search');
    const params = new URLSearchParams(urlParams);
    params.set('search', query);
    router.push(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 mb-16 pt-8">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold bg-orange-600 bg-clip-text text-transparent">
            Welcome to Recipedia
          </h1>
          <p className="text-lg text-gray-600">
            Discover amazing recipes around the world
          </p>
        </div>
        <form action={handleSearch} className="relative">
          <input
            name="search"
            type="text"
            placeholder="Search for recipes, ingredients, cuisines..."
            className="w-full px-6 py-4 text-lg bg-white rounded-2xl border-2 border-orange-200  hover:border-orange-300 focus:outline-none  focus:border-orange-300  placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-orange-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-200"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
