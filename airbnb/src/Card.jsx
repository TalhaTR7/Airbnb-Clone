import './css/Card.css'
import house_template from "./assets/house-template.png";
import React from 'react';

export default function Card({ property }) {
    return (
        <div className="container">
            <div className="cover">
                <img src={house_template} />
            </div>
            <div className="details">
                <div className="upper">
                    <h1>{property.address}, <span>{property.city}</span></h1>
                    <h3>{property.description}</h3>
                </div>
                <div className="lower">
                    <div>
                        <h2>${property.rate} night</h2>
                        <h3>{property.vacancy[0]}</h3>
                    </div>
                    <span>★{property.rating === "new" ? "new" : parseFloat(property.rating).toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
}
