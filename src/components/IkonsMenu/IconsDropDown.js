import React from "react";


export default function IconsDropDown({handleSortOpenToggle, isOpenSortMenu, handleSort}){
    return (
        <div id="dropDownBtn">
            <button className="sortButton" onClick={handleSortOpenToggle}>SORT BY</button>
            {isOpenSortMenu && (
                <ul id="ulIdDrop">
                    <li id="liSorting">Sorting</li>
                    <li className="liOneDrop">
                        <button className="btnLiDrop" onClick={() => handleSort("name_ascending")}>
                            name ascending
                        </button>
                    </li>
                    <li className="liOneDrop">
                        <button className="btnLiDrop" onClick={() => handleSort("name_descending")}>
                            name descending
                        </button>
                    </li>
                    <li className="liOneDrop">
                        <button className="btnLiDrop" onClick={() => handleSort("abv_ascending")}>
                            abv ascending
                        </button>
                    </li>
                    <li className="liOneDrop">
                        <button className="btnLiDrop" onClick={() => handleSort("abv_descending")}>
                            abv descending
                        </button>
                    </li>
                </ul>
            )}
        </div>
    )
}