import React from 'react'
import Navbar from '../../components/Navbar'
import NewsLetter from '../../components/NewsLetter'
import Footer from '../../components/Footer'
import CartProduct from '../../widget/CartProduct'
import Summary from '../../widget/Summary'
import { useState } from 'react'

const Index = () => {
    const [quantity, setQuantity] = useState(1);
    const [existingCartItems, setExistingCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []); 

    const calculateSubTotalPrice = existingCartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

    const handleDeleteItemFromCart = (index) => {
        const updatedCartItems = existingCartItems.filter((item, i) => i !== index);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setExistingCartItems(updatedCartItems);
    }

    const handleIncreaseQuatityByOne = (index) => {
        const updatedCartItems = existingCartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setExistingCartItems(updatedCartItems);
    }

    const handleDecreaseQuatityByOne = (index) => {
        const updatedCartItems = existingCartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setExistingCartItems(updatedCartItems);
    }


    return (
        <>
            <Navbar />
            <div className='flex flex-col mx-[8%] gap-4 my-8'>
                <h1 className='text-4xl font-bold'>YOUR CART</h1>
                <div className='flex gap-7'>
                    <div className='flex flex-col gap-4 w-4/5'>
                        <div className='flex flex-col border-2 p-6 rounded-3xl gap-5'>
                            {
                                existingCartItems.map((item, index) => (
                                    <>
                                        <CartProduct key={index} thumbnail={item.images[0]} productTitle={item.productTitle} productPrice={item.productPrice} color={item.color} size={item.size} quantity={item.quantity} setQuantity={setQuantity} handleDeleteItemFromCart={() => {
                                            handleDeleteItemFromCart(index);
                                        }} handleIncreaseQuatityByOne={()=>{
                                            handleIncreaseQuatityByOne(index);
                                        }}
                                        handleDecreaseQuatityByOne={()=>{
                                            handleDecreaseQuatityByOne(index);
                                        }}                                          
                                            
                                        />
                                        {index !== existingCartItems.length - 1 && <hr />}
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-1/5'>
                        <Summary subtotal={calculateSubTotalPrice} />
                    </div>
                </div>
            </div>

            <NewsLetter />
            <Footer />
        </>
    )
}

export default Index