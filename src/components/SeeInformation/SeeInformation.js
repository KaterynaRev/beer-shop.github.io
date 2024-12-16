import "./seeInformation.css";
import SeeDescriptionContainer from "./Description/SeeDescriptionContainer";
import UseDescription from "./Description/UseDescription";
import FoodPairingContainer from "./Food_Pairing/FoodPairingContainer";
import UseFoodPairing from "./Food_Pairing/UseFoodPairing";
import React from "react";


export default function SeeInformation({
                                           loading,
                                           beers,
                                           selectedBeerId,
                                           handleCloseInform,
                                           addCart,
                                           cart
                                       }) {

    const currentBeer = beers.find(beer => beer.id === selectedBeerId);

    const handleAddInCart = () => {
        if (currentBeer) {
            addCart(currentBeer);
        }
    };

    const {toggleDescriptionCollapse, getWordsDescription, descriptionCollapse} = UseDescription();
    const {foodPairingCollapse, togglefoodPairingCollapse, getWordsFoodPairings} = UseFoodPairing();

    const isBeerInCart = cart.some(item => item.id === selectedBeerId);

    return (
        <>
            <button id="btnClose" onClick={handleCloseInform}>CLOSE</button>
            <div className="beerSee">
                {loading ? (
                    <p id="pLoadingSee">Loading...</p>
                ) : currentBeer ? (
                    <div className="beerContainerSee">
                        <div className="beerListSee">
                            <div key={currentBeer.id} className="beerItemSee">
                                <div className="imgBeerSee">
                                    {currentBeer.image_url ? (
                                        <img src={currentBeer.image_url}
                                             alt={currentBeer.name}
                                             onError={(e) => e.target.style.display = 'none'}/>
                                    ) : (
                                        <span className="altTextImg">{currentBeer.name}</span>
                                    )}
                                </div>
                                <h3 className="nameBeerh3See">{currentBeer.name}</h3>
                                <p className="tagLineSee">{currentBeer.tagline}</p>
                                <p className="abvSee">ABV {currentBeer.abv}%</p>
                                <SeeDescriptionContainer toggleDescriptionCollapse={toggleDescriptionCollapse}
                                                         getWordsDescription={getWordsDescription}
                                                         descriptionCollapse={descriptionCollapse}
                                                         currentBeer={currentBeer}/>
                                <FoodPairingContainer currentBeer={currentBeer}
                                                      foodPairingCollapse={foodPairingCollapse}
                                                      togglefoodPairingCollapse={togglefoodPairingCollapse}
                                                      getWordsFoodPairings={getWordsFoodPairings}
                                />
                            </div>
                            <button onClick={handleAddInCart}
                                    id="btnAddCart">{isBeerInCart ? "IN CART" : "ADD TO CART"}</button>
                        </div>
                    </div>
                ) : (
                    <p>No beers found.</p>
                )}
            </div>
        </>
    );
}