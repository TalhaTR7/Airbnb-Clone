
import "./css/Categories.css"
import { useEffect } from "react";

export default function Categories() {

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementsByClassName('container')[0];
            if (window.scrollY > 100) container.classList.add('scrolled');
            else container.classList.remove('scrolled');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            <div className="list-wrapper">
                <nav className="list">
                    <a>Beach</a>
                    <a>Countryside</a>
                    <a>Trending</a>
                    <a>Camping</a>
                    <a>Tropical</a>
                    <a>Pool</a>
                    <a>Single</a>
                    <a>Mansion</a>
                    <a>Cabin</a>
                    <a>Barns</a>
                    <a>Luxury</a>
                    <a>Urban</a>
                    <a>Lake</a>
                    <a>Farms</a>
                    <a>View</a>
                    <a>Mountain</a>
                    <a>Cabin</a>
                    <a>Barns</a>
                    <a>Luxury</a>
                    <a>Urban</a>
                    <a>Lake</a>
                    <a>Farms</a>
                    <a>View</a>
                </nav>
                <div className="fade-left"></div>
                <div className="fade-right"></div>
            </div>
        </div>
    );
}
