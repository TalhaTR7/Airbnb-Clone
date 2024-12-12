import './css/Card.css';
import house_template from "./assets/house-template.png";
import house_template_dark from "./assets/dark/house-template-dark.png";
import trending_card from "./assets/card-trending.png"
import favourite_card from "./assets/card-favourite.png"
import hot_card from "./assets/card-hot.png"
import trending_card_dark from "./assets/dark/card-trending-dark.png"
import favourite_card_dark from "./assets/dark/card-favourite-dark.png"
import hot_card_dark from "./assets/dark/card-hot-dark.png"
import React from 'react';
import { useTheme } from './Theme';

export default function Card({ property }) {

    const { darkmode } = useTheme();

    const giveimg = {
        Trending: darkmode ? trending_card_dark : trending_card,
        Hot: darkmode ? hot_card_dark : hot_card,
        Favourite: darkmode ? favourite_card_dark : favourite_card
    }

    return (
        <div className={`container ${darkmode ? "dark" : ""}`}>
            <div className="cover">
                <img src={!darkmode ? house_template : house_template_dark} />
            </div>
            <span className="rating-span">★ {parseFloat(property.rating).toFixed(1)}</span>
            <div className="details">
                <div className="upper">
                    <div>
                        <p className='primary'>{property.address}</p>
                        <p className='secondary'>{property.city}</p>
                    </div>
                    <img src={giveimg[property.status]} />
                </div>
                <div className="lower">
                    <p className='primary'>${property.rent} / night</p>
                    <div>
                        <p className='secondary'>{property.beds} {property.beds > 1 ? "Beds" : "Bed"} / {property.baths} {property.baths > 1 ? "Baths" : "Bath"}</p>
                        <p className='secondary'>{property.vacancy}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
