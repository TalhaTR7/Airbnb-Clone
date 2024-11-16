import "./css/Propertydetail.css"
import propertyImg_1 from "./assets/property-img-1.png"
import propertyImg_2 from "./assets/property-img-2.png"
import propertyImg_3 from "./assets/property-img-3.png"
import trending_status from "./assets/status-trending.png"
import hot_status from "./assets/status-hot.png"
import favourite_status from "./assets/status-favourite.png"
import host_img from "./assets/host-img.png"
import customer_img from "./assets/profile.png"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function Propertydetail( {properties} ) {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const fakeID = searchParams.get('fakeid');
    const property = properties.find(p => p.fakeid === fakeID);


    const statusImages = {
        Trending: trending_status,
        Hot: hot_status,
        Favourite: favourite_status,
    };

    const float = (number) => parseFloat(number).toFixed(1);

    useEffect(() => {window.scrollTo(0, 0)}, []);

    return (
        <div>
            <div className="image-grid">
                <img src={propertyImg_1} />
                <img src={propertyImg_2} />
                <img src={propertyImg_3} />
            </div>
            <section className="section-1">
                <div className="left">
                    <h1>{property.address}, {property.city}</h1>
                    <span>{property.description}</span>
                    <div className="status-container">
                        <img src={statusImages[property.status]} style={{width:'250px'}} />
                        <span>★{float(property.rating)}</span>
                    </div>
                </div>
                <div className="right">
                    <div className="upper-part">
                        <div className="left-part">
                            <span>Availability</span>
                            <p>{property.vacancy}</p>
                        </div>
                        <div className="right-part">
                            <span>Beds / Baths</span>
                            <p>{property.beds} beds {property.baths} baths</p>
                        </div>
                    </div>
                    <h1>${property.rent}<span>three nights +GST</span></h1>
                    <button>Reserve</button>
                </div>
            </section>
            <section className="section-2">
                <div>
                    <div>
                        <i className="fa-solid fa-car"></i>
                        <div>
                            <span>Easy Transport</span>
                            <p>Get rides easily in the area</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-tv"></i>
                        <div>
                            <span>Netflix and chill</span>
                            <p>TV available with Netflix and cable</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="fa-solid fa-wifi"></i>
                        <div>
                            <span>WIFI available</span>
                            <p>Keep yourself in touch socially</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-building-columns"></i>
                        <div>
                            <span>Explore History</span>
                            <p>Historical site nearby </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3" style={{gap:'150px'}}>
                <div className="about-section">
                    <h1>About this place</h1>
                    <p style={{fontSize:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="host-section">
                    <img src={host_img} />
                    <div>
                        <h1>{property.host}</h1>
                        <p style={{fontSize:'20px'}}>Host rating</p>
                        <span>{float(property.hostrating)}★</span>
                    </div>
                </div>
            </section>
            <section className="section-4">
                <h1>{float(property.rating)}</h1>
                <span>Overall rating</span>
                <p>One of the most loved homes on Fakebnb based on ratings, reviews, and reliability</p>
                <div className="rating-section">
                    <div>
                        <h2>Cleanliness</h2>
                        <span>{float(property.cleanliness)}</span>
                    </div>
                    <div>
                        <h2>Accuracy</h2>
                        <span>{float(property.accuracy)}</span>
                    </div>
                    <div>
                        <h2>Communication</h2>
                        <span>{float(property.communication)}</span>
                    </div>
                    <div>
                        <h2>Location</h2>
                        <span>{float(property.location)}</span>
                    </div>
                    <div>
                        <h2>Value</h2>
                        <span>{float(property.value)}</span>
                    </div>
                </div>
                <div className="review-section" style={{gap:'40px'}}>
                    <section className="left-reviews">
                    <div className="review">
                            <div className="user-info">
                                <img src={customer_img} style={{width:'50px'}} />
                                <div>
                                    <h1>John Snow</h1>
                                    <p>3 months ago</p>
                                </div>
                            </div>
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                        <div className="review">
                            <div className="user-info">
                                <img src={customer_img} style={{width:'50px'}} />
                                <div>
                                    <h1>Sansa Stark</h1>
                                    <p>1 year ago</p>
                                </div>
                            </div>
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                    </section>
                    <section className="right-reviews">
                    <div className="review">
                            <div className="user-info">
                                <img src={customer_img} style={{width:'50px'}} />
                                <div>
                                    <h1>Tyrion Lannister</h1>
                                    <p>8 months ago</p>
                                </div>
                            </div>
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                        <div className="review">
                            <div className="user-info">
                                <img src={customer_img} style={{width:'50px'}} />
                                <div>
                                    <h1>Grey Worm</h1>
                                    <p>2 years ago</p>
                                </div>
                            </div>
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                    </section>
                </div>
            </section>
            <section className="section-5">
                <h1>Things to know</h1>
                <div>
                    <div>
                        <h2>House rules</h2>
                        <span>Check-in after 1:00 PM</span>
                        <span>Check-in after 10:00 AM</span>
                        <span>No parties or events</span>
                    </div>
                    <div>
                        <h2>Safety & property</h2>
                        <span>Check-in after 1:00 PM</span>
                        <span>Check-in after 10:00 AM</span>
                        <span>No parties or events</span>
                    </div>
                    <div>
                        <h2>Cancellation policy</h2>
                        <span>Cancel before 3 days for a partial refund. After that, this reservation is non-refundable.</span>
                    </div>
                </div>
            </section>
        </div>
    )
}