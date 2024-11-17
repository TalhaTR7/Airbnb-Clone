import { useState } from "react";
import { useTheme } from "./Theme";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Propertydetail from "./Propertydetail.jsx";
import Propertylist from "./Propertylist.jsx";
import Categories from "./Categories.jsx";
import properties from "./assets/property.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [city, setCity] = useState("");
    const { darkmode } = useTheme();

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleCity = (city) => {
        setCity(city);
        setSelectedCategory(null);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <body className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Categories selectedCategory={handleSelectedCategory} activeCategory={selectedCategory} />
                            <Propertylist selectedCategory={null} searchBarResult="" />
                            <Footer />
                        </body>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <body className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Categories selectedCategory={handleSelectedCategory} activeCategory={selectedCategory} />
                            <Propertylist selectedCategory={selectedCategory} searchBarResult={city} />
                            <Footer />
                        </body>
                    }
                />
                <Route
                    path="/category"
                    element={
                        <body className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Categories selectedCategory={handleSelectedCategory} activeCategory={selectedCategory} />
                            <Propertylist selectedCategory={selectedCategory} searchBarResult="" />
                            <Footer />
                        </body>
                    }
                />
                <Route
                    path="/property"
                    element={
                        <body className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Propertydetail properties={properties} searchBarResult="" />
                            <Footer />
                        </body>
                    }
                />
            </Routes>
        </Router>
    );
}