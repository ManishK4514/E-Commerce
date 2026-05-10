import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Product, useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[100%]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{product.category}</p>
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 