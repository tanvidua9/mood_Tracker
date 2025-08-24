import { createSelector } from "reselect";
import type { Product } from "../models/Products";
import type { state } from "../store"
import { productsMapSelector } from "./products";


export function orderStateSelector(State:state){
  return State.orders;
}

export const ordersLoadingSelector= createSelector(orderStateSelector,
  function(orderState){
    return orderState.loading;
  }
)

export const ordersMapSelector= createSelector(orderStateSelector, //Data stored as-> orders against order_ids -{1:{id:1,total_product:5,...}}
  (orderState)=> orderState.orders 
);


////Order data in state is stored in Normalized form but component order list need a normal array of orders.
export const ordersSelector= createSelector(ordersMapSelector,
  (normalizedOrders)=>Object.keys(normalizedOrders).map(orderId => normalizedOrders[+orderId])
)


export const  ordersProductsSelector=createSelector(ordersMapSelector,productsMapSelector,(ordersMap,productsMap)=>{
    return Object.keys(ordersMap).reduce<{[orderId:number]:Product[]}>((prev,currentOrderId)=>{
        const order=ordersMap[+currentOrderId];
        const productsArr=order.products.map((pid)=>productsMap[pid]);
        return {...prev,[currentOrderId]:productsArr};
    },{})
})

  
//   {
//      1: [ { id: 101, title: "Shoes" }, { id: 102, title: "Shirt" } ],
//      2: [ { id: 103, title: "Watch" } ]
//   }


//selector is a function that takes just whole state object and returns some data from it.
//selector can't take any other parameter except state.
//selector should be pure

//RESPONSIBILITIES OF SELECTOR
//1. Pick data – It extracts the part of the Redux store you ask for (using a selector function).
//2. Subscribe – It keeps your component subscribed to the Redux store.
//3. Update automatically – If that piece of data changes in the store, your component re-renders with the new value.


// When you use createSelector:
// You define the selector once, and it remembers the last result (memoization).
// If the input slices (orders, products) haven’t changed, calling the selector again returns the cached result — no recalculation.
// This prevents unnecessary computation and re-renders in your components.