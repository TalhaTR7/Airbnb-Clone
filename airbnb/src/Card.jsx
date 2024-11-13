import './css/Card.css'
import house_template from "./assets/house-template.png";

export default function Card({ property }) {
    return (
        <div class="container">
            <div class="image">
                <img src={house_template} />
            </div>
            <div class="details">
                <h1>{property.address}, {property.city}</h1>
                <h3>{property.description}</h3>
                <h2>{property.vacancy[0]}</h2>
                <div>
                    <h2>{property.rent} Night</h2>
                    <span>★{property.rating}</span>
                </div>
            </div>
        </div>
    );
}
