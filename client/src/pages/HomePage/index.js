import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "../../components/Landing";
import Brands from "../../components/Brands";
import NewArraivals from "../../components/NewArraivals";
import TopSelling from "../../components/TopSelling";
import Divider from "../../components/Divider";
import DressStyle from "../../components/DressStyle";
import HappyReviews from "../../components/HappyReviews";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";


const index = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <Brands />
            <NewArraivals />
            <Divider />
            <TopSelling />
            <DressStyle />
            <HappyReviews />
            <NewsLetter />
            <Footer />
        </>
    );
};

export default index;
