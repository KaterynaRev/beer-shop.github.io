import React from "react";


export default function ImgBusketUpper() {
    return (
        <>
            <div id="lineDiv"></div>
            <div className="divImgBusket">
                <img id="imgBusket" src={`${process.env.PUBLIC_URL}/basket_icon-icons.com_66289.svg`} alt="busket"/>
                <p>Shopping Cart</p>
            </div>
        </>
    )
}