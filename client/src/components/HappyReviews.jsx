import React from 'react'
import fivestar from '../assets/fivestar.svg'
import verified from '../assets/verified.svg'

const HappyReviews = () => {
    return (
        <div className='mx-[8%] py-10'>
            <div className='flex justify-start items-center font-bold text-6xl mb-16'>
                OUR HAPPY CUSTOMERS
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col border-2 rounded-[20px] p-10 gap-4'>
                    <div>
                        <img src={fivestar} alt="" srcset="" />
                    </div>
                    <div className='flex font-bold text-xl gap-2 justify-start items-center'>
                        <div>
                            Sarah M.
                        </div>
                        <div>
                            <img src={verified} alt="" srcset="" />
                        </div>
                    </div>
                    <p className='text-[#666666]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>

                <div className='flex flex-col border-2 rounded-[20px] p-10 gap-4'>
                    <div>
                        <img src={fivestar} alt="" srcset="" />
                    </div>
                    <div className='flex font-bold text-xl gap-2 justify-start items-center'>
                        <div>
                            Alex K.
                        </div>
                        <div>
                            <img src={verified} alt="" srcset="" />
                        </div>
                    </div>
                    <p className='text-[#666666]'>
                        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                    </p>
                </div>

                <div className='flex flex-col border-2 rounded-[20px] p-10 gap-4'>
                    <div>
                        <img src={fivestar} alt="" srcset="" />
                    </div>
                    <div className='flex font-bold text-xl gap-2 justify-start items-center'>
                        <div>
                            James L.
                        </div>
                        <div>
                            <img src={verified} alt="" srcset="" />
                        </div>
                    </div>
                    <p className='text-[#666666]'>
                        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HappyReviews