import React from "react";


export default function CategoryButton({activeCategory}) {
    return (
        <>
            {activeCategory === "food" && <div className="clButtonsFood">
                <button>All food</button>
            </div>}
            {activeCategory === "discount" && <div className="clButtonsDiscount">
                <button>All promotional products</button>
            </div>}
            {activeCategory === "search" && <div className="clButtonsSearch">
                <button>Search products</button>
            </div>}
        </>
    )
}