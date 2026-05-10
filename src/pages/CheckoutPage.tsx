import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'address',
      'city',
      'state',
      'zipCode',
      'country',
      'cardName',
      'cardNumber',
      'expiryDate',
      'cvv',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Card number validation (16 digits)
    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }

    // Expiry date validation (MM/YY format)
    if (formData.expiryDate && !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Please use MM/YY format';
    }

    // CVV validation (3 or 4 digits)
    if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call with timeout
      setTimeout(() => {
        // Clear cart and redirect to success page
        clearCart();
        navigate('/');
        alert('Order placed successfully! Thank you for your purchase.');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  // If cart is empty, redirect to home
  if (items.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-xl text-gray-600 mb-6">Your cart is empty.</p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            {/* Personal Information */}
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Shipping Address */}
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 mb-1">
                  State/Province *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700 mb-1">
                  ZIP/Postal Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.zipCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700 mb-1">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="md:col-span-2">
                <label htmlFor="cardName" className="block text-gray-700 mb-1">
                  Name on Card *
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cardName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.cardName && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="cardNumber" className="block text-gray-700 mb-1">
                  Card Number *
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                )}
              </div>
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 mb-1">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                )}
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 mb-1">
                  CVV *
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="XXX"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cvv ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary w-full ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            {/* Order Items */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Items ({items.length})</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-10 h-10 object-cover rounded mr-2"
                      />
                      <span className="text-sm">
                        {item.product.name} x {item.quantity}
                      </span>
                    </div>
                    <span className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Totals */}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 