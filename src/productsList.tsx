import axios from "axios";
import { type FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction, productsLoadedAction } from "./actions/products";
import {
  productsLoadingSelector,
  productsSelector,
} from "./selectors/products";
import Loading from "./Loading";

type ProductListPageProps = {};

const ProductListPage: FC<ProductListPageProps> = () => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAction());
    axios
      .get("https://myeasykart.codeyogi.io/products")
      .then((response) => {
        dispatch(productsLoadedAction(response.data.data));
      });
  }, []);

  return (
    <div>
      {loading && <Loading/>}
      {products &&
        products.map((p) => (
          <div className="text-2xl text-red-700" key={p.id}>
            {p.title} (Rs. {p.price})
          </div>
        ))}
    </div>
  );
};



export default memo(ProductListPage);