import './css/Card.css'

export default function Section({ property }) {
    return (
        <div>
            <img src={property.image} />
        </div>
    );
}
