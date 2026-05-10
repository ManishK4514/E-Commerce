import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the product type
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

// Define the cart item type
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the cart context type
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Create the cart provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        // If the product already exists in the cart, increase its quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product doesn't exist in the cart, add it with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setItems([]);
  };

  // Calculate the total price of all items in the cart
  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  // Calculate the total number of items in the cart
  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  // Provide the cart context value
  const contextValue: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}; 