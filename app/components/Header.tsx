import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-3xl font-bold" href="/">
           Kashvi Collection
        </Link>
        <nav>
          <Link className="mx-2" href="/wishlist">
            Wishlist
          </Link>
          <Link className="mx-2" href="/cart">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
