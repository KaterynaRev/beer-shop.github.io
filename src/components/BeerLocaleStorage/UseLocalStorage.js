import {useState} from "react";


export default function UseLocalStorage(){
    const [cart, setCart] = useState([]);
    const [countBeer, setCountBeer] = useState({});

    const updateCartInLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('countBeer', JSON.stringify(countBeer));
    }

    const getCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const getCountBeerFromLocalStorage = () => {
        const savedCountBeer = localStorage.getItem("countBeer");
        return savedCountBeer ? JSON.parse(savedCountBeer) : {};
    };

    return {
        cart,
        setCart,
        setCountBeer,
        countBeer,
        updateCartInLocalStorage,
        getCartFromLocalStorage,
        getCountBeerFromLocalStorage
    }
}