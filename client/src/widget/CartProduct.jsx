import React from 'react'
import productImg1 from "../assets/productImg1.svg";
import { RiDeleteBinLine } from "react-icons/ri";


const CartProduct = ({ key, thumbnail, productTitle, productPrice, color, size, quantity, setQuantity, handleDeleteItemFromCart, handleIncreaseQuatityByOne, handleDecreaseQuatityByOne }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
                <div>
                    <img src={thumbnail} alt="" srcset="" className='w-[125px] h-[147px] rounded-xl' />
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-bold'>{productTitle}</p>
                        <div className='flex gap-2'>
                            <p className='text-md'>Size:</p>
                            <p>{size}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-md'>Color:</p>
                            <div className={`w-6 h-6 rounded-full`} style={{ backgroundColor: `${color}` }}></div>
                        </div>
                    </div>
                    <div className='text-2xl font-bold'>
                        {`$${productPrice}`}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-3/5'>
                <div className='flex justify-end items-center text-2xl text-red-500 cursor-pointer' onClick={handleDeleteItemFromCart}>
                    <RiDeleteBinLine />
                </div>
                <div className='flex justify-end items-center'>
                    <div className="flex gap-7 bg-[#F0F0F0] rounded-full px-5 py-3 w-1/4 justify-center items-center">
                        <button className='text-4xl' onClick={handleDecreaseQuatityByOne}>−</button>
                        <span className='text-xl'>{quantity}</span>
                        <button className='text-4xl' onClick={handleIncreaseQuatityByOne}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct