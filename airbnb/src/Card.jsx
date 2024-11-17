import './css/Card.css';
import house_template from "./assets/house-template.png";
import house_template_dark from "./assets/dark/house-template-dark.png";
import React from 'react';
import { useTheme } from './Theme';

export default function Card({ property }) {

    const { darkmode } = useTheme();

    return (
        <div className={`container ${darkmode ? "dark" : ""}`}>
            <div className="cover">
                <img src={!darkmode ? house_template : house_template_dark} />
            </div>
            <div className="details">
                <div className="upper">
                    <h1>{property.address}, <span>{property.city}</span></h1>
                    <h3>{property.description}</h3>
                </div>
                <div className="lower">
                    <div>
                        <h2>${property.rent}</h2>
                        <h3>{property.vacancy}</h3>
                    </div>
                    <span>★{parseFloat(property.rating).toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
}
