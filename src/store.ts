import { configureStore } from "@reduxjs/toolkit";
import type {AnyAction } from "redux";
import sadnessReducer, { initialSadState, type sadState } from "./reducers/sadnessReducer";
import happinessReducer, { initialHappyState, type happyState } from "./reducers/happinessReducer";

export type Moment = {
    intensity: number;
    when: Date;
}

export type state={
    sad: sadState,
    happy: happyState
}

const initialState: state={
    sad:initialSadState,
    happy:initialHappyState
}

//reducer has to be non mutating
//reducer has to be a pure function0
function reducer(currentState = initialState, action: AnyAction): state{
   return{
        sad: sadnessReducer(currentState.sad, action),
        happy: happinessReducer(currentState.happy, action)
   }

}


const store= configureStore({reducer});  //as createStore is discontinued in newer version of Redux

export default store;


//Reducers must be pure so that for the same state and action they always return the same result, enabling predictable behavior, easy testing, and reliable Redux DevTools time travel.