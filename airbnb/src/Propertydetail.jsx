import "./css/Propertydetail.css"
import propertyImg_1 from "./assets/property-img-1.png"
import propertyImg_2 from "./assets/property-img-2.png"
import propertyImg_3 from "./assets/property-img-3.png"
import trending_status from "./assets/status-trending.png"
import hot_status from "./assets/status-hot.png"
import favourite_status from "./assets/status-favourite.png"

export default function Propertydetail({ property }) {

    const statusImages = {
        Trending: trending_status,
        Hot: hot_status,
        Favourite: favourite_status,
    };

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
                        <span>★{property.rating}</span>
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
                    <h1>${property.rate}<span>three nights +GST</span></h1>
                    <button>Reserve</button>
                </div>
            </section>
        </div>
    )
}