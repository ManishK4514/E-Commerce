import React from "react";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Product from "../../widget/Product";
import Filters from "../../widget/Filters";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Index = () => {
    const [products, setProducts] = useState([]);
    const url = window.location.pathname;
    const parts = url.split('/');
    const category = parts[parts.length - 1];

    useEffect(() => {
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
    }, []);

    return (
        <>
            <Navbar />
            <div className="mx-[8%] flex gap-8">
                <div className="w-1/4">
                    <Filters />
                </div>
                <div className="flex flex-col w-2/3 gap-4">
                    <div className="flex justify-start items-center text-3xl font-bold">
                        {category || 'Casual'}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            products.map((product) => (
                                <Link to={`/product/${product._id}`}>
                                    <Product key={product._id} title={product.name} price={product.price} thumbnail={product.imageUrls[0]} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <NewsLetter />
            <Footer />
        </>
    );
};

export default Index;
