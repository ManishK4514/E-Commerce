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
import Loader from "../../widget/Loader";


const Index = () => {
    const [products, setProducts] = useState([]);
    const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/product`);
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchAllProducts();

        const fetchNewArrivalsProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/product/get-products-by/newarrivals`);
                const data = await response.json();
                setNewArrivalsProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchNewArrivalsProducts();

        const fetchTopSellingProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/product/get-products-by/most-sell-count`);
                const data = await response.json();
                setTopSellingProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchTopSellingProducts();
    }, []);

    return (
        <>
            {
                isLoading ? <Loader /> : (
                    <>
                        <Navbar />
                        <Landing />
                        <Brands />
                        <SuggestedProducts title={"New Arrivals"} products={newArrivalsProducts} />
                        <Divider />
                        <SuggestedProducts title={"Top Sellings"} products={topSellingProducts} />
                        <DressStyle />
                        <HappyReviews />
                        <NewsLetter />
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default Index;
