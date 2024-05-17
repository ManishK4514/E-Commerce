import React from 'react'
import productImg1 from "../assets/productImg1.svg";
import { Link } from 'react-router-dom';

const SuggestedProducts = ({ title, products }) => {
    return (
        <div className='flex flex-col mx-[8%] gap-16 my-12 '>
            <div className='flex justify-center items-center font-bold text-6xl'>
                {title.toUpperCase()}
            </div>

            <div className='grid grid-cols-4'>
                {
                    products.slice(0, 4).map((product, index) => (
                        <div key={index} className='flex flex-col gap-3 overflow-hidden'>
                            <Link to={`/product/${product._id}`}>
                                <div>
                                    <img src={product.imageUrls[0] || productImg1} alt="" srcset="" className='rounded-2xl h-[298px]' />
                                </div>
                                <div className='font-bold text-lg'>
                                    {product.name}
                                </div>
                                <div className='font-bold text-2xl'>
                                    {`$${product.price}`}
                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>

            <div className='w-full'>
                <div className='flex justify-center '>
                    <Link to={title === 'New Arrivals' ? '/new-arrivals' : title === 'Top Sellings' ? '/top-sellings' : '/suggested'}>
                        <div className='border-2 rounded-full  px-16 py-4'>
                            View All
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SuggestedProducts