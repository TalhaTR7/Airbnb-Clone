import { useState } from 'react';
import allproperties from './assets/property.json'; 
import Card from './Card';
import './css/Propertylist.css';
import loading_img from './assets/loading.svg';
import { Link } from 'react-router-dom';

export default function Propertylist({ selectedCategory }) {
    const [quanta, setQuanta] = useState(25);
    const [loading, setLoading] = useState(false);

    const properties = selectedCategory
        ? allproperties.filter(property => property.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase()))
        : allproperties;
    

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setQuanta(prev => prev + 25);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="card-container">
            {properties.slice(0, quanta).map((property) => ( 
                <Link to={`/property-details/${property.fakeid}`} key={property.fakeid}>
                    <Card property={property} />
                </Link>
            ))}
            {loading && <img src={loading_img} className="loading" />}
            {!loading && quanta < properties.length && 
                <button onClick={loadMore}>Show more</button>
            }
        </div>
    );
}
