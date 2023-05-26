import {
    increaseAlcohol,
    increaseBodyTaste,
    increaseFlowery,
    increaseLinger,
    increaseNutty,
    increaseScent,
    increaseSweet,
    increaseSweety,
    initializeRaw,
    increaseSour,
    increaseBitter,
    increaseSparkle,
} from "../store/questionRawSlice";

export default function increaseWeight(type, weight) {
    switch (type) {
        case "scent":
            dispatch(increaseScent(weight));
            break;
        case "sweet":
            dispatch(increaseSweet(weight));
            break;
        case "linger":
            dispatch(increaseLinger(weight));
            break;
        case "body_taste":
            dispatch(increaseBodyTaste(weight));
            break;
        case "alcohol":
            dispatch(increaseAlcohol(weight));
            break;
        case "sweety":
            dispatch(increaseSweety(weight));
            break;
        case "nutty":
            dispatch(increaseNutty(weight));
            break;
        case "flowery":
            dispatch(increaseFlowery(weight));
            break;
        case "sour":
            dispatch(increaseSour(weight));
            break;
        case "bitter":
            dispatch(increaseBitter(weight));
            break;
        case "sparkle":
            dispatch(increaseSparkle(weight));
            break;
    }
}
