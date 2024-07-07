import { useState } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search logic
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mt-8 p-6">
        <section className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Search</h1>
          <div className="flex justify-center mt-4">
            <input
              type="text"
              className="border p-2 w-full max-w-md"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 ml-2"
            >
              Search
            </button>
          </div>
          {/* Render search results */}
        </section>
      </main> 
    </div>
  );
};

export default SearchPage;
