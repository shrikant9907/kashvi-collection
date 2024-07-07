import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-950">
    
      <main className="mt-8 p-6">
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            <Link className="block p-4 bg-white shadow rounded text-center" href="/category/gifts">
              Gifts
            </Link>
            <Link className="block p-4 bg-white shadow rounded text-center" href="/category/toys">
              Toys
            </Link>
            <Link className="block p-4 bg-white shadow rounded text-center" href="/category/stationary">
              Stationary
            </Link>
          </div>
        </section>
      </main>
       
    </div>
  );
}

export default Home;
