import React from "react";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";
import Review from "../../widget/Review";
import SuggestedProducts from "../../widget/SuggestedProducts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/product/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();

        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/product`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchAllProducts();
    }, [productId]);

    return (
        <>
            <Navbar />
            <ProductDetails
                images={product?.imageUrls || []}
                productTitle={product.name || ""}
                stars={product.rating || 0}
                productPrice={product.price || 0}
                productDescription={
                    product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
                }
                colors={["#800080", "#FF0000", "#0000FF", "#008000"]}
                sizes={["Small-S", "Medium-M", "Large-L", "Extra Large-XL"]}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <div className="grid grid-cols-2 gap-4 mx-[8%] py-10">
                {product.reviews?.map((review) => (
                    <Review username={review.name} reviewDescription={review.comment} />
                ))}
            </div>
            <div className='w-full'>
                <div className='flex justify-center '>
                    <div className='border-2 rounded-full  px-16 py-4'>
                        Load More Reviews
                    </div>
                </div>
            </div>
            <SuggestedProducts title={"You might also like"} products={products} />
            <NewsLetter />
            <Footer />
        </>
    );
};

export default Index;
