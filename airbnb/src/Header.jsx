import './css/Header.css'
import { useEffect, useState, useRef } from 'react';
import logo_img from './assets/logo.png';
import widelogo_img from './assets/widelogo.png';
import profile_img from './assets/profile.png';
import Userlogin from './UserLogin';
import { Link } from 'react-router-dom';
import { useTheme } from './Theme';

export default function Header() {
    const { darkmode, toggleDarkmode } = useTheme();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [loginwindow, setLoginwindow] = useState(0);
    const dropdownRef = useRef(null);
    const loginwindowRef = useRef(null);




    const handleDropdown = () => setDropdown(!dropdown);
    const handleClickOutside = (event) => {
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
    }, [dropdown, loginwindow]);





    return (
        <div className={`header ${darkmode ? "dark" : ""}`}>
            <Link to={'/'}>
                <img src={widelogo_img} style={{ width: '150px' }} />
            </Link>
            <div className="search-bar">
                <input type="text" placeholder="Search your destination" />
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <img src={profile_img} onClick={handleDropdown} style={{ cursor: 'pointer' }} />
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
                    <p onClick={toggleDarkmode}>Dark mode</p>
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
