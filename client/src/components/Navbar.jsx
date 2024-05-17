import React from 'react'
import { BiCart } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between mx-[8%] my-4'>
            <div className='flex justify-center items-center text-3xl font-extrabold'>
                <Link to={'/'}>
                    SHOP.CO
                </Link>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex gap-x-[24px] text-lg'>
                    <Link to={'/shop'}>
                        <li>Shop</li>
                    </Link>
                    <Link to={'/sale'}>
                        <li>On Sale</li>
                    </Link>
                    <Link to={'/new-arrivals'}>
                        <li>New Arrivals</li>
                    </Link>
                    <Link to={'/brand/zara'}>
                        <li>Brands</li>
                    </Link>
                </ul>
            </div>
            <div className='flex justify-start items-center bg-[#f0f0f0] w-2/5 h-[48px] rounded-full px-6 gap-4'>
                <IoSearchOutline className='w-[24px] h-[24px] text-[#909090]' />
                <input type="text" placeholder='Search for products...' className='bg-transparent px-4 py-2 w-full' />
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <Link to={'/cart'}>
                    <BiCart className='w-[24px] h-[24px]' />
                </Link>
                <FaRegUserCircle className='w-[24px] h-[24px]' />
            </div>
        </nav>
    )
}

export default Navbar