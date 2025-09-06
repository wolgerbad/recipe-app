'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { searchAction } from '../_lib/actions';
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
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 mb-20">
        <h1 className="tracking-widest text-5xl font-semibold text-gray-600">
          Welcome to Recipedia
        </h1>
        <p>Find your favorite recipes and learn how to make them!</p>
        <form action={handleSearch}>
          <input
            name="search"
            type="text"
            placeholder="Search for recipes..."
            className="bg-slate-300 p-2 rounded-md border-2 border-gray-400 hover:border-gray-600 focus:outline-none focus:border-gray-600 transition"
          />
        </form>
      </div>
    </div>
  );
}
