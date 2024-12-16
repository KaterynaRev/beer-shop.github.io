import { useState } from "react";

export default function UseDescription(){
    const [descriptionCollapse, setDescriptionCollapse] = useState(true);

    const toggleDescriptionCollapse = () => {
        setDescriptionCollapse(!descriptionCollapse);
    }
    const getWordsDescription = (description) => {
        const words = description.split(" ");
        const firstSomeWords = words.slice(0, 4);
        return firstSomeWords;
    };

    return {
        toggleDescriptionCollapse,
        getWordsDescription,
        descriptionCollapse};
}