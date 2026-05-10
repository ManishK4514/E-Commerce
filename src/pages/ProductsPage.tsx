import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { Product } from '../context/CartContext';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('default');

  useEffect(() => {
    // Filter products by category
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  }, [category]);

  // Handle sorting
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...filteredProducts];
    switch (option) {
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (by id)
        sorted.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredProducts(sorted);
  };

  // Capitalize the first letter of the category
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">{categoryTitle}'s Collection</h1>

      {/* Sorting and Filtering */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <p className="text-gray-600 mb-4 md:mb-0">
          Showing {filteredProducts.length} products
        </p>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">Name: A to Z</option>
            <option value="name-z-a">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 