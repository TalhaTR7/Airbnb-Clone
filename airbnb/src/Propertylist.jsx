
import { useEffect, useState } from 'react';
import properties from './assets/property.json';
import Card from './Card';
import './css/Propertylist.css'

export default function Propertylist() {
    const [quanta, setQuanta] = useState();

    useEffect(() => {
        setQuanta(25);
    }, [])

    const loadMore = () => {
        setQuanta(prev => prev + 25);
    };    
    return (
        <div className="card-container">
            {properties.slice(0, quanta).map((property, index) => (
                <Card key={index} property={property} />
            ))}
            {quanta < properties.length &&
                <button onClick={loadMore}>Show more</button>
            }
        </div>
    );
}