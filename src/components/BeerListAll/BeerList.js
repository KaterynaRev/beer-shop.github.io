import React from "react";
import BeerItem from "./BeerItem";


export default function BeerList({ beers, handleBeerClick }) {
    return (
        <div className="beerList">
            {beers.length > 0 ? (
                beers.map((beer) => (
                    <BeerItem key={beer.id} beer={beer} onBeerClick={handleBeerClick} />
                ))
            ) : (
                <p>No beers found.</p>
            )}
        </div>
    );
}
