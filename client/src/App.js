import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:productId" element={<ProductDescriptionPage />} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    <Route path="/brand/:brandName" element={<BrandPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
