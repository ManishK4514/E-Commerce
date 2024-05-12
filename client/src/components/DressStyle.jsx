import React from 'react'
import style1 from '../assets/style1.svg'
import style2 from '../assets/style2.svg'
import style3 from '../assets/style3.svg'
import style4 from '../assets/style4.svg'
import { Link } from 'react-router-dom'

const DressStyle = () => {
  return (
    <div className='mx-[8%] bg-[#F0F0F0] py-16 rounded-3xl px-16 my-16'>
      <div className='flex justify-center items-center font-bold text-6xl mb-16'>
        BROWSE BY DRESS STYLE
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-5 justify-between'>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Casual</div>
            <Link to={'/category/casual'}>
              <img src={style1} alt="" srcset="" className='rounded-[20px]' />
            </Link>
          </div>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Formal</div>
            <Link to={'/category/formal'}>
              <img src={style3} alt="" srcset="" className='rounded-[20px]' />
            </Link>
          </div>
        </div>
        <div className='flex gap-5 justify-between'>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Party</div>
            <Link to={'/category/party'}>
              <img src={style2} alt="" srcset="" className='rounded-[20px]' />
            </Link>
          </div>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Gym</div>
            <Link to={'/category/gym'}>
              <img src={style4} alt="" srcset="" className='rounded-[20px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DressStyle