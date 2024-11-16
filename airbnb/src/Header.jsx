import './css/Header.css'
import { useEffect, useState, useRef } from 'react';
import logo_img from './assets/logo.png';
import profile_img from './assets/profile.png';
import Userlogin from './UserLogin';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';




export default function Header() {
        const [dropdown, setDropdown] = useState(false),
        [loginwindow, setLoginwindow] = useState(0),
        dropdownRef = useRef(null),
        loginwindowRef = useRef(null)


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
        <div className="header">
            <Link to={'/'}><img src={logo_img} /></Link>
            <Searchbar />
            <img src={profile_img} onClick={handleDropdown} style={{ cursor: 'pointer' }} />
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