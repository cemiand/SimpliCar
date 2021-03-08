import axios from "axios";
import { SET_PRODUCTS, SET_SINGLEPRODUCT } from "../constants";

const products = (data) => ({
  type: SET_PRODUCTS,
  payload: data,
});

const singleProduct = (data) => ({
  type: SET_SINGLEPRODUCT,
  payload: data,
});

// PEDIDO A TODOS LOS PRODUCTOS

//PEDIDO CON API SIMPLICAR
// export const fetchProducts = () => () =>
//   axios
//     .get(
//       "https://4my1q6hsyo.api.quickmocker.com/product",

//       {
//         headers: {
//           Accept: "application/json",
//           Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
//         },
//       }
//     )
//     .then((response) => console.log("DATA DEL API", response))
//     .catch((err) => console.log("ERROR", err));

export const fetchProducts = () => (dispatch) =>
  axios
    .get("https://private-anon-17e04ee16b-carsapi1.apiary-mock.com/cars")
    .then(({ data }) => dispatch(products(data.slice(0, 7))))
    .catch((err) => console.log("ERROR", err));

//PEDIDO A UN SOLO PRODUCTO

//PEDIDO CON API SIMPLICAR
// export const fetchSingleProduct = (id) => (dispatch) => {
//   axios
//     .get(
//       `https://4my1q6hsyo.api.quickmocker.com/product/${id}`,

//       {
//         headers: {
//           Accept: "application/json",
//           Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
//         },
//       }
//     )
//     .then(({ data }) => dispatch(singleProduct(data)))
//     .catch((err) => console.log("ERROR", err));
// };

export const fetchSingleProduct = (id) => (dispatch) =>
  axios
    //.get(`https://private-anon-17e04ee16b-carsapi1.apiary-mock.com/cars/${id}`)   ESTE SERIA EL PEDIDO CORRECTO, PERO FALLA LA API!
    .get(
      "https://private-anon-17e04ee16b-carsapi1.apiary-mock.com/cars/<car_id>"
    )
    .then(({ data }) => dispatch(singleProduct(data)))
    .catch((err) => console.log("ERROR", err));
