import { createSelector } from "reselect";
import type { state } from "../store"

export function productStateSelector(State:state){
    return State.products;
}

export const  productsLoadingSelector= createSelector(productStateSelector,
    (productState)=> productState.loading 
)

export const productsMapSelector = createSelector(productStateSelector,
    (productState)=> productState.products
)


export const productsSelector=createSelector(productsMapSelector,
    (normalizedProducts)=>Object.keys(normalizedProducts).map((pid)=> normalizedProducts[+pid])
)