import {produce} from "immer";
import { type Action } from "../actions";
import type { Order } from "../models/Order";
import {normalize, schema} from "normalizr"
import { LOAD_ORDERS, ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";

type NormalizedOrder={[id:number]:Order}

export type State = {
    loading:boolean,
    orders:NormalizedOrder;
};

export const initialState: State = {
    loading:false,
    orders:{},
};

function orderReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(state, (draft) => {
        draft.loading=true;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        draft.loading=false;
        const orderArr = action.payload;
      
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders",{
          products:[productEntity]
        });

        const data = normalize(orderArr, [orderEntity])
        draft.orders= data.entities.orders!;
      },);
    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders",{
            products:[productEntity]
          });

        const data = normalize(order, orderEntity);
        console.log("normalized data",data);
        draft.orders[order.id] = data.entities.orders![order.id];
      });
      default:
        return state;
  }
}

export default orderReducer;




// WHY NORMALIZING THE DATA?
// 1. O(1) Access – You can get an order directly instead of looping through the array.
// const order = state.orders[2];

//2. Easy Updates – Updating one order is just:
// draft.orders[2].status = "cancelled";

//3. Avoid Duplicates – Since each order ID is a unique key, new data will replace the old one instead of duplicating.
//4. Scalability – Works better when you have lots of entities (users, products, orders, etc.).


//normalizr is used to convert nested data into a structured form (like a dictionary)
//You define productEntity and orderEntity so normalizr knows relationships (orders contain products).
// Without normalizr = orders carry the whole product details again and again.
// With normalizr = orders only carry product IDs, and actual product details are stored in a separate dictionary.
// That’s why your entities object now looks like:
// {
//   entities: {
//     orders: {
//       1: {
//         id: 1,
//         discountedTotal: 89686.65,
//         products: [168, 78, 183, 100],
//         total: 103774.85,
//         totalProducts: 4,
//         totalQuantity: 15,
//         userId: 33
//       }
//     },
//     products: {
//       168: {...},
//       78: {...},
//       183: {...},
//       100: {...}
//     }
//   },
//   result: [1,2,3,...] // list of order IDs
// }
