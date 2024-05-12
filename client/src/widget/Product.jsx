import React from 'react'
import productImg1 from "../assets/productImg1.svg";

const Product = ({title, price, thumbnail}) => {
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <img src={thumbnail || productImg1} alt="" srcset="" className='rounded-2xl h-[298px]' />
            </div>
            <div className='font-bold text-lg'>
                {title}
            </div>
            <div className='font-bold text-2xl'>
                {`$${price}`}
            </div>
        </div>
    )
}

export default Product