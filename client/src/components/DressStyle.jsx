import React from 'react'
import style1 from '../assets/style1.svg'
import style2 from '../assets/style2.svg'
import style3 from '../assets/style3.svg'
import style4 from '../assets/style4.svg'

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
            <img src={style1} alt="" srcset="" className='rounded-[20px]' />
          </div>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Formal</div>
            <img src={style3} alt="" srcset="" className='rounded-[20px]' />
          </div>
        </div>
        <div className='flex gap-5 justify-between'>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Party</div>
            <img src={style2} alt="" srcset="" className='rounded-[20px]' />
          </div>
          <div className='relative'>
            <div className='absolute left-5 top-5 font-bold text-4xl'>Gym</div>
            <img src={style4} alt="" srcset="" className='rounded-[20px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DressStyle