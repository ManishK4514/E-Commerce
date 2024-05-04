import React from 'react'
import { BiCart } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    //  mx-24 my-4 -> nav
    return (
        <nav className='flex flex-row justify-between'> 
            <div className='flex justify-center items-center text-3xl font-extrabold'>
                SHOP.CO
            </div>
            {/* <div className='flex justify-center items-center'>
                <ul className='flex gap-x-[24px] text-lg'>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </div> */}
            {/* <div className='flex justify-start items-center bg-[#f0f0f0] w-2/5 h-[48px] rounded-full px-6 gap-4'>
                <IoSearchOutline className='w-[24px] h-[24px] text-[#909090]' />
                <input type="text" placeholder='Search for products...' className='bg-transparent px-4 py-2 w-full' />
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <BiCart className='w-[24px] h-[24px]' />
                <FaRegUserCircle className='w-[24px] h-[24px]' />
            </div> */}
        </nav>
    )
}

export default Navbar