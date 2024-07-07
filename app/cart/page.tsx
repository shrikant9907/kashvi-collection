import Link from 'next/link';
 
const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mt-8 p-6">
        <section className="container mx-auto">
          <div className="bg-white p-4 shadow rounded">
            <h1 className="text-3xl font-bold text-center">Cart</h1>
            {/* Render cart items */}
            <div className="mt-4">
              <Link className="bg-blue-500 text-white p-2 rounded" href="/checkout">
                 Proceed to Checkout
              </Link>
            </div>
          </div>
        </section>
      </main> 
    </div>
  );
};

export default CartPage;
