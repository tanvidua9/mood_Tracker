import { configureStore } from "@reduxjs/toolkit";
import type {AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./actions";

export type state={
    sadCount: number,
    happyCount:number,
}

const initialState={
    sadCount:0,
    happyCount:0
}

//reducer has to be non mutating
function reducer(currentState:state = initialState, action: AnyAction): state{
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED:
            return {
            ...currentState,
            happyCount: currentState.happyCount + action.payload,
            };
        case SAD_BUTTON_CLICKED:
            return {
            ...currentState,
            sadCount: currentState.sadCount + action.payload,
            };
        default:
            return currentState;
    }

}


const store= configureStore({reducer});  //as createStore is discontinued in newer version of Redux

export default store;