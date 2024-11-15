import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Propertydetail from "./Propertydetail.jsx";

import properties from './assets/property.json';

export default function App() {

    const property = properties[83];
    
    return (
        <div>
            <Header />
            <Propertydetail property={property} />
            <Footer />
        </div>
    );
}