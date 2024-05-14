import React from 'react'
import rectangle from "../assets/rectangleLanding.svg";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import line from "../assets/line.svg";
import starBig from "../assets/starBig.svg";
import starSmall from "../assets/starSmall.svg";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex bg-[#f2f0f1] items-end justify-end w-full relative h-screen" >
      <img src={rectangle} alt="" srcset=""/>
      <div className='absolute top-[20%] right-24'>
        <img src={starBig} alt="" />
      </div>
      <div className='absolute top-[35%] right-[40%]'>
        <img src={starSmall} alt="" />
      </div>
      <div className='absolute top-5 left-5'>
        <div className='mx-[15%] mt-[70px] text-7xl w-[600px] font-bold'>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div className='mx-[15%] mt-[40px] w-[600px] text-md'>
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </div>
        <div className='flex justify-start'>
          <div className='mx-[15%] mt-[27px] rounded-full bg-black text-white flex justify-center px-12 py-4'>
            <Link to={'/shop'}>
              Shop Now
            </Link>
          </div>
        </div>

        <div className='mx-[15%] mt-[50px] flex gap-11'>
          <div className='flex flex-col gap-2'>
            <p className='text-5xl font-semibold'>200+</p>
            <p>International Brands</p>
          </div>
          <img src={line} alt="" />
          <div className='flex flex-col gap-2'>
            <p className='text-5xl font-semibold'>2,000+</p>
            <p>High-Quality Products</p>
          </div>
          <img src={line} alt=""  />
          <div className='flex flex-col gap-2'>
            <p className='text-5xl font-semibold'>30,000+</p>
            <p>Happy Customers</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Landing;