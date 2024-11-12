import Header from "./Header.jsx";
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";
import Categories from "./Categories.jsx";

export default function App() {

    
    return (
        <div>
            <Header />
            <Categories />
            <Section heading="Home" />
            <Footer />
        </div>
    );
}