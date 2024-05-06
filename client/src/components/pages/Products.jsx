import React from 'react'

import produc1 from '../../assets/products/product1.jpg'
import produc2 from '../../assets/products/product2.jpg'
import produc3 from '../../assets/products/product3.jpg'
import produc4 from '../../assets/products/product4.jpg'

const Products = () => {
    return (
        <>
            <h1 className='text-center font-black text-5xl py-16 text-slate-600'>Explore the products</h1>
            <div className='container-fluid flex justify-center'>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc1} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc2} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc3} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc4} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc3} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc2} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc1} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <img className='max-h-60 my-2 mx-2' src={produc4} alt="Products" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products