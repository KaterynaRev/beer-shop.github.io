import React from "react";


export default function SeeDescriptionContainer({
                                                    getWordsDescription,
                                                    toggleDescriptionCollapse,
                                                    descriptionCollapse,
                                                    currentBeer}){

    return (
        <div className="descriptionContainer">
            <p className={`descriptionSee ${descriptionCollapse ? "collapsed" : ""}`}
               onClick={toggleDescriptionCollapse}>
                {descriptionCollapse ? getWordsDescription(currentBeer.description) : currentBeer.description}</p>
            {currentBeer.description.length > 3 && (
                <button className="collapseButtonD" onClick={toggleDescriptionCollapse}>
                    {descriptionCollapse ? "Read more" : "Show less"}
                </button>
            )}
        </div>
    )
}