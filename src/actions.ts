export const HAPPY_BUTTON_CLICKED = "happyButtonClicked";
export const SAD_BUTTON_CLICKED= "sadButtonClicked"

export const happyButtonClicked=(count:number)=>({
    type:HAPPY_BUTTON_CLICKED,
    payload: count
})

export const sadButtonClicked=(count:number)=>({
    type:SAD_BUTTON_CLICKED,
    payload:count
})