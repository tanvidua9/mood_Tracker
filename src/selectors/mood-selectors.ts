import type { state } from "../store"
export function happyMomentSelector(State:state){
    return State.happy.happyMoments;
}

export function sadMomentSelector(State:state){
    return State.sad.sadMoments;
}

