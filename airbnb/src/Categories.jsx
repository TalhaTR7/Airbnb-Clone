
import "./css/Categories.css"
import { useEffect } from "react";

export default function Categories() {

    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            const container = document.getElementsByClassName('category-container')[0];
            clearTimeout(scrollTimeout);
            if (window.scrollY > 100) scrollTimeout = setTimeout(() => {container.classList.add('scrolled')}, 1000);
            else container.classList.remove('scrolled');
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);
    

    return (
        <div className="category-container">
            <div className="list-wrapper">
                <nav className="list">
                    <a>Luxury</a>
                    <a>Trending</a>
                    <a>Camping</a>
                    <a>Urban</a>
                    <a>Mountain</a>
                    <a>Hanoks</a>
                    <a>Beach</a>
                    <a>Single</a>
                    <a>Barn</a>
                    <a>Countryside</a>
                    <a>Tropical</a>
                    <a>Lake</a>
                    <a>View</a>
                    <a>Pool</a>
                    <a>Mansion</a>
                    <a>Farm</a>
                    <a>Cabin</a>
                </nav>
                <div className="fade-left"></div>
                <div className="fade-right"></div>
            </div>
        </div>
    );
}
