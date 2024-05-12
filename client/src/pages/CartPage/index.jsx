import React from 'react'
import Navbar from '../../components/Navbar'
import NewsLetter from '../../components/NewsLetter'
import Footer from '../../components/Footer'
import CartProduct from '../../widget/CartProduct'
import Summary from '../../widget/Summary'

const Index = () => {
    const [quantity, setQuantity] = React.useState(1);
    return (
        <>
            <Navbar />
            <div className='flex flex-col mx-[8%] gap-4 my-8'>
                <h1 className='text-4xl font-bold'>YOUR CART</h1>
                <div className='flex gap-7'>
                    <div className='flex flex-col gap-4 w-4/5'>
                        <div className='flex flex-col border-2 p-6 rounded-3xl gap-5'>
                            <CartProduct title={"One Life Graphic T-shirt"} size={"Small"} color={"red"} price={200} quantity={quantity} setQuantity={setQuantity} />
                            <hr />
                            <CartProduct title={"One Life Graphic T-shirt"} size={"Small"} color={"red"} price={200} quantity={quantity} setQuantity={setQuantity} />
                        </div>
                    </div>
                    <div className='w-1/5'>
                        <Summary />
                    </div>
                </div>
            </div>

            <NewsLetter />
            <Footer />
        </>
    )
}

export default Index