import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actionCreators/productsAction";
import Products from "../components/Products";

const ProductsContainer = () => {
  //ESTADOS
  const { products } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  //PEDIDO DE TODOS LOS PRODUCTOS
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <Products products={products} />;
};

export default ProductsContainer;
