import { connect } from "react-redux";
import { ordersMapSelector, ordersProductsSelector } from "./selectors/orders";
import { orderDetailLoadedAction } from "./actions/orders";
import type { state } from "./store";
import OrderDetailPage, { type OrderDetailPageProps } from "./OrderDetailPage";


//return object with prop names as keys and data from redux store as value
function mapStateToProps(State:state,ownProps:Partial<OrderDetailPageProps>){ //ownProps are bachihuiProps , here orderId
    const orderId:number= ownProps.orderId!;
    return{
      order :  ordersMapSelector(State)[orderId],
      products: ordersProductsSelector(State)[orderId]
    }
}

//an object with prop names as keys and action creators as objects
const  mapDispatchToProps={  
     orderDetailLoaded:orderDetailLoadedAction  ////now orderDetailLoaded function creates the action and dispatches it too , we don't need to use 'dispatch' alg se
}


export default connect(mapStateToProps,mapDispatchToProps)(OrderDetailPage)  


// connect is a function from react-redux that links your React component to the Redux store.
// It lets your component:
// Read data from the store (using mapStateToProps).
// Send actions to the store (using mapDispatchToProps).


//OrderDetailPage(requires 4 props)=> OrderDetailConnect(requires 1 prop)=>OrderDetailConnectWithRouter(no prop required)