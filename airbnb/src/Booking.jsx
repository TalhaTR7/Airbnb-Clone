
import "./css/Booking.css";
import allproperties from './assets/property.json'
import widelogo from "./assets/widelogo.png";
import widelogo_dark from "./assets/dark/widelogo-dark.png";
import React, { useEffect, useState } from "react";
import { useTheme } from "./Theme";
import { useLocation, Link } from 'react-router-dom';


export default function Booking() {

    const { darkmode } = useTheme();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const fakeID = searchParams.get('fakeid');

    const property = allproperties.find(p => p.fakeid == fakeID);


    useEffect(() => window.scrollTo(0, 0), [fakeID]);




    const [guests, setGuests] = useState(1);
    const month = property?.vacancy?.split(' ')[0] || "";

    const checkinDate = property?.vacancy
        ? parseInt(property.vacancy.split(' ')[1].split('-')[0], 10)
        : null;
    const checkoutDate = property?.vacancy
        ? parseInt(property.vacancy.split(' ')[1].split('-')[1], 10)
        : null;

    const [checkin, setCheckin] = useState(checkinDate);
    const [checkout, setCheckout] = useState(checkoutDate);

    const nights = (checkout - checkin) + 1;


    const [cardnumber, setcardnumber] = useState("");
    const [expirydate, setexpirydate] = useState("");
    const [cvv, setcvv] = useState("");

    /*

    const handlecardnumber = (value) => {
        const regex = '^\d{16}$';
        setValid(regex.test(value));
    }

    const handleexpirydate = (value) => {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        regex.test(value) ? setValid(true) : setValid(false);
    };

    const handlecvv = (value) => {
        const regex = /^\d{3}$/;
        regex.test(value) ? setValid(true) : setValid(false);
    };

    const handleCardValidation = () => {
        isValid
        ? {
            alert("Place booked!");
            return true;
        }
        : {
            alert("Kindly fill out your card details");
            return false;
        }
    };*/

    const handleCardValidation = false;






    function LeftSection() {

        const increaseCheckin = () => {
            setCheckin((prev) => {
                if (prev + 1 <= checkout)
                    return prev + 1;
                return prev;
            });
        };
        const decreaseCheckin = () => {
            setCheckin((prev) => {
                if (prev - 1 >= checkinDate)
                    return prev - 1;
                return prev;
            });
        };

        const increaseCheckout = () => {
            setCheckout((prev) => {
                if (prev + 1 <= checkoutDate)
                    return prev + 1;
                return prev;
            });
        };
        const decreaseCheckout = () => {
            setCheckout((prev) => {
                if (prev - 1 >= checkin)
                    return prev - 1;
                return prev;
            });
        };


        const increaseGuests = () => { setGuests(guests + 1); }
        const decreaseGuests = () => { guests > 1 ? setGuests(guests - 1) : null; }

        function RareSection() {
            return (
                <div className="rare-find">
                    <div>
                        <h1>Rare find</h1>
                        <span>{property.host}'s place is usually booked</span>
                    </div>
                    <i className="fa-regular fa-gem" />
                </div>
            )
        }

        function VisitSection() {
            return (
                <section className="visit-info">
                    <h1>Your visit</h1>
                    <div>
                        <div className="left">
                            <span style={{ font: '20px Arial' }}>Check-in</span>
                            <p style={{ font: '18px Arial' }}>Please select your check-in date</p>
                        </div>
                        <div className="right">
                            <i onClick={decreaseCheckin} className="fa-solid fa-arrow-left" />
                            <h1 style={{ font: '30px Arial' }}>{month} {checkin}</h1>
                            <i onClick={increaseCheckin} className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <span style={{ font: '20px Arial' }}>Check-out</span>
                            <p style={{ font: '18px Arial' }}>Please select your check-out date</p>
                        </div>
                        <div className="right">
                            <i onClick={decreaseCheckout} className="fa-solid fa-arrow-left" />
                            <h1 style={{ font: '30px Arial' }}>{month} {checkout}</h1>
                            <i onClick={increaseCheckout} className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <span style={{ font: '20px Arial' }}>Guests</span>
                            <p style={{ font: '18px Arial' }}>Please select number of guests</p>
                        </div>
                        <div className="right">
                            <i onClick={decreaseGuests} className="fa-solid fa-arrow-left" />
                            <h1 style={{ font: '30px Arial' }}>{guests}</h1>
                            <i onClick={increaseGuests} className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </section>
            )
        }

        function PaymentSection() {
            return (
                <section className="payment-info">
                <div className="upper-part">
                    <h1>Payment method</h1>
                    <div className="banks">
                        <i className="fa-brands fa-google-pay" />
                        <i className="fa-brands fa-paypal" />
                        <i className="fa-brands fa-cc-visa" />
                        <i className="fa-brands fa-bitcoin" />
                        <i className="fa-brands fa-amazon-pay" />
                    </div>
                </div>
                <div className="card-info">
                    <input
                        type="text"
                        className="card-number"
                        placeholder="Card number"
                        value={cardnumber}
                        onChange={(e) => setcardnumber(e.target.value)} />
                    <div className="card-details">
                        <input
                            type="text"
                            className="exp-date"
                            placeholder="Expiration date"
                            value={expirydate}
                            onChange={(e) => setexpirydate(e.target.value)} />
                        <input
                            type="text"
                            className="cvv"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setcvv(e.target.value)} />
                    </div>
                </div>
            </section>
            )
        }


        return (
            <section className={`left-section ${darkmode ? "dark" : ""}`}>
                <RareSection />
                <VisitSection />
                <PaymentSection />
                <section className="cancellation">
                    <h1>Cancellation policy</h1>
                    <p>Cancel 3 days before reservation for a partial refund. After that, this reservation is non-refundable.</p>
                </section>
                <section className="ground-rules">
                    <h1>Ground rules</h1>
                    <p style={{ marginTop: '10px' }} className="foreplay">We ask every guest to remember a few things about what makes a great guest.</p>
                    <li style={{ marginTop: '20px', textDecoration: '' }}>Follow the house rules</li>
                    <li style={{ marginTop: '10px' }}>Treat your Host's home like your own</li>
                </section>
                <section className="checkout">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus ultrices purus, a pretium dui dapibus ut. Duis pretium eu nibh accumsan dictum. Sed rhoncus malesuada blandit. Maecenas elementum neque vitae facilisis molestie.</p>
                    <Link to={
                        handleCardValidation
                            ? `/property?fakeid=${property.fakeid}`
                            : `/booking?fakeid=${property.fakeid}`}>
                        <button>Confirm and pay</button>
                    </Link>
                </section>
            </section>
        )
    }

















    function RightSection() {

        const float = (number) => parseFloat(number).toFixed(2);

        return (
            <section className={`right-section ${darkmode ? "dark" : ""}`}>
                <img src={new URL('https://a0.muscache.com/im/pictures/hosting/Hosting-1201729819587933418/original/51d2b06a-b1c0-40a3-9df5-e598f5908786.jpeg?im_w=1200')} />
                <div className="name">
                    <h1>{property.address}, {property.city}</h1>
                    <span>{property.description}</span>
                </div>
                <div className="pricing">
                    <h1>Pricing</h1>
                    <div className="price">
                        <span>${float(property.rent)} x {nights} {nights === 1 ? "night" : "nights"}</span>
                        <span>${float(property.rent * nights)}</span>
                    </div>
                    <div className="price">
                        <span>Cleaning fee</span>
                        <span>${float(50)}</span>
                    </div>
                    <div className="price">
                        <span>Fakebnb service fee</span>
                        <span>${float((property.rent * nights) * 15 / 100)}</span>
                    </div>
                    <div className="total price">
                        <span>Total</span>
                        <span>${float((property.rent * nights) + 50 + (property.rent * nights) * 15 / 100)}</span>
                    </div>
                </div>
            </section>
        )
    }








    if (!property) return <p>loading...</p>





    return (
        <div className={darkmode ? "dark" : ""}>
            <header className={darkmode ? "dark" : ""}>
                <Link to={'/'}><img src={darkmode ? widelogo_dark : widelogo} /></Link>
            </header>
            <div className={`absolute ${darkmode ? "dark" : ""}`}>
                <Link to={`/property?fakeid=${property.fakeid}`} className="a">
                    <i className="fa-solid fa-arrow-left" />
                </Link>
                <h1>Confirm and pay</h1>
            </div>
            <div className="main-container">
                <LeftSection />
                <RightSection />
            </div>
            <footer className={darkmode ? "dark" : ""}>
                <p style={{ cursor: 'auto' }}>© 2024 Fakebnb, Inc.</p>
                <span>·</span>
                <p>No Privacy</p>
                <span>·</span>
                <p>No Policy</p>
                <span>·</span>
                <p>No Terms & Conditions</p>
                <div className='socials'>
                    <h4 style={{ margin: '0 20px' }}>English (US)</h4>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </footer>
        </div>
    )
}