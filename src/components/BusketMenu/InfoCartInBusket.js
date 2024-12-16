import ContainerBtnAddSub from "./ContainerBtnAddSub";
import React from "react";

export default function InfoCartInBusket({cart, handleCountChange, countBeer}) {
    return (
        <div className="cartInfoInBusket">
            {cart.length > 0 ? (
                cart.map((cartS) => (
                    <div key={cartS.id} className="divInfoC">
                        <div className="imgBeerCart">
                            {cartS.image_url ? (
                                <img src={cartS.image_url} alt={cartS.name}
                                     onError={(e) => e.target.style.display = 'none'}/>
                            ) : (
                                <span className="altTextB">{cartS.name}</span>
                            )}
                        </div>
                        <h3 className="nameBeerh3Cart">{cartS.name}</h3>
                        <div className="priceBeerDivCart">
                            <p className="priceBeerPCart"><strong>{cartS.price}</strong></p>
                        </div>
                        <ContainerBtnAddSub handleCountChange={handleCountChange}
                                            cartS={cartS}
                                            countBeer={countBeer}/>
                    </div>
                ))) : (<p></p>)}
        </div>
    )
}