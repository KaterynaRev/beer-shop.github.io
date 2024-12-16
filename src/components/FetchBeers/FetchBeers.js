import {useState} from "react";


export default function FetchBeers() {
    const [loading, setLoading] = useState(false);
    const [beers, setBeers] = useState([]);
    const fetchBeers = (foodType = "") => {
        setLoading(true);
        fetch(`${process.env.PUBLIC_URL}/mockBrewdog.json`)
            .then(response => response.json())
            .then(data => {
                if (foodType && foodType.trim() !== "") {
                    const filteredBeers = data.filter(beer => {
                        if (Array.isArray(beer.food_pairing)) {
                            return beer.food_pairing.some(food =>
                                food.toLowerCase().includes(foodType.toLowerCase())
                            );
                        } else if (typeof beer.food_pairing === "string") {
                            return beer.food_pairing.toLowerCase().includes(foodType.toLowerCase());
                        }
                        return false;
                    });
                    setBeers(filteredBeers);
                } else {
                    setBeers(data);
                }
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching beers:', error);
            });
    };

    return {
        fetchBeers,
        loading,
        beers,
        setBeers
    }
}




