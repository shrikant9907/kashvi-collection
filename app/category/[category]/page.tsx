"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link'; 

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="min-h-screen bg-gray-100"> 
      <main className="mt-8 p-6">
        <section className="container mx-auto">
          <h1 className="text-3xl font-bold text-center capitalize">{category}</h1>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Link  className="block p-4 bg-white shadow rounded text-center" href={`/products/1`}>
              Product 1
            </Link>
            <Link className="block p-4 bg-white shadow rounded text-center" href={`/products/2`}>
              Product 2
            </Link> 
          </div>
        </section>
      </main> 
    </div>
  );
}

export default CategoryPage;
