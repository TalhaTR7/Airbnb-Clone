import './css/Header.css'
import { useEffect, useState, useRef } from 'react';
import logo_img from './assets/logo.png';
import widelogo_img from './assets/widelogo.png';
import profile_img from './assets/profile.png';
import widelogo_img_dark from './assets/dark/widelogo-dark.png';
import profile_img_dark from './assets/dark/profile-dark.png';
import Userlogin from './Userlogin';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './Theme';

export default function Header({ searchBarResult }) {
    const { darkmode, toggleDarkmode } = useTheme();
    const [unknown, setScrollPosition] = useState(0);
    const [city, setCity] = useState("");
    const [dropdown, setDropdown] = useState(false);
    const [loginwindow, setLoginwindow] = useState(0);
    const dropdownRef = useRef(null);
    const loginwindowRef = useRef(null);
    const navigate = useNavigate();


    const handleDropdown = () => setDropdown(!dropdown);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target))
            setDropdown(false);
        if (loginwindowRef.current && !loginwindowRef.current.contains(event.target))
            setLoginwindow(0);
    };
    const handleSearchBar = (e) => {
        e.preventDefault();
        searchBarResult(city);
        navigate(`/search?city=${city}`);
    }




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
    }, [dropdown, loginwindow]);





    return (
        <div className={`header ${darkmode ? "dark" : ""}`}>
            <Link to={'/'}>
                <img src={!darkmode ? widelogo_img : widelogo_img_dark} style={{ width: '150px' }} />
            </Link>
            <form className="search-bar" onSubmit={handleSearchBar}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search your destination" />
                <button type='submit'>
                    <i className="fa fa-search"></i>
                </button>
            </form>
            <img src={!darkmode ? profile_img : profile_img_dark} onClick={handleDropdown} style={{ cursor: 'pointer' }} />
            {dropdown && (
                <div className={`dropdown ${darkmode ? "dark" : ""}`} ref={dropdownRef}>
                    <p onClick={() => {
                        setLoginwindow(1);
                        setDropdown(false);
                    }}>LogIn</p>
                    <p onClick={() => {
                        setLoginwindow(2);
                        setDropdown(false);
                    }}>Sign In</p>
                    <p onClick={toggleDarkmode} className={darkmode ? "darkmode-button" : ""}>Dark mode</p>
                    <p onClick={() => {
                        alert("On the way...");
                        setDropdown(false);
                    }}>Help Center</p>
                </div>
            )}
            {loginwindow !== 0 && (
                <div ref={loginwindowRef} style={{ position: 'absolute' }}>
                    <Userlogin window={loginwindow} />
                </div>
            )}
        </div>
    );
}
