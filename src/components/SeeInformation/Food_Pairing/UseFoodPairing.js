import { useState } from "react";

export default function UseFoodPairing(){
    const [foodPairingCollapse, setFoodPairingCollapse] = useState(true);

    const togglefoodPairingCollapse = () => {
        setFoodPairingCollapse(!foodPairingCollapse);
    }

    const getWordsFoodPairings = (food_pairing, foodPairingCollapse) => {
        const fS = food_pairing.split(" ");
        const fSt = fS.slice(0, 2);
        if (foodPairingCollapse) {
            const firstTwoItems = fSt;
            return firstTwoItems ? firstTwoItems : food_pairing;
        }
        return food_pairing;
    };

    return {
        foodPairingCollapse,
        togglefoodPairingCollapse,
        getWordsFoodPairings
    };
}