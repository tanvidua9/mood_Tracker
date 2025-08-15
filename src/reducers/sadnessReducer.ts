import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { CLEAR_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "../actions";

export type sadState={
    sadMoments : Moment[]
}

export const initialSadState: sadState={
    sadMoments:[]
}


function sadnessReducer(currentState:sadState, action:AnyAction){
    switch(action.type){
        case SAD_BUTTON_CLICKED:
            return {
                ...currentState, 
                sadMoments:[...currentState.sadMoments,
                    {intensity:action.payload.count, when:action.payload.when,
                    }
                ]
            }
        case CLEAR_BUTTON_CLICKED:
            return initialSadState;
    }
    return currentState;
}
export default sadnessReducer;