import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Propertydetail from "./Propertydetail.jsx";
import Propertylist from "./Propertylist.jsx";
import Categories from "./Categories.jsx";
import properties from "./assets/property.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Categories selectedCategory={handleSelectedCategory} />
                            <Propertylist selectedCategory={selectedCategory} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/property"
                    element={
                        <>
                            <Header />
                            <Propertydetail properties={properties} />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}
