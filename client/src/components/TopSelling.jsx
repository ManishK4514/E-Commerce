import React from 'react'
import productImg1 from "../assets/productImg1.svg";
import productImg2 from "../assets/productImg2.svg";
import productImg3 from "../assets/productImg3.svg";
import productImg4 from "../assets/productImg4.svg";
// import ReactStarsRating from 'react-awesome-stars-rating';

const TopSelling = () => {
    return (
        <div className='flex flex-col mx-[8%] gap-16 my-12 '>
            <div className='flex justify-center items-center font-bold text-6xl'>
                TOP SELLING
            </div>

            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={productImg1} alt="" srcset="" className='rounded-2xl' />
                    </div>
                    <div className='font-bold text-lg'>
                        T-SHIRT WITH TAPE DETAILS
                    </div>
                    {/* <ReactStarsRating value={4.5} className='font-bold text-2xl' /> */}
                    <div className='font-bold text-2xl'>
                        $120
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={productImg2} alt="" srcset="" className='rounded-2xl' />
                    </div>
                    <div className='font-bold text-lg'>
                        SKINNY FIT JEANS
                    </div>
                    {/* <div className='transform rotate-90'>
                        <ReactStarsRating value={3.5} />
                    </div> */}
                    <div className='font-bold text-2xl'>
                        $240
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={productImg3} alt="" srcset="" className='rounded-2xl' />
                    </div>
                    <div className='font-bold text-lg'>
                        CHECKERED SHIRT
                    </div>
                    {/* <div className='transform rotate-90'>
                        <ReactStarsRating value={4.5} />
                    </div> */}
                    <div className='font-bold text-2xl'>
                        $180
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={productImg4} alt="" srcset="" className='rounded-2xl' />
                    </div>
                    <div className='font-bold text-lg'>
                        SLEEVE STRIPED T-SHIRT
                    </div>
                    {/* <div style={{ display: 'flex' }}>
                        <ReactStarsRating value={2.8} style={{ display: 'flex' }} />
                    </div> */}

                    <div className='font-bold text-2xl'>
                        $130
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <div className='flex justify-center '>
                    <div className='border-2 rounded-full  px-16 py-4'>
                        View All
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling;