import React from 'react'
import fivestar from '../assets/fivestar.svg'
import verified from '../assets/verified.svg'

const Review = ({username, reviewDescription}) => {
    return (
        <div className='flex flex-col border-2 rounded-[20px] p-10 gap-4'>
            <div>
                <img src={fivestar} alt="" srcset="" />
            </div>
            <div className='flex font-bold text-xl gap-2 justify-start items-center'>
                <div>
                    {username}
                </div>
                <div>
                    <img src={verified} alt="" srcset="" />
                </div>
            </div>
            <p className='text-[#666666]'>
                {reviewDescription}
            </p>
        </div>
    )
}

export default Review