import React from 'react'
import versace from "../assets/versace.svg";
import zara from "../assets/zara.svg";
import gucci from "../assets/gucci.svg";
import prada from "../assets/prada.svg";
import calvin from "../assets/calvin.svg";


const Brands = () => {
  return (
    <div className='bg-black flex justify-between px-[7%] py-10'>
      <img src={versace} alt="" srcset="" />
        <img src={zara} alt="" srcset="" />
        <img src={gucci} alt="" srcset="" />
        <img src={prada} alt="" srcset="" />
        <img src={calvin} alt="" srcset="" />
    </div>
  )
}

export default Brands