import { useState } from "react";


export default function UseIconsMenu({fetchBeers}){
    const [activeCategory, setActiveCategory] = useState("drinks");
    const [activeDrinks, setActiveDrinks] = useState("");
    const [selectedBeerId, setSelectedBeerId] = useState(null);
    const [isOpenInform, setIsOpenInform] = useState(false);
    const [sortOption, setSortOption] = useState('name_ascending');
    const [isOpenSortMenu, setIsOpenSortMenu] = useState(false);

    const sortBeers = (beers, option) => {
        switch (option) {
            case "name_ascending":
                return [...beers].sort((a, b) => a.name.localeCompare(b.name));
            case  "name_descending":
                return [...beers].sort((a, b) => b.name.localeCompare(a.name));
            case "abv_ascending":
                return [...beers].sort((a, b) => a.abv - b.abv);
            case "abv_descending":
                return [...beers].sort((a, b) => b.abv - a.abv);
            default:
                return beers;
        }
    }
    const handleSort = (newSortOption) => {
        setSortOption(newSortOption);
        setIsOpenSortMenu(false);
    };

    const handleSortOpenToggle = () => {
        setIsOpenSortMenu(!isOpenSortMenu);
    }

    const handleButtonClick = (category, e) => {
        e.preventDefault();
        setActiveCategory(category);
        if (category === "drinks") {
            setActiveDrinks("");
        }
    };

    const handleFoodCategoryClick = (foodType, e) => {
        e.preventDefault();
        setActiveDrinks(foodType);
        setSelectedBeerId(null);
        fetchBeers(foodType);
    };

    const handleSelectBeer = (id) => {
        setSelectedBeerId(id);
        setIsOpenInform(true);
    };

    const handleCloseInform = () => {
        setIsOpenInform(false);
        setSelectedBeerId(null);
    };

   return {
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
   }
}