import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        sweet: 0,
        sour: 0,
        bitter: 0,
        body_taste: 0,
        sparkle: 0,
        alcohol: 0,
        scent: 0,
        linger: 0,
        sweety: 0,
        nutty: 0,
        flowery: 0,
    },
};

export const questionMainSlice = createSlice({
    name: "questionMain",
    initialState,
    reducers: {
        increaseScent: (state, action) => {
            state.value.scent += action.payload;
        },
        increaseSweet: (state, action) => {
            state.value.sweet += action.payload;
        },
        increaseLinger: (state, action) => {
            state.value.linger += action.payload;
        },
        increaseBodyTaste: (state, action) => {
            state.value.body_taste += action.body_taste;
        },
        increaseAlcohol: (state, action) => {
            state.value.alcohol += action.payload;
        },
        increaseSweety: (state, action) => {
            state.value.sweety += action.payload;
        },
        increaseNutty: (state, action) => {
            state.value.nutty += action.payload;
        },
        increaseFlowery: (state, action) => {
            state.value.flowery += action.payload;
        },
        increaseSour: (state, action) => {
            state.value.sour += action.payload;
        },
        increaseBitter: (state, action) => {
            state.value.bitter += action.payload;
        },
        increaseSparkle: (state, action) => {
            state.value.sparkle += action.payload;
        },
        initializeRaw: (state) => {
            state.value = {
                sweet: 0,
                sour: 0,
                bitter: 0,
                body_taste: 0,
                sparkle: 0,
                alcohol: 0,
                scent: 0,
                linger: 0,
                sweety: 0,
                nutty: 0,
                flowery: 0,
            };
        },
    },
});

export const {
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
} = questionMainSlice.actions;
export default questionMainSlice.reducer;
