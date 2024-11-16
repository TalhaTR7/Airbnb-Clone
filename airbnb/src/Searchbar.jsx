
import { useState, useEffect, useRef } from "react";
import "./css/Header.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function Searchbar() {

    const [scrollPosition, setScrollPosition] = useState(0),
        [checkIn, setCheckIn] = useState(null),
        [checkOut, setCheckOut] = useState(null),
        [guestCount, setGuestCount] = useState(0),
        [counter, setCounter] = useState(false),
        counterRef = useRef(null);


    const handleCounter = () => setCounter(!counter);
    const handleClickOutside = (event) => {
        if (counterRef.current && !counterRef.current.contains(event.target))
            setCounter(false);
    }


    useEffect(() => {
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
    }, [counter]);



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
                <input type="text" style={{ textAlign: "center" }} value={guestCount} readOnly />
                <button onClick={increment} className="counter-arrow">{"+"}</button>
            </div>
        );
    };



    function handleFormSubmit() {
        //  default values
        //      where: null
        //      check-in: null
        //      check-out: null
        //      ignore guests
    }



    return (
        <form className="search-bar">
            <div className="search-section">
                <label htmlFor="where">Where</label>
                <input
                    type="text"
                    placeholder={getPlaceholder("Where")} />
            </div>
            <div className="search-section">
                <label htmlFor="check-in">Check in</label>
                <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    calendarClassName="datepicker"
                    dateFormat='MMM d, yyyy'
                    placeholderText={getPlaceholder("Check in")} />
            </div>
            <div className="search-section">
                <label htmlFor="check-out">Check out</label>
                <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    calendarClassName="datepicker"
                    dateFormat='MMM d, yyyy'
                    placeholderText={getPlaceholder("Check out")} />
            </div>
            <div className="search-section">
                <label htmlFor="guests">Who</label>
                <input
                    type="text"
                    value={guestCount === 0 ? '' : `${guestCount} guests`}
                    placeholder={guestCount === 0 ? getPlaceholder("Who") : ''}
                    onClick={handleCounter}
                    readOnly />
                {counter && <Counter />}
            </div>
            <button className="search-button" onClick={handleFormSubmit()}>
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
}