import IconsDropDown from "./IconsDropDown";
import React from "react";

export default function ActiveCategory({activeCategory, handleFoodCategoryClick,
                                       handleSort, handleSortOpenToggle,
                                       isOpenSortMenu, activeDrinks}){
    return (
        activeCategory === "drinks" &&
        <div className="clButtonsBear">
            <button onClick={(e) => handleFoodCategoryClick("", e)}
                    className={`activeDrkCl ${activeDrinks === "" ? "active" : ""}`}>ALL
            </button>
            <button onClick={(e) => handleFoodCategoryClick("pizza", e)}
                    className={`activeDrkCl ${activeDrinks === "pizza" ? "active" : ""}`}>PIZZA
            </button>
            <button onClick={(e) => handleFoodCategoryClick("steak", e)}
                    className={`activeDrkCl ${activeDrinks === "steak" ? "active" : ""}`}>STEAK
            </button>
            <IconsDropDown isOpenSortMenu={isOpenSortMenu} handleSort={handleSort}
                           handleSortOpenToggle={handleSortOpenToggle} />
        </div>
    )
}