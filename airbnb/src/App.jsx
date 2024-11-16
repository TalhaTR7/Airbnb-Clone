import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Propertydetail from "./Propertydetail.jsx";
import Propertylist from "./PropertyList.jsx";
import Categories from "./Categories.jsx";
import properties from "./assets/property.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/"
                    element={
                        <>
                            <Header />
                            <Categories />
                            <Propertylist />
                            <Footer />
                        </>
                    }
                />
                <Route path="/category/:category"
                    element={
                        <>
                            <Header />
                            <Categories />
                            <Propertylist category="all" />
                            <Footer />
                        </>
                    }
                />
                <Route path='/property'
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