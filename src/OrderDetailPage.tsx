import {type FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import type { Order } from "./models/Order";
import type { Product } from "./models/Products";

export type OrderDetailPageProps = {
  order:Order;
  products:Product[]
  // ordersMap: {[orderId:number]:Order};
  // ordersProductsMap:{[orderId:number]:Product[]};
  orderDetailLoaded:(order:Order)=>void;
  orderId:number;
};

const OrderDetailPage: FC<OrderDetailPageProps> = ({order,products,orderDetailLoaded,orderId}) => {

    //const orderId= +params.orderId!;

    // const order= ordersMap[orderId];
    // const products = ordersProductsMap[orderId];

    useEffect(() => {
      axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
        orderDetailLoaded(response.data);
      })
  }, [orderId])

  if (!order) {
    return <Loading />
  }

    return (
    <div>
      This is detail page for order number {order.id} and price: {order.total}
      <div>
        {products.map((p) => (
          <div key={p.id}>
            {p.title}
          </div>
        ))}
      </div>
    </div>
  );
};




export default memo(OrderDetailPage);

//The ! after params.orderId is the non-null assertion operator in TypeScript, which tells the compiler “I’m sure this value is not null or undefined.”
