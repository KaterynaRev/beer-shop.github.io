import React from "react";


export default function BeerItem({ beer, onBeerClick }) {
    return (
        <div className="beerItem" onClick={(e) => onBeerClick(beer.id, e)}>
            <div className="imgBeerAll">
                {beer.image_url ? (
                    <img
                        src={beer.image_url}
                        alt={beer.name}
                        onError={(e) => (e.target.style.display = "none")}
                    />
                ) : (
                    <span className="altText">{beer.name}</span>
                )}
            </div>
            <h3 className="nameBeerh3">{beer.name}</h3>
            <p className="priceBeerP">
                <strong>{beer.ibu}</strong>
            </p>
        </div>
    );
}
