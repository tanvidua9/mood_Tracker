import type { state } from "./store"
export function happyMomentSelector(State:state){
    return State.happyMoments;
}
export function sadMomentSelector(State:state){
    return State.sadMoments;
}