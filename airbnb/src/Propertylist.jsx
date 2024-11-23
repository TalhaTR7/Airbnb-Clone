import { useEffect, useState } from 'react';
import allproperties from './server/property.json';
import Card from './Card';
import './css/Propertylist.css';
import loading_img from './assets/loading.svg';
import { Link } from 'react-router-dom';
import { useTheme } from './Theme';

export default function Propertylist({ selectedCategory, searchBarResult }) {

    const [quanta, setQuanta] = useState(0);
    const [loading, setLoading] = useState(false);
    const { darkmode } = useTheme();
    
    const properties = selectedCategory
        ? allproperties.filter(property => property.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase()))
        : searchBarResult !== ""
            ? allproperties.filter(property => property.city.toLowerCase() === searchBarResult.toLowerCase())
            : allproperties;


    useEffect(() => { setQuanta(25) }, [searchBarResult, selectedCategory]);


    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setQuanta(prev => prev + 25);
            setLoading(false);
        }, 1000);
    };



    return (
        <div className={`card-container ${darkmode ? "dark" : ""}`}>
            {properties.slice(0, quanta).map((property) => (
                <Link to={`/property?fakeid=${property.fakeid}`} key={property.fakeid}>
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