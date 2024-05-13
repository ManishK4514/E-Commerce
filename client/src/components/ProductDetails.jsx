import React from 'react'
import star from '../assets/star.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ images, productTitle, stars, productPrice, productDescription, colors, sizes, selectedColor, setSelectedColor, selectedImage, setSelectedImage, selectedSize, setSelectedSize, quantity, setQuantity }) => {

  const handleAddToCard = () => {
    toast.success('Item added to cart');
    console.log('Item added to cart');
    const cartItem = {
      images: images,
      productTitle: productTitle,
      stars: stars,
      productPrice: productPrice,
      productDescription: productDescription,
      color: colors[selectedColor],
      size: sizes[selectedSize],
      quantity: quantity
    };

    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    existingCartItems.push(cartItem);

    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  }

  return (
    <div className='flex mx-[8%]'>
      <ToastContainer />
      <div className='flex w-1/2 gap-5'>
        <div className='flex flex-col gap-4 '>
          {images.map((image, index) => (
            <img src={image} alt="" key={index} onClick={() => { setSelectedImage(index) }} className={`w-[152px] h-[167px] rounded-3xl ${selectedImage === index ? 'border-2 border-black' : ''}`} />
          ))}
        </div>

        <div>
          <img src={images[selectedImage]} alt="" srcset="" className='w-[444px] h-[530px]' />
        </div>

      </div>
      <div className='flex flex-col w-1/2 gap-4'>
        <p className='font-bold text-4xl'>{productTitle}</p>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <img src={star} alt="" srcset="" />
            <p>{`${stars}/5`}</p>
          </div>
          <div>
            <p className='font-bold text-3xl'>{`$${productPrice}`}</p>
          </div>
          <div>
            <p>{productDescription}</p>
          </div>
        </div>
        <hr />
        <div className='flex flex-col gap-2'>
          <p>Select Colors</p>
          <div className='flex gap-4'>
            {colors.map((color, index) => (
              <button className={`rounded-full ${selectedColor === index ? 'border-2 border-black' : ''}`} key={index} onClick={() => { setSelectedColor(index) }}>
                <div className={`w-6 h-6 rounded-full`} style={{ backgroundColor: `${color}` }}></div>
              </button>

            ))}
          </div>
        </div>
        <hr />
        <div className='flex flex-col gap-2'>
          <p>Select Size</p>
          <div className='flex gap-4'>
            {sizes.map((size, index) => (
              <button className={`bg-[#F0F0F0] rounded-full  px-5 py-3 ${selectedSize === index ? 'bg-black text-white' : ''}`} key={index} onClick={() => {
                setSelectedSize(index)
              }}>{size}</button>
            ))}
          </div>
        </div>
        <hr />
        <div className='flex justify-between'>
          <div className="flex gap-7 bg-[#F0F0F0] rounded-full px-5 w-1/4 justify-center items-center">
            <button className='text-4xl' onClick={() => { setQuantity(quantity - 1) }}>−</button>
            <span className='text-xl'>{quantity}</span>
            <button className='text-4xl' onClick={() => { setQuantity(quantity + 1) }}>+</button>
          </div>
          <div className='flex bg-black rounded-full text-white px-5 py-3 w-2/3 items-center justify-center cursor-pointer' onClick={handleAddToCard}>Add to Cart</div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails