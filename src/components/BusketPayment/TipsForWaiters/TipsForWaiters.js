import React from "react";


export default function TipsForWaiters({totalPrice}) {
    return (
        <>
            <div className="divTips">
                <p id="pTips">Tips for waiters</p>
                <div className="divBtnTips">
                    <button id="btnZero">ZERO</button>
                    <button id="btnRound">ROUND UP</button>
                    <button id="btnPercent">10%</button>
                    <button id="btnCustom">CUSTOM</button>
                </div>
            </div>
            <div className="divSubtotal">
                <p id="pSubtotal">Subtotal</p>
                <p id="pPriceSub">{totalPrice.toFixed(2)}</p>
            </div>
            <div className="divTipsPP">
                <p id="pTipsPP">Tips</p>
                <p id="pTipsPPP">price</p>
            </div>
        </>
    )
}