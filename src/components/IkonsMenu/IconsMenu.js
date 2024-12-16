import "./ikonsMenu.css";
import BeerListAll from "../BeerListAll/BeerListAll";
import SeeInformation from "../SeeInformation/SeeInformation";
import UseIconsMenu from "./UseIconsMenu";
import IconsUpper from "./IconsUpper";
import ActiveCategory from "./ActiveCategory";
import CategoryButton from "./CategoryButton";
import React from "react";


export default function IconsMenu({addCart, loading, beers, fetchBeers, cart}) {

    const {
        activeCategory,
        activeDrinks,
        setActiveDrinks,
        selectedBeerId,
        isOpenInform,
        sortOption,
        isOpenSortMenu,
        sortBeers,
        handleSort,
        handleSortOpenToggle,
        handleButtonClick,
        handleFoodCategoryClick,
        handleSelectBeer,
        handleCloseInform
    } = UseIconsMenu({fetchBeers});

    return (
        <>
            <IconsUpper selectedBeerId={selectedBeerId} handleButtonClick={handleButtonClick}
                        activeCategory={activeCategory}/>
            <div className="content">
                <ActiveCategory activeCategory={activeCategory}
                                handleFoodCategoryClick={handleFoodCategoryClick}
                                activeDrinks={activeDrinks}
                                isOpenSortMenu={isOpenSortMenu}
                                handleSort={handleSort}
                                handleSortOpenToggle={handleSortOpenToggle}/>
                <CategoryButton activeCategory={activeCategory}/>
            </div>
            {activeCategory === "drinks" && beers.length > 0 && (
                <BeerListAll loading={loading}
                             beers={sortBeers(beers, sortOption)}
                             activeDrinks={activeDrinks}
                             setActiveDrinks={setActiveDrinks}
                             handleSelectBeer={handleSelectBeer}
                             fetchBeers={fetchBeers}
                             selectedBeerId={selectedBeerId}
                />)}
            {selectedBeerId && <SeeInformation loading={loading}
                                               beers={beers}
                                               selectedBeerId={selectedBeerId}
                                               handleCloseInform={handleCloseInform}
                                               addCart={addCart}
                                               cart={cart}
            />}
        </>
    );
}