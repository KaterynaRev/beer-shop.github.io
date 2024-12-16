import "./busketMenu.css";
import BusketPayment from "../BusketPayment/BusketPaiment";
import UseBusketMenu from "../BusketMenu/UseBusketMenu";
import InfoCartInBusket from "./InfoCartInBusket";
import ImgBusketUpper from "./ImgBusketUpper";
import React from "react";

export default function BusketMenu({
                                       cart,
                                       setCart,
                                       containerHeight,
                                       countBeer,
                                       handleOpenBusket,
                                       isOpenBusket,
                                       totalPrice,
                                       setCountBeer,
                                   }) {

    const {handleCountChange} = UseBusketMenu({cart, setCart, setCountBeer});

    return (
        <>
            <div className="busketContainer" onClick={handleOpenBusket}
                 style={{height: containerHeight, transition: "height 0.3s ease"}}>
                <ImgBusketUpper />
                <InfoCartInBusket cart={cart} countBeer={countBeer} handleCountChange={handleCountChange}/>
                {isOpenBusket && <BusketPayment totalPrice={totalPrice}/>}
            </div>
        </>
    )
}