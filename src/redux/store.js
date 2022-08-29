import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import testReducer from "./test/testSlice";
import getCity from "./test/testSaga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer:{
        country: testReducer,
    },
    middleware: [saga]
});

saga.run(getCity)

export default store;