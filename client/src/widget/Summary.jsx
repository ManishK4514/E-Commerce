import React from 'react'
import { useEffect } from 'react';

const Summary = ({ subtotal }) => {
    const initPayment = (data) => {
        const options = {
            key: process.env.REACT_APP_RAZORPAY_ID_KEY,
            amount: data.amount,
            currency: data.currency,
            name: "E-Commerce",
            description: "Payment",
            image: "https://res.cloudinary.com/dvxwjcwcm/image/upload/v1715631914/rnulsfaqk16chr8d3721.png",
            order_id: data.id,
            handler: function (response) {
                fetch(`${process.env.REACT_APP_BASE_URL}/api/payment/verify`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        console.log("Payment Initiated: ", (subtotal + 50));
        const orderUrl = `${process.env.REACT_APP_BASE_URL}/api/payment/orders`;

        const data = {
            amount: ((subtotal + 50) * 100),
            currency: 'USD'
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(orderUrl, requestOptions);
            const responseData = await response.json();
            const { data } = responseData;
            console.log(data);
            if(data) initPayment(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;

        script.onload = () => {
            console.log('Razorpay script loaded');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='flex flex-col border-2 p-6 rounded-3xl gap-5'>
            <div className='flex justify-between gap-10 overflow-hidden'>
                <div>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <p>Total</p>
                </div>
                <div>
                    <p>${subtotal.toFixed(2)}</p>
                    <p>$50</p>
                    <p>${(subtotal + 50).toFixed(2)}</p>
                </div>
            </div>
            <div>
                <button className='bg-black text-white rounded-full px-5 py-3 w-full' onClick={handlePayment}>Proceed to Checkout</button>
            </div>
        </div>
    )

}


export default Summary