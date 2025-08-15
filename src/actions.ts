export const HAPPY_BUTTON_CLICKED = "happyButtonClicked";
export const SAD_BUTTON_CLICKED= "sadButtonClicked"

export const happyButtonClicked=(count:number, when: Date)=>({
    type:HAPPY_BUTTON_CLICKED,
    payload: {count, when}
})

export const sadButtonClicked=(count:number, when:Date)=>({
    type:SAD_BUTTON_CLICKED,
    payload:{count,when}
})