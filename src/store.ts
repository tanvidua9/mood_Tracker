import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "redux";

export type state={
    sadCount: number,
    happyCount:number,
}

const initialState={
    sadCount:0,
    happyCount:0
}

//reducer has to be non mutating
function reducer(currentState:state = initialState, action: Action): state{
    if(action.type === "Happy button clicked"){
        return {...currentState, happyCount: currentState.happyCount+1}
    }else if(action.type === "Sad button clicked"){
        return {...currentState, sadCount: currentState.sadCount+1}
    }

    return currentState;
}


const store= configureStore({reducer});  //as createStore is discontinued in newer version of Redux

export default store;