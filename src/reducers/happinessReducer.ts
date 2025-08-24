import type { AnyAction } from "redux";
import { produce } from "immer";
import type { Moment } from "../store";
import { CLEAR_BUTTON_CLICKED, HAPPY_BUTTON_CLICKED } from "../actions/mood-actions";

 export type State={
    happyMoments : Moment[]
}

export const initialHappyState: State={
    happyMoments:[]
}

function happinessReducer(currentState=initialHappyState, action: AnyAction){
    switch(action.type){
        case HAPPY_BUTTON_CLICKED:
            // return {
            //     ...currentState, 
            //     happyMoments:[...currentState.happyMoments,
            //         {intensity:action.payload.count, when:action.payload.when,
            //         }
            //     ]
            // }

            //const newHappyMoment={intensity:action.payload.count, when:action.payload.when} 
            // const newState = JSON.parse(JSON.stringify(newHappyMoment));  //deep copy but too much change, everything is new which is not needed
            // newState.happyMoments.push(newHappyMoment);  
            // return newState;


            //It uses Immer to let you write mutating code on a draft copy while actually producing a new immutable state.
            return produce(currentState,(draft)=>{
                draft.happyMoments.push(action.payload)
            })

        case CLEAR_BUTTON_CLICKED:
            return initialHappyState;
    }
    return currentState;
}
export default happinessReducer;



