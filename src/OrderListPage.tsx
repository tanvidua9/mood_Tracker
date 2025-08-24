import {type FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOrderAction, ordersLoadedAction } from "./actions/orders";
import axios from "axios";
import { ordersLoadingSelector, ordersSelector } from "./selectors/orders";
import Loading from "./Loading";
import { Link } from "react-router-dom";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = () => {
  const dispatch= useDispatch();
  const ordersLoading= useSelector(ordersLoadingSelector);
  const orders= useSelector(ordersSelector);

  useEffect(()=>{
    dispatch(loadOrderAction());

    axios.get('https://dummyjson.com/carts').then((response)=>{
            dispatch(ordersLoadedAction(response.data.carts))
    })
  },[])


  if(ordersLoading) return <Loading/>;

  return (
    <div className="space-y-1">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded p-2 shadow-sm hover:bg-gray-50"
        >
          <Link to={`/orders/${order.id}`} className="font-medium text-blue-600">
            Order : {order.id}
          </Link>
          <p className="text-sm text-gray-600">
            Total Quantity: {order.totalQuantity}
          </p>
          <p className="text-sm text-gray-600">
            Products: {order.totalProducts}
          </p>
        </div>
      ))}
    </div>
  );
};



export default memo(OrderListPage);



