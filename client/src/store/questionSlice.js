import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        raw: 0,
        clear: 0,
        soju: 0,
        fruit: 0,
    },
};

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        increaseRaw: (state, action) => {
            state.value.raw += action.payload;
        },
        increaseClear: (state, action) => {
            state.value.clear += action.payload;
        },
        increaseSoju: (state, action) => {
            state.value.soju += action.payload;
        },
        increaseFruit: (state, action) => {
            state.value.fruit += action.payload;
        },
    },
});

export const { increaseRaw, increaseClear, increaseSoju, increaseFruit } = questionSlice.actions;
export default questionSlice.reducer;
