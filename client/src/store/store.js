import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";

import questionReducer from "../store/questionSlice";
import questionMainReducer from "../store/questionMainSlice";

const rootReducer = combineReducers({
    question: questionReducer,
    questionMain: questionMainReducer,
});

const store = createStore(rootReducer);
export default store;
