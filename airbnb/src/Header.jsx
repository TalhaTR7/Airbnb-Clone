import './css/Header.css'
import { useEffect, useState, useRef } from 'react';
import logo_img from './assets/logo.png';
import profile_img from './assets/profile.png';
import DatePicker from 'react-datepicker';
import Userlogin from './UserLogin';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0),
            [checkIn, setCheckIn] = useState(null),
            [checkOut, setCheckOut] = useState(null),
            [dropdown, setDropdown] = useState(false),
            [counter, setCounter] = useState(false),
            [loginwindow, setLoginwindow] = useState(0),
            [guestCount, setGuestCount] = useState(0),
            counterRef = useRef(null),
            dropdownRef = useRef(null),
            loginwindowRef = useRef(null)


    const handleCounter = () => setCounter(!counter);
    const handleDropdown = () => setDropdown(!dropdown);
    const handleClickOutside = (event) => {
        if (counterRef.current && !counterRef.current.contains(event.target)) 
            setCounter(false);
        if (dropdownRef.current && !dropdownRef.current.contains(event.target))
            setDropdown(false);
        if (loginwindowRef.current && !loginwindowRef.current.contains(event.target))
            setLoginwindow(0);
    };

    useEffect(() => {

        document.title = "Fakebnb | Vacation rentals, cabins, beach houses, & more";
        document.querySelector('link[rel="icon"]').href = logo_img;

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            const header = document.querySelector('.header');
            if (window.scrollY > 100) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [counter, dropdown, loginwindow]);


    const getPlaceholder = (label) => {
        if (scrollPosition > 100) return label;
        else {
            switch (label) {
                case "Where": return "Search destination";
                case "Check in": return "Set check in date";
                case "Check out": return "Set check out date";
                case "Who": return "Number of guests";
                default: return "";
            }
        }
    };

    function Counter() {
        const increment = () => setGuestCount(guestCount + 1);
        const decrement = () => setGuestCount(guestCount > 0 ? guestCount - 1 : 0);

        return (
            <div className="counter-popup" ref={counterRef}>
                <button onClick={decrement} className="counter-arrow">{"-"}</button>
                <input type="text" style={{textAlign:"center"}} value={guestCount} readOnly />
                <button onClick={increment} className="counter-arrow">{"+"}</button>
            </div>
        );
    }



    return (
        <div className="header">
            <img src={logo_img} />
            <div className="search-bar">
                <div className="search-section">
                    <label for="where">Where</label>
                    <input
                        type="text"
                        placeholder={getPlaceholder("Where")} />
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
                        dateFormat='MMM d, yyyy'
                        placeholderText={getPlaceholder("Check out")} />
                </div>
                <div className="search-section">
                    <label for="guests">Who</label>
                    <input 
                        type="text"
                        value={guestCount === 0 ? '' : `${guestCount} guests`}
                        placeholder={guestCount === 0 ? getPlaceholder("Who") : ''}
                        onClick={handleCounter} 
                        readOnly 
                    />
                    {counter && <Counter />}
                </div>
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <img src={profile_img} onClick={handleDropdown} style={{cursor:'pointer'}} />
                {dropdown && (
                    <div className="dropdown" ref={dropdownRef}>
                    <p onClick={() => {
                            setLoginwindow(1);
                            setDropdown(false);
                        }}>LogIn</p>
                        <p onClick={() => {
                            setLoginwindow(2);
                            setDropdown(false);
                        }}>Sign In</p>
                        <p>Help Center</p>
                    </div>
                )}
                { loginwindow !== 0 && (
                    <div ref={loginwindowRef} style={{position:'absolute'}}>
                        <Userlogin window={loginwindow} />
                    </div>
                )}
        </div>
    );
}