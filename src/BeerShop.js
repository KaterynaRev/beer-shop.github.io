import IkonsMenu from "./IkonsMenu";
import BusketMenu from "./BusketMenu";
import {useState, useEffect} from "react";

export default function BeerShop() {
    const [cart, setCart] = useState([]);
    const [countBeer, setCountBeer] = useState({});
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpenBusket, setIsOpenBusket] = useState(false);

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

    useEffect(() => {
        const savedCart = getCartFromLocalStorage();
        const savedCountBeer = getCountBeerFromLocalStorage();
        if (savedCart.length > 0 || Object.keys(savedCountBeer).length > 0) {
            setCart(savedCart);
            setCountBeer(savedCountBeer);
        }
    }, []);

    useEffect(() => {
        updateCartInLocalStorage();
    }, [cart, countBeer])

    const getTotalPrice = () => {
        return cart.reduce((total, beer) => {
            const beerCount = countBeer[beer.id] || 0;
            return total + (beerCount * beer.price);
        }, 0);
    };
    const fetchBeers = (foodType = "") => {
        setLoading(true);
        fetch(`/mockBrewdog.json`)
            .then(response => response.json())
            .then(data => {
                if (foodType) {
                    const filteredBeers = data.filter(beer => beer.food_pairings.includes(foodType));
                    setBeers(filteredBeers);
                } else {
                    setBeers(data)
                }
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching beers:', error);
            });
    };
    useEffect(() => {
        fetchBeers();
    }, []);

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
        ? (isOpenBusket ? '750px' : '80px') : (isOpenBusket ? '750px' : '165px');

    const handleOpenBusket = () => {
        setIsOpenBusket(prevBus => !prevBus);
    }

    const addCountBeer = (beerId) => {
        setCountBeer(prevCount => {
            const newCount = { ...prevCount, [beerId]: (prevCount[beerId] || 0) + 1 };
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
            const { [beerId]: deleted, ...remainingCount } = prevCountD;
            return remainingCount;
        })
    };

    return (
        <>
            <IkonsMenu addCart={addInCart}
                       beers={beers}
                       loading={loading}
                       fetchBeers={fetchBeers}
                       cart={cart}/>
            <BusketMenu cart={cart}
                        setCart={setCart}
                        containerHeight={containerHeight}
                        addCountBeer={addCountBeer}
                        subtractCountBeer={subtractCountBeer}
                        countBeer={countBeer}
                        deletedBeer={deletedBeer}
                        handleOpenBusket={handleOpenBusket}
                        isOpenBusket={isOpenBusket}
                        totalPrice={getTotalPrice()}/>
        </>
    )
}