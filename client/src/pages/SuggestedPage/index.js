import React from "react";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Product from "../../widget/Product";
import Filters from "../../widget/Filters";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../widget/Loader";

const Index = () => {
    const [products, setProducts] = useState([]);
    const [newArrivalProducts, setNewArrivalProducts] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryName } = useParams();
    const [category, setCategory] = useState(categoryName);

    const dressStyles = ["Casual", "Formal", "Party", "Gym"];
    const dressType = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
    const [selectedDressStyle, setSelectedDressStyle] = useState(null);
    const [selectedDressType, setSelectedDressType] = useState(null);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);

    const handleApplyFilter = () => {
        const fetchFilteredProducts = async () => {
            setIsLoading(true);
            window.scrollTo(0, 0);
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/api/product/get-products-by/filter`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            dressStyle:
                                selectedDressStyle !== null
                                    ? dressStyles[
                                          selectedDressStyle
                                      ].toLowerCase()
                                    : null,
                            dressType:
                                selectedDressType !== null
                                    ? dressType[selectedDressType].toLowerCase()
                                    : null,
                            minPrice,
                            maxPrice,
                        }),
                    }
                );
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchFilteredProducts();
        setIsLoading(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setCategory(categoryName);
    }, [categoryName]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchAllProducts = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/api/product`
                );
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchAllProducts();

        const fetchNewArrivalProducts = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/api/product/get-products-by/newarrivals`
                );
                const data = await response.json();
                setNewArrivalProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchNewArrivalProducts();

        const fetchTopSellingProducts = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/api/product/get-products-by/most-sell-count`
                );
                const data = await response.json();
                setTopSellingProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchTopSellingProducts();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <div className="mx-[8%] flex gap-8">
                        <div className="w-1/4">
                            <Filters
                                dressType={dressType}
                                dressStyles={dressStyles}
                                selectedDressStyle={selectedDressStyle}
                                setSelectedDressStyle={setSelectedDressStyle}
                                selectedDressType={selectedDressType}
                                setSelectedDressType={setSelectedDressType}
                                handleApplyFilter={handleApplyFilter}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                setMinPrice={setMinPrice}
                                setMaxPrice={setMaxPrice}
                            />
                        </div>
                        <div className="flex flex-col w-2/3 gap-4">
                            <div className="flex justify-start items-center text-3xl font-bold">
                                {category
                                    .split("-")
                                    .map(
                                        (word) =>
                                            word.charAt(0).toUpperCase() +
                                            word.slice(1)
                                    )
                                    .join(" ") || "Casual"}
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {category === "new-arrivals"
                                    ? newArrivalProducts.map((product) => (
                                          <Link to={`/product/${product._id}`}>
                                              <Product
                                                  key={product._id}
                                                  title={product.name}
                                                  price={product.price}
                                                  thumbnail={
                                                      product.imageUrls[0]
                                                  }
                                              />
                                          </Link>
                                      ))
                                    : category === "top-sellings"
                                    ? topSellingProducts.map((product) => (
                                          <Link to={`/product/${product._id}`}>
                                              <Product
                                                  key={product._id}
                                                  title={product.name}
                                                  price={product.price}
                                                  thumbnail={
                                                      product.imageUrls[0]
                                                  }
                                              />
                                          </Link>
                                      ))
                                    : products.map((product) => (
                                          <Link to={`/product/${product._id}`}>
                                              <Product
                                                  key={product._id}
                                                  title={product.name}
                                                  price={product.price}
                                                  thumbnail={
                                                      product.imageUrls[0]
                                                  }
                                              />
                                          </Link>
                                      ))}
                            </div>
                        </div>
                    </div>

                    <NewsLetter />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Index;
