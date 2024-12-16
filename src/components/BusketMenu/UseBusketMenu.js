import { useState } from "react";


export default function UseBusketMenu({cart, setCart, setCountBeer}){
    const [isOpenBusket, setIsOpenBusket] = useState(false);

    const addInCart = (beer) => {
        if ((!cart.some(item => item.id === beer.id))) {
            setCart([...cart, beer]);
            setCountBeer(prevCount => ({
                ...prevCount,
                [beer.id]: 1,
            }));
        }
    };

    const containerHeight = cart.length === 0
        ? (isOpenBusket ? '74vh' : '10%') : (isOpenBusket ? '74vh' : '17%')
            ? (isOpenBusket ? '74vh' : '17%') : (isOpenBusket ? '74vh' : '40%');


    const handleOpenBusket = () => {
        setIsOpenBusket(prevBus => !prevBus);
    }
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

    const addCountBeer = (beerId) => {
        setCountBeer(prevCount => {
            const newCount = {...prevCount, [beerId]: (prevCount[beerId] || 0) + 1};
            return newCount;
        });
    };

    const subtractCountBeer = (beerId) => {
        setCountBeer(prevCounts => {
            const newCounts = {...prevCounts, [beerId]: Math.max((prevCounts[beerId] || 0) - 1, 0)};
            return newCounts;
        })
    };

    const deletedBeer = (beerId) => {
        setCart(cart.filter(item => item.id !== beerId));
        setCountBeer(prevCountD => {
            const {[beerId]: deleted, ...remainingCount} = prevCountD;
            return remainingCount;
        })
    };

    return {
        addInCart,
        containerHeight,
        handleOpenBusket,
        isOpenBusket,
        setIsOpenBusket,
        handleCountChange,
        addCountBeer,
        subtractCountBeer,
        deletedBeer,
        setCountBeer
    }
}