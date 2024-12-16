import React, { useEffect, useState } from "react";
import BeerList from "./BeerList"
import UseSwipe from "./UseSwipe";
import "./beerListAll.css";


export default function BeerListAll({
                                        loading,
                                        beers,
                                        activeDrinks,
                                        setActiveDrinks,
                                        fetchBeers,
                                        handleSelectBeer,
                                        selectedBeerId,
                                    }) {
    const [page, setPage] = useState(0);
    const itemsPerPage = 9;
    const currentBeers = beers.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const { onTouchStart, onTouchMove, onTouchEnd } = UseSwipe(
        setPage,
        page,
        activeDrinks,
        setActiveDrinks,
        fetchBeers,
        beers,
        itemsPerPage
    );

    const handleBeerClick = (id, event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSelectBeer(id);
    };

    useEffect(() => {
        return () => {
            setPage(0);
        };
    }, []);

    return (
        <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className={`beerAll ${selectedBeerId ? "blurred" : ""}`}
        >
            {loading ? (
                <p id="pLoading">Loading...</p>
            ) : (
                <div className="beerContainer">
                    <BeerList beers={currentBeers} handleBeerClick={handleBeerClick} />
                </div>
            )}
        </div>
    );
}
