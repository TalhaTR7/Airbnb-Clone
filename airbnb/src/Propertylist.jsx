
import { useState } from 'react';
import properties from './assets/property.json';
import Card from './Card';
import './css/Propertylist.css'
import loading_img from './assets/loading.svg'

export default function Propertylist() {
    const [quanta, setQuanta] = useState(25);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setQuanta(prev => prev + 25);
            setLoading(false);
        }, 1000);
    };
    
    return (
        <div className="card-container">
            {properties.slice(0, quanta).map((property, index) => (
                <Card key={index} property={property} />
            ))}
            {loading && <img src={loading_img} className="loading" />}
            {!loading && quanta < properties.length &&
                <button onClick={loadMore}>Show more</button>
            }
        </div>
    );
}