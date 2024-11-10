import './css/Header.css'
import { useEffect, useState } from 'react';
import logo_img from './assets/logo.png';
import profile_img from './assets/profile.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Counter({ onClose, initialCount = 1 }) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return (
        <div className="counter-popup">
            <button onClick={decrement} className="counter-arrow">{"<"}</button>
            <input type="text" value={count} readOnly />
            <button onClick={increment} className="counter-arrow">{">"}</button>
            <button onClick={onClose} className="close-counter">Close</button>
        </div>
    );
}

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [counter, setCounter] = useState(false);

    const handleCounter = () => setCounter(!counter);
    const handleDropdown = () => setDropdown(!dropdown);

    useEffect(() => {

        document.title = "Fakebnb | Vacation rentals, cabins, beach houses, & more";
        const link = document.querySelector('link[rel="icon"]');
        link.href = logo_img;

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            const header = document.querySelector('.header');

            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }    
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getPlaceholder = (label) => {
        if (scrollPosition > 100) {
            return label;
        } else {
            switch (label) {
                case "Where":
                    return "Search destination";
                case "Check in":
                    return "Set check in date";
                case "Check out":
                    return "Set check out date";
                case "Who":
                    return "Number of guests";
                default:
                    return "";
            }
        }
    };

    return (
        <div className="header">
            <img src={logo_img} />
            <div className="search-bar">
                <div className="search-section">
                    <label for="where">Where</label>
                    <input type="text" placeholder={getPlaceholder("Where")} />
                </div>
                <div className="search-section">
                    <label for="check-in">Check in</label>
                    <DatePicker
                        selected={checkIn}
                        onChange={(date) => setCheckIn(date)}
                        calendarClassName="datepicker"
                        dateFormat='MMM d, yyyy'
                        placeholderText={getPlaceholder("Check in")} />
                </div>
                <div className="search-section">
                    <label for="check-out">Check out</label>
                    <DatePicker
                        selected={checkOut}
                        onChange={(date) => setCheckOut(date)}
                        calendarClassName="datepicker"
                        className="custom-datepicker-input"
                        dateFormat='MMM d, yyyy'
                        placeholderText={getPlaceholder("Check out")}
                        style />
                </div>
                <div className="search-section">
                    <label for="guests">Who</label>
                    <input type="text" placeholder={getPlaceholder("Who")} onClick={handleCounter} readOnly />
                        {counter && <Counter onClose={handleCounter} />}
                </div>
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <img src={profile_img} onClick={handleDropdown} style={{cursor:'pointer'}} />
                {dropdown && (
                    <div className="dropdown">
                        <p>Sign In</p>
                        <p>Login</p>
                        <p>Help Center</p>
                    </div>
                )}
        </div>
    );
}