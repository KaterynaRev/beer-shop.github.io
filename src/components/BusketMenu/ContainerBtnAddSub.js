import React from "react";


export default function ContainerBtnAddSub({handleCountChange, cartS, countBeer}){
    return (
        <div className="containerBtnAddSub">
            <button className="btnImgSubCount"
                    onClick={(e) => handleCountChange(cartS.id, 'subtract', e)}>
                <img id="imgSubBeer"
                     src={`${process.env.PUBLIC_URL}/minus-gross-horizontal-straight-line-symbol_icon-icons.com_74137.svg`}
                     alt="substrucktCount"/>
            </button>
            <p id="pCountBeer">{countBeer[cartS.id] || 0}</p>
            <button className="btnImgAddCount"
                    onClick={(e) => handleCountChange(cartS.id, 'add', e)}>
                <img className="imgAddBeerInBusket"
                     src={`${process.env.PUBLIC_URL}/Plus_icon-icons.com_71848.svg`}
                     alt="addProduct"/>
            </button>
            <button className="btnDeleteProduct">
                <img onClick={(e) => handleCountChange(cartS.id, 'delete', e)}
                     id="imgDeleteProduct"
                     src={`${process.env.PUBLIC_URL}/trash_bin_icon-icons.com_67981.svg`}
                     alt="delete"/>
            </button>
        </div>
    )
}