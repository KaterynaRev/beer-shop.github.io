import "./busketMenu.css";
import BusketPayment from "./BusketPayment";


export default function BusketMenu({
                                       cart,
                                       setCart,
                                       containerHeight,
                                       addCountBeer,
                                       subtractCountBeer,
                                       countBeer,
                                       deletedBeer,
                                       handleOpenBusket,
                                       isOpenBusket,
                                       totalPrice
                                   }) {

    const handleCountChange = (beerId, action, event) => {
        event.stopPropagation();
        if (action === 'add') {
            addCountBeer(beerId);
        } else if (action === 'subtract') {
            subtractCountBeer(beerId);
        }else if(action === 'delete'){
            deletedBeer(beerId);
        }
    };
    return (
        <>
            <div className="busketContainer" onClick={handleOpenBusket}
                 style={{height: containerHeight , transition: "height 0.3s ease"}}>
                <div id="lineDiv"></div>
                <div className="divImgBusket">
                    <img id="imgBusket" src="/basket_icon-icons.com_66289.svg" alt="busket"/>
                    <p>Shopping Cart</p>
                </div>
                <div className="cartInfoInBusket">
                    {cart.length > 0 ? (
                        cart.map((cartS) => (
                            <div key={cartS.id} className="divInfoC">
                                <img className="imgBeerCart" src={cartS.image_url} alt={cartS.name}/>
                                <h3 className="nameBeerh3Cart">{cartS.name}</h3>
                                <div className="priceBeerDivCart">
                                    <p className="priceBeerPCart"><strong>{cartS.price}</strong></p>
                                </div>
                                <div className="containerBtnAddSub">
                                    <button className="btnImgSubCount" onClick={(e) => handleCountChange(cartS.id, 'subtract', e)}>
                                        <img id="imgSubBeer"
                                             src="/minus-gross-horizontal-straight-line-symbol_icon-icons.com_74137.svg"
                                             alt="substrucktCount"/>
                                    </button>
                                    <p id="pCountBeer">{countBeer[cartS.id] || 0}</p>
                                    <button className="btnImgAddCount" onClick={(e) => handleCountChange(cartS.id, 'add', e)}>
                                        <img className="imgAddBeerInBusket" src="/Plus_icon-icons.com_71848.svg"
                                             alt="addProduct"/>
                                    </button>
                                    <button className="btnDeleteProduct">
                                        <img onClick={(e) => handleCountChange(cartS.id, 'delete', e)} id="imgDeleteProduct" src="/trash_bin_icon-icons.com_67981.svg"
                                             alt="delete"/>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p></p>
                    )}

                </div>
                {isOpenBusket && <BusketPayment
                    totalPrice={totalPrice}   />}
            </div>

        </>
    )
}