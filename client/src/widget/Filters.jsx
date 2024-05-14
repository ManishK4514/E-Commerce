import React from 'react'
import { useState } from 'react';
import nextIcon from '../assets/nextIcon.svg'
import RangeSlider from './RangeSlider';

const Filters = () => {
    const sizes = ["Small-S", "Medium-M", "Large-L", "X-Large-XL", "2X-Large-2XL", "3X-Large-3XL"];
    const sliderValueChanged = (value) => {
        console.log(value);
    }

    return (
        <div className='flex flex-col border-2 rounded-3xl p-6 gap-6'>
            <div className='text-lg font-bold'>Filters</div>
            <hr />
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <p className='text-[#]'>T-shirts</p>
                        <img src={nextIcon} alt="" srcset="" />
                    </div>
                    <div className='flex justify-between'>
                        <p>Shorts</p>
                        <img src={nextIcon} alt="" srcset="" />
                    </div>
                    <div className='flex justify-between'>
                        <p>Shirts</p>
                        <img src={nextIcon} alt="" srcset="" />
                    </div>
                    <div className='flex justify-between'>
                        <p>Hoodie</p>
                        <img src={nextIcon} alt="" srcset="" />
                    </div>
                    <div className='flex justify-between'>
                        <p>Jeans</p>
                        <img src={nextIcon} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                <div className='font-bold text-lg'>
                    Price
                </div>
                <RangeSlider onChange={(value) => sliderValueChanged(value)}/>
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                <div className='font-bold text-lg'>
                    Colors
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#00C12B]'></button>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#ba3b2d]'></button>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#382c93]'></button>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#eaed4d]'></button>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#c938c4]'></button>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#53eef4]'></button>
                    <button className='rounded-full w-10 h-10 mr-2 bg-[#d97e4e]'></button>
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                <div className='font-bold text-lg'>
                    Sizes
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        sizes.map((size, index) => (
                            <button className='bg-[#F0F0F0] rounded-full  px-5 py-3' key={index}>{size}</button>
                        ))
                    }
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                <div className='font-bold text-lg'>
                    Dress Style
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <p className='text-[#]'>Casual</p>
                            <img src={nextIcon} alt="" srcset="" />
                        </div>
                        <div className='flex justify-between'>
                            <p>Formal</p>
                            <img src={nextIcon} alt="" srcset="" />
                        </div>
                        <div className='flex justify-between'>
                            <p>Party</p>
                            <img src={nextIcon} alt="" srcset="" />
                        </div>
                        <div className='flex justify-between'>
                            <p>Gym</p>
                            <img src={nextIcon} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters