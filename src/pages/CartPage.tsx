import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleIncreaseQuantity = (productId: number) => {
    const item = items.find((item) => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    const item = items.find((item) => item.product.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4">Price</th>
                    <th className="text-right p-4">Total</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.product.id} className="border-t">
                      <td className="p-4">
                        <div className="flex items-center">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-gray-500 capitalize">
                              {item.product.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => handleDecreaseQuantity(item.product.id)}
                            className="text-gray-500 hover:text-blue-600 focus:outline-none"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="mx-3 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.product.id)}
                            className="text-gray-500 hover:text-blue-600 focus:outline-none"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        ${item.product.price.toFixed(2)}
                      </td>
                      <td className="p-4 text-right font-semibold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 focus:outline-none"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-6">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  className="btn btn-primary w-full text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 text-center block mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 