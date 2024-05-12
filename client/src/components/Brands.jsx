import React from 'react'
import versace from "../assets/versace.svg";
import zara from "../assets/zara.svg";
import gucci from "../assets/gucci.svg";
import prada from "../assets/prada.svg";
import calvin from "../assets/calvin.svg";
import { Link } from 'react-router-dom';


const Brands = () => {
  return (
    <div className='bg-black flex justify-between px-[7%] py-10'>
      <Link to={'/brand/versace'}>
        <img src={versace} alt="" srcset="" />
      </Link>
      <Link to={'/brand/zara'}>
        <img src={zara} alt="" srcset="" />
      </Link>
      <Link to={'/brand/gucci'}>
        <img src={gucci} alt="" srcset="" />
      </Link>
      <Link to={'/brand/prada'}>
        <img src={prada} alt="" srcset="" />
      </Link>
      <Link to={'/brand/calvin'}>
        <img src={calvin} alt="" srcset="" />
      </Link>
    </div>
  )
}

export default Brands