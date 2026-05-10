import { Product } from '../context/CartContext';

// Mock product data
const products: Product[] = [
  // Men's Products
  {
    id: 1,
    name: 'Classic Fit Dress Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'A classic fit dress shirt made from premium cotton fabric. Perfect for formal occasions or business meetings.'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Stylish slim fit jeans that offer both comfort and durability. Made with premium denim that stretches for a perfect fit.'
  },
  {
    id: 3,
    name: 'Casual Blazer',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'A versatile casual blazer that can be dressed up or down. Perfect for semi-formal events or a night out.'
  },
  {
    id: 4,
    name: 'Athletic Sneakers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Comfortable athletic sneakers designed for both performance and style. Features cushioned insoles and durable outsoles.'
  },

  // Women's Products
  {
    id: 5,
    name: 'Floral Summer Dress',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'A beautiful floral summer dress made from lightweight fabric. Perfect for warm weather and casual outings.'
  },
  {
    id: 6,
    name: 'High-Waisted Leggings',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Comfortable high-waisted leggings that provide excellent support and flexibility. Perfect for workouts or casual wear.'
  },
  {
    id: 7,
    name: 'Elegant Blouse',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1604575396136-59a77c3f4112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'An elegant blouse with a flattering silhouette. Made from soft, breathable fabric for all-day comfort.'
  },
  {
    id: 8,
    name: 'Designer Handbag',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'A stylish designer handbag with multiple compartments for organization. Features high-quality materials and craftsmanship.'
  },

  // Children's Products
  {
    id: 9,
    name: 'Kids Graphic T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'children',
    description: 'A fun graphic t-shirt for kids made from soft, comfortable cotton. Features playful designs that children will love.'
  },
  {
    id: 10,
    name: 'Children\'s Denim Overalls',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'children',
    description: 'Adorable denim overalls for children that are both stylish and durable. Perfect for playtime and casual outings.'
  },
  {
    id: 11,
    name: 'Kids Sneakers',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'children',
    description: 'Comfortable and durable sneakers designed specifically for growing feet. Features easy-to-use closures and non-slip soles.'
  },
  {
    id: 12,
    name: 'Children\'s Winter Jacket',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'children',
    description: 'A warm and cozy winter jacket for children. Water-resistant and insulated to keep kids comfortable in cold weather.'
  },
];

export default products; 