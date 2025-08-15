import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED } from "../actions";

 export type happyState={
    happyMoments : Moment[]
}

export const initialHappyState: happyState={
    happyMoments:[]
}

function happinessReducer(currentState:happyState, action: AnyAction){
    switch(action.type){
        case HAPPY_BUTTON_CLICKED:
            return {
                ...currentState, 
                happyMoments:[...currentState.happyMoments,
                    {intensity:action.payload.count, when:action.payload.when,
                    }
                ]
            }
    }
    return currentState;
}
export default happinessReducer;