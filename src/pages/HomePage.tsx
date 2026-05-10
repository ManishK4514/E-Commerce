import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const HomePage: React.FC = () => {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover the Latest Fashion Trends
              </h1>
              <p className="text-lg mb-8">
                Shop our collection of stylish clothing and accessories for men, women, and children.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products/men" className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
                  Shop Men
                </Link>
                <Link to="/products/women" className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
                  Shop Women
                </Link>
                <Link to="/products/children" className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
                  Shop Children
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Fashion Shopping"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products/men" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Category */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Men's Fashion"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Men</h3>
                <p className="text-gray-200 mb-4">Discover stylish clothing for men</p>
                <Link
                  to="/products/men"
                  className="btn btn-primary inline-block w-full text-center"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Women's Category */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Women's Fashion"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Women</h3>
                <p className="text-gray-200 mb-4">Explore trendy styles for women</p>
                <Link
                  to="/products/women"
                  className="btn btn-primary inline-block w-full text-center"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Children's Category */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Children's Fashion"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Children</h3>
                <p className="text-gray-200 mb-4">Adorable outfits for kids</p>
                <Link
                  to="/products/children"
                  className="btn btn-primary inline-block w-full text-center"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest fashion trends, new arrivals, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="btn bg-white text-blue-600 hover:bg-gray-100 px-6"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 