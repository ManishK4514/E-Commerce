import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ShopStyle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/products/men" className="text-gray-700 hover:text-blue-600 transition-colors">
              Men
            </Link>
            <Link to="/products/women" className="text-gray-700 hover:text-blue-600 transition-colors">
              Women
            </Link>
            <Link to="/products/children" className="text-gray-700 hover:text-blue-600 transition-colors">
              Children
            </Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products/men"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Men
            </Link>
            <Link
              to="/products/women"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Women
            </Link>
            <Link
              to="/products/children"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Children
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 