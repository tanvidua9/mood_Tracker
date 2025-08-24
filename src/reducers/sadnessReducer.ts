import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { produce } from "immer";
import { CLEAR_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "../actions/mood-actions";

export type State={
    sadMoments : Moment[]
}

export const initialSadState: State={
    sadMoments:[]
}


function sadnessReducer(currentState = initialSadState, action:AnyAction){
    switch(action.type){
        case SAD_BUTTON_CLICKED:
            
            return produce(currentState,(draft)=>{
                draft.sadMoments.push(action.payload)
            })
        case CLEAR_BUTTON_CLICKED:
            return initialSadState;
    }
    return currentState;
}
export default sadnessReducer;