import { configureStore } from "@reduxjs/toolkit";
import type {AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./actions";

type Moment = {
    intensity: number;
    when: Date;
}

export type state={
    sadMoments: Moment[],
    happyMoments:Moment[],
}

const initialState={
    sadMoments:[],
    happyMoments:[]
}

//reducer has to be non mutating
//reducer has to be a pure function0
function reducer(currentState:state = initialState, action: AnyAction): state{
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED:
            return {
            ...currentState,
            happyMoments: [...currentState.happyMoments, {intensity:action.payload.count, when: action.payload.when}]
            };
        case SAD_BUTTON_CLICKED:
            return {
            ...currentState,
            sadMoments:[...currentState.sadMoments, {intensity:action.payload.count, when: action.payload.when}]
            };
        default:
            return currentState;
    }

}


const store= configureStore({reducer});  //as createStore is discontinued in newer version of Redux

export default store;


//Reducers must be pure so that for the same state and action they always return the same result, enabling predictable behavior, easy testing, and reliable Redux DevTools time travel.