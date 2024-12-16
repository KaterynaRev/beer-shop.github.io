import React from "react";


export default function FoodPairingContainer({
                                                  currentBeer,
                                                  foodPairingCollapse,
                                                  getWordsFoodPairings,
                                                  togglefoodPairingCollapse
                                              }) {

    return (
        <div className="food_pairingSeeContainer">
            <p className={`food_pairingSee ${foodPairingCollapse ? "collapsed" : ""}`}
               onClick={togglefoodPairingCollapse}>
                Food
                Pairings: {getWordsFoodPairings(currentBeer.food_pairing, foodPairingCollapse)}
            </p>
            {currentBeer.food_pairing.length > 2 && (
                <button className="collapseButtonP" onClick={togglefoodPairingCollapse}>
                    {foodPairingCollapse ? "Read more" : "Show less"}
                </button>
            )}
        </div>
    )
}