"use client";

import { usePathname } from 'next/navigation';

const ProductPage = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();

  return (
    <div className="min-h-screen bg-gray-100"> 
      <main className="mt-8 p-6">
        <section className="container mx-auto">
          <div className="bg-white p-4 shadow rounded">
            <h1 className="text-3xl font-bold text-center">Product Details</h1>
            <h2 className="text-xl font-semibold">Product {id}</h2> 
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
