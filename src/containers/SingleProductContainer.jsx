import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/actionCreators/productsAction";
import SingleProduct from "../components/SingleProduct";

const SingleProductContainer = ({ match }) => {
  //ESTADOS
  const { singleProduct } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  //PEDIDO DE 1 SOLO PRODUCTO
  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);

  return <SingleProduct singleProduct={singleProduct} />;
};

export default SingleProductContainer;
