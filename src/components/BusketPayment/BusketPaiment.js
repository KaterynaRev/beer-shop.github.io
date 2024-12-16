import "./busketPayment.css"
import React from "react";
import TipsForWaiters from "./TipsForWaiters/TipsForWaiters";
import TotalPrice from "./TotalPrice";


export default function BusketPayment({totalPrice}) {
    return (
        <>
            <div className="divPaymentBusket">
                <TipsForWaiters totalPrice={totalPrice} />
                <TotalPrice totalPrice={totalPrice} />
                <div className="divBtnConfirm">
                    <button id="btnConfirm">Confirm Payment</button>
                </div>
            </div>
        </>
    )
}
