import { useState } from "react";

export default function UseSwipe(setPage, page, activeDrinks, setActiveDrinks, fetchBeers, beers, itemsPerPage) {
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);
    const [isTouchMove, setIsTouchMove] = useState(false);

    const handleSwipeVertical = () => {
        const diff = touchStartY - touchEndY;
        if (diff > 40 && page < Math.ceil(beers.length / itemsPerPage) - 1) {
            setPage((prevPage) => prevPage + 1);
        } else if (diff < -40 && page > 0) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleSwipeHorizontal = () => {
        const minSwipeDistance = 40;
        const distance = touchStartX - touchEndX;
        if (distance > minSwipeDistance) {
            if (activeDrinks === "") {
                setActiveDrinks("pizza");
                fetchBeers("pizza");
            } else if (activeDrinks === "pizza") {
                setActiveDrinks("steak");
                fetchBeers("steak");
            }
        } else if (distance < -minSwipeDistance) {
            if (activeDrinks === "steak") {
                setActiveDrinks("pizza");
                fetchBeers("pizza");
            } else if (activeDrinks === "pizza") {
                setActiveDrinks("");
                fetchBeers("");
            }
        }
    };

    const onTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setTouchStartY(e.touches[0].clientY);
    };

    const onTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
        setTouchEndY(e.touches[0].clientY);
        setIsTouchMove(true);
    };

    const onTouchEnd = () => {
        if (isTouchMove) {
            handleSwipeVertical();
            handleSwipeHorizontal();
        }
        setIsTouchMove(false);
    };

    return { onTouchStart, onTouchMove, onTouchEnd };
}
