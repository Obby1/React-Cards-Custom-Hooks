import { useState } from "react";
import axios from "axios";

function useFlipCard(initialVal = true) {
    const [isFacingUp, setIsFacingUp] = useState(initialVal);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    }

    return [isFacingUp, flipCard]

}

function useAxios(baseUrl) {
    const [data, setData] = useState([]);

    const addData = async (urlSuffix = "") => {
        const response = await axios.get(baseUrl + urlSuffix);
        setData(data => [...data, response.data]);
    };

    return [data, addData];
}

export { useFlipCard, useAxios };