import React from 'react'
import { useState } from 'react';
import nextIcon from '../assets/nextIcon.svg'
import RangeSlider from './RangeSlider';

const Filters = ({ dressType, dressStyles, selectedDressStyle, setSelectedDressStyle, selectedDressType, setSelectedDressType, handleApplyFilter, minPrice, maxPrice, setMinPrice, setMaxPrice}) => {
    const colors = ["#00C12B", "#ba3b2d", "#382c93", "#eaed4d", "#c938c4", "#53eef4", "#d97e4e"];
    const sizes = ["Small-S", "Medium-M", "Large-L", "X-Large-XL", "2X-Large-2XL", "3X-Large-3XL"]; 
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);

    return (
        <div className='flex flex-col border-2 rounded-3xl p-6 gap-6'>
            <div className='text-lg font-bold'>Filters</div>
            <hr />
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    {
                        dressType.map((type, index) => (
                            <div className={`flex justify-between p-2 cursor-pointer ${selectedDressType === index ? 'border-2 rounded-xl' : ''}`} key={index} onClick={() => {
                                setSelectedDressType(index);
                            }}>
                                <p>{type}</p>
                                <img src={nextIcon} alt="" srcset="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                <div className='font-bold text-lg'>
                    Price
                </div>
                <RangeSlider 
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                <div className='font-bold text-lg'>
                    Colors
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    {
                        colors.map((color, index) => (
                            <button className={`rounded-full cursor-pointer ${selectedColor === index ? 'border-2 border-black w-12 h-12' : 'w-11 h-11'}`} style={{ backgroundColor: `${color}` }} key={index} onClick={() => { setSelectedColor(index) }}>
                            </button>
                        ))
                    }
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
                            <button className={`bg-[#F0F0F0] rounded-full  px-5 py-3 cursor-pointer ${selectedSize === index ? 'bg-black text-white' : ''}`} key={index} onClick={() => {
                                setSelectedSize(index)
                            }}>{size}</button>
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
                        {
                            dressStyles.map((style, index) => (
                                <div className={`flex justify-between p-2 cursor-pointer ${selectedDressStyle === index ? 'border-2 rounded-xl' : ''}`} key={index} onClick={() => {
                                    setSelectedDressStyle(index);
                                }}>
                                    <p>{style}</p>
                                    <img src={nextIcon} alt="" srcset="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <button className={`bg-[#F0F0F0] rounded-full  px-5 py-3 cursor-pointer`} onClick={handleApplyFilter}>Apply Filters</button>
        </div>
    )
}

export default Filters