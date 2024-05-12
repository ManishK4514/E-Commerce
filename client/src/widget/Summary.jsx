import React from 'react'

const Summary = () => {
    return (
        <div className='flex flex-col border-2 p-6 rounded-3xl gap-5'>
            <div className='flex justify-between gap-10'>
                <div>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <p>Total</p>
                </div>
                <div>
                    <p>$200</p>
                    <p>$50</p>
                    <p>$250</p>
                </div>
            </div>
            <div>
                <button className='bg-black text-white rounded-full px-5 py-3 w-full'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Summary