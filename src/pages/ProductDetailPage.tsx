import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import products from '../data/products';
import { Product, useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Find the product by id
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct || null);

      // Find related products (same category, excluding current product)
      if (foundProduct) {
        const related = products
          .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (product) {
      // Add the product to cart multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      // Navigate to cart page
      navigate('/cart');
    }
  };

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-xl text-gray-600">Product not found.</p>
        <Link to="/" className="btn btn-primary mt-4">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      {/* Back Button */}
      <Link
        to={`/products/${product.category}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </Link>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-4 capitalize">{product.category}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-gray-700">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage; 