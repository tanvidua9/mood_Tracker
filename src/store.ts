import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sadnessReducer from "./reducers/sadnessReducer";
import happinessReducer  from "./reducers/happinessReducer";
import productsReducer from "./reducers/products";
import orderReducer from "./reducers/orders";

export type Moment = {
    intensity: number;
    when: Date;
}

//reducer has to be non mutating
//but bekar mein naya object nahi bnana kyunki unncessary refresh hoga
//reducer has to be a pure function


const reducer= combineReducers({
    sad: sadnessReducer,
    happy:happinessReducer,
    products:productsReducer,
    orders: orderReducer
})

export type state= ReturnType<typeof reducer>


const store= configureStore({reducer});  //as createStore is discontinued in newer version of Redux

export default store;


//Reducers must be pure so that for the same state and action they always return the same result, enabling predictable behavior, easy testing, and reliable Redux DevTools time travel.

//A reducer must be non-mutating because Redux relies on immutability to:
// Detect changes — it compares old and new state objects by reference. If you mutate, the reference stays the same, and Redux thinks nothing changed, therefore resfresh ni krega
