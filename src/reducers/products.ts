import {produce} from "immer";
import {type AnyAction } from "redux";
import { } from "../actions";
import type { Product } from "../models/Products";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/products";
import { ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";
import { normalize, schema } from "normalizr";

type NormalizedProducts={
  [id:number]:Product;
}

type State = {
    products:NormalizedProducts;
    loading:Boolean
};

const initialState: State = {
    products:{},
    loading:false
};

function productsReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading=true;
      });

    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        const products =  action.payload;
        const normalizedProducts = products.reduce(function(prev:NormalizedProducts,curr:Product){
          return {...prev,[curr.id]: curr};
        },{})
           
        draft.products= normalizedProducts;
        draft.loading=false;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        const orders= action.payload;
        const products = orders.reduce(function(prev:Product[],curr:any){
          return [...prev,...curr.products]
        },[])

        const normalizedProducts = products.reduce(function(prev:NormalizedProducts,curr:Product){
          return {...prev,[curr.id]: curr};
        },{})
           
        draft.products= normalizedProducts;
      });

    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order= action.payload;
        const productEntity= new schema.Entity("products");
        const data = normalize(order.products,[productEntity]);
        draft.products = {...draft.products,...data.entities.products} 
      });
    default:
      return state;
  }
}

export default productsReducer;


// By storing products in the products reducer:

// Every product is available in Redux.

// Selectors like ordersProductsSelector can always find the full product objects.

// Page reloads, navigating back, or fetching other orders will still have all product details available.

