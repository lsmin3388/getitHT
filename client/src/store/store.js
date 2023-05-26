import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "../store/questionSlice";

export const store = configureStore({
    reducer: {
        question: questionReducer,
    },
});
