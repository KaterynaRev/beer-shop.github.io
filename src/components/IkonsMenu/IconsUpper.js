import React from "react";


export default function IconsUpper({selectedBeerId, handleButtonClick, activeCategory}){
    return (
        <div className={`classIkonsMenu ${selectedBeerId ? 'blurred' : ""}`}>
            <button onClick={(e) => handleButtonClick("drinks", e)}
                    className={`btnIkonsMenu ${activeCategory === "drinks" ? "active" : ""}`}>
                <img className="imgikons" src={`${process.env.PUBLIC_URL}/coffee-cup_icon-icons.com_69402.svg`}
                     alt="drinks"/>
            </button>
            <button onClick={(e) => handleButtonClick("food", e)}
                    className={`btnIkonsMenu ${activeCategory === "food" ? "active" : ""}`}>
                <img className="imgikons" src={`${process.env.PUBLIC_URL}/cutlery.png`} alt="cutlery"/>
            </button>
            <button onClick={(e) => handleButtonClick("discount", e)}
                    className={`btnIkonsMenu ${activeCategory === "discount" ? "active" : ""}`}>
                <img className="imgikons" src={`${process.env.PUBLIC_URL}/discount_offert_icon_179533.svg`}
                     alt="discount"/>
            </button>
            <button onClick={(e) => handleButtonClick("search", e)}
                    className={`btnIkonsMenu ${activeCategory === "search" ? "active" : ""}`}>
                <img className="imgikons" src={`${process.env.PUBLIC_URL}/searchmagnifierinterfacesymbol_79894.svg`}
                     alt="search"/>
            </button>
        </div>
    )
}