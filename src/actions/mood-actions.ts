import type { ActionCreator } from ".";
import type { Moment } from "../store";

export const HAPPY_BUTTON_CLICKED = "happyButtonClicked";
export const SAD_BUTTON_CLICKED= "sadButtonClicked";
export const CLEAR_BUTTON_CLICKED= "clearButtonClicked";



export const happyButtonClicked:ActionCreator<Moment>=(count:number, when: Date)=>({
    type:HAPPY_BUTTON_CLICKED,
    payload: {intensity:count, when}
})

export const sadButtonClicked:ActionCreator<Moment>=(count:number, when:Date)=>({
    type:SAD_BUTTON_CLICKED,
    payload:{intensity:count,when}
})

export const clearButtonClicked=()=>({
    type: CLEAR_BUTTON_CLICKED
})