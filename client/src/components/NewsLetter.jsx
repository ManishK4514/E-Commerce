import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const onHandleSubmit = () => {
        setEmail('');
        toast.success('Subscribed to Newsletter');
    }
    
    return (
        <div className='mx-[8%] my-11'>
            <ToastContainer />
            <div className='flex justify-between items-center bg-black rounded-[20px] p-11'>
                <div className='font-bold text-5xl text-white max-w-[50%]'>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div>
                        <input type="text" placeholder='Enter your email address' className='bg-white p-5 rounded-full w-[349px] h-[46px]' value={email} onChange={(e)=>(setEmail(e.target.value))} />
                    </div>
                    <div>
                        <button className='flex items-center justify-center font-bold text-sm bg-white p-4 rounded-full w-[349px] h-[46px]' onClick={onHandleSubmit}>Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter