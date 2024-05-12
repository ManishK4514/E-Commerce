import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "../../components/Landing";
import Brands from "../../components/Brands";
import NewArraivals from "../../components/NewArraivals";
import SuggestedProducts from "../../widget/SuggestedProducts";
import TopSelling from "../../components/TopSelling";
import Divider from "../../components/Divider";
import DressStyle from "../../components/DressStyle";
import HappyReviews from "../../components/HappyReviews";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";


const Index = () => {
    const [products, setProducts] = useState([]);

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
            <Landing />
            <Brands />
            <SuggestedProducts title={"New Arrivals"} products={products} />
            <Divider />
            <SuggestedProducts title={"Top Sellings"} products={products} />
            <DressStyle />
            <HappyReviews />
            <NewsLetter />
            <Footer />
        </>
    );
};

export default Index;
